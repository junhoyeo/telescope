import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
export const protobufPackage = "cosmos.orm.module.v1alpha1";

/**
 * Module defines the ORM module which adds providers to the app container for
 * module-scoped DB's. In the future it may provide gRPC services for interacting
 * with ORM data.
 */
export interface Module {}
export interface ModuleProtoType {
  typeUrl: "/cosmos.orm.module.v1alpha1.Module";
  value: Uint8Array;
}

/**
 * Module defines the ORM module which adds providers to the app container for
 * module-scoped DB's. In the future it may provide gRPC services for interacting
 * with ORM data.
 */
export interface ModuleAmino {}
export interface ModuleAminoType {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}

/**
 * Module defines the ORM module which adds providers to the app container for
 * module-scoped DB's. In the future it may provide gRPC services for interacting
 * with ORM data.
 */
export interface ModuleSDKType {}

function createBaseModule(): Module {
  return {};
}

export const Module = {
  encode(_: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): Module {
    return {};
  },

  toJSON(_: Module): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<Module>): Module {
    const message = createBaseModule();
    return message;
  },

  fromSDK(_: ModuleSDKType): Module {
    return {};
  },

  toSDK(_: Module): ModuleSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: ModuleAmino): Module {
    return {};
  },

  toAmino(_: Module): ModuleAmino {
    const obj: any = {};
    return obj;
  }

};