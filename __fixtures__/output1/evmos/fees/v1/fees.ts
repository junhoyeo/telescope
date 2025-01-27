import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfo {
  /** hex address of registered contract */
  contractAddress: string;

  /** bech32 address of contract deployer */
  deployerAddress: string;

  /**
   * bech32 address of account receiving the transaction fees
   * it defaults to deployer_address
   */
  withdrawAddress: string;
}

function createBaseDevFeeInfo(): DevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: ""
  };
}

export const DevFeeInfo = {
  encode(message: DevFeeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }

    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DevFeeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevFeeInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.deployerAddress = reader.string();
          break;

        case 3:
          message.withdrawAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DevFeeInfo {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },

  toJSON(message: DevFeeInfo): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<DevFeeInfo>): DevFeeInfo {
    const message = createBaseDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  }

};