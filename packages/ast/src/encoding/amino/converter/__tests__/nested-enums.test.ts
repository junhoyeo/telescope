import { createAminoConverter } from '../index';
import { ProtoStore, parseProto } from '@osmonauts/proto-parser'
import { camel } from 'case';
import { prepareContext, expectCode } from '../../../../../test-utils/';

const store = new ProtoStore();
store.protos = [];
const addRef = ({ filename, content }) => {
    const ref = {
        absolute: filename,
        filename,
        proto: parseProto(content)
    };
    store.protos.push(ref);
};
addRef({
    filename: 'cosmology/example/tx.proto',
    content: `
syntax = "proto3";

package cosmology.finance;
option go_package = "github.com/cosmology-finance/go";

message MyAwesomeType {
    enum FancyEnumType {
        NO_HASH = 0;
        SHA256 = 1;
        SHA512 = 2;
        KECCAK = 3;
        RIPEMD160 = 4;
        BITCOIN = 5;
    }

    string address = 1;
    FancyEnumType myYolo0 = 2;
}

`});
addRef({
    filename: 'cosmology/example/msg.proto',
    content: `
syntax = "proto3";
package cosmology.finance;
option go_package = "github.com/cosmology-finance/go";

import "cosmology/example/tx.proto";

message MsgDoFunThing {
    string                              address        = 1;
    cosmology.finance.MyAwesomeType     awesome    = 2;
}

service Msg {
    rpc JoinPool(MsgDoFunThing) returns (MsgDoFunThingResponse);
}
message MsgDoFunThingResponse {}

`});

store.traverseAll();

describe('cosmology/example/msg', () => {
    const {
        context, root, protos
    } = prepareContext(store, 'cosmology/example/msg.proto')

    it('AminoConverter', () => {
        context.options = {
            aminoCasingFn: camel
        };
        expectCode(createAminoConverter({
            context,
            root,
            name: 'AminoConverter',
            protos
        }))
    })
});
