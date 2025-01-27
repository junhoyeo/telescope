import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * Selects and configures the service controller used by the service.  The
 * service controller handles features like abuse, quota, billing, logging,
 * monitoring, etc.
 */
export interface Control {
  /**
   * The service control environment to use. If empty, no control plane
   * feature (like quota and billing) will be enabled.
   */
  environment: string;
}

function createBaseControl(): Control {
  return {
    environment: ""
  };
}

export const Control = {
  encode(message: Control, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.environment !== "") {
      writer.uint32(10).string(message.environment);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Control {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.environment = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Control {
    return {
      environment: isSet(object.environment) ? String(object.environment) : ""
    };
  },

  toJSON(message: Control): unknown {
    const obj: any = {};
    message.environment !== undefined && (obj.environment = message.environment);
    return obj;
  },

  fromPartial(object: DeepPartial<Control>): Control {
    const message = createBaseControl();
    message.environment = object.environment ?? "";
    return message;
  }

};