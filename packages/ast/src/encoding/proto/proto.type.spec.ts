import { createProtoType, createCreateProtoType } from './types';
import authz from '../../../../../__fixtures__/proto-json/cosmos/authz/v1beta1/authz.json';
import gamm from '../../../../../__fixtures__/proto-json/osmosis/gamm/v1beta1/tx.json';
import generate from '@babel/generator';

import { ProtoStore, traverse, getNestedProto } from '@osmonauts/proto-parser'
import { defaultTelescopeOptions } from '@osmonauts/types'
import { ProtoParseContext } from '../context';

const store = new ProtoStore([__dirname + '/../../../../../__fixtures__/chain1']);

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}
const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}
store.traverseAll();
it('ListValue', async () => {
    const ref = store.findProto('google/protobuf/struct.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createProtoType(context, 'ListValue', getNestedProto(ref.traversed).ListValue));
});

it('Struct', async () => {
    const ref = store.findProto('google/protobuf/struct.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    expectCode(createProtoType(context, 'Struct', getNestedProto(ref.traversed).Struct));
});

describe('oneofs', () => {
    it('Value', async () => {
        const ref = store.findProto('google/protobuf/struct.proto');
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createProtoType(context, 'Value', getNestedProto(ref.traversed).Value));
    });
});

it('authz', async () => {
    const ref = store.findProto('cosmos/authz/v1beta1/authz.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);

    expectCode(createProtoType(context, 'authz',
        getNestedProto(authz).Grant
    ));
});

describe('createCreateProtoType', () => {
    it('Grant', () => {
        expectCode(createCreateProtoType('Grant',
            getNestedProto(authz).Grant
        ));
    });
    it('MsgJoinPool', () => {
        expectCode(createCreateProtoType('MsgJoinPool',
            getNestedProto(gamm).MsgJoinPool
        ));
    });
});

describe('traversed', () => {
    it('osmosis/claim/v1beta1/params', async () => {
        const ref = store.findProto('osmosis/claim/v1beta1/params.proto');
        const res = traverse(store, ref);
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createProtoType(context, 'Params', res.root.nested.osmosis.nested.claim.nested.v1beta1.nested.Params));
    });
    it('cosmos/app/v1alpha1/config', async () => {
        const ref = store.findProto('cosmos/app/v1alpha1/config.proto');
        const res = traverse(store, ref);
        const node = getNestedProto(res)
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        expectCode(createProtoType(context, 'Config', node.Config));
        expectCode(createProtoType(context, 'ModuleConfig', node.ModuleConfig));
    });
    it('google/api/expr/v1alpha1/checked', async () => {
        const ref = store.findProto('google/api/expr/v1alpha1/checked.proto');
        const res = traverse(store, ref);
        const node = getNestedProto(res)
        const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
        // console.log(JSON.stringify(res, null, 2))
        expectCode(createProtoType(context, 'CheckedExpr', node.CheckedExpr));
        expectCode(createProtoType(context, 'Reference', node.Reference));
    });
});
