import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
export const protobufPackage = "cosmos.base.query.v1beta1";
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   */
  key: Uint8Array;
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   */
  offset: bigint;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: bigint;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  countTotal: boolean;
  /**
   * reverse is set to true if results are to be returned in the descending order.
   * 
   * Since: cosmos-sdk 0.43
   */
  reverse: boolean;
}
export interface PageRequestProtoMsg {
  typeUrl: "/cosmos.base.query.v1beta1.PageRequest";
  value: Uint8Array;
}
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequestAmino {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   */
  key: Uint8Array;
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   */
  offset: string;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: string;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total: boolean;
  /**
   * reverse is set to true if results are to be returned in the descending order.
   * 
   * Since: cosmos-sdk 0.43
   */
  reverse: boolean;
}
export interface PageRequestAminoMsg {
  type: "cosmos-sdk/PageRequest";
  value: PageRequestAmino;
}
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 * 
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequestSDKType {
  key: Uint8Array;
  offset: bigint;
  limit: bigint;
  count_total: boolean;
  reverse: boolean;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   */
  nextKey: Uint8Array;
  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   */
  total: bigint;
}
export interface PageResponseProtoMsg {
  typeUrl: "/cosmos.base.query.v1beta1.PageResponse";
  value: Uint8Array;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponseAmino {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   */
  next_key: Uint8Array;
  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   */
  total: string;
}
export interface PageResponseAminoMsg {
  type: "cosmos-sdk/PageResponse";
  value: PageResponseAmino;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 * 
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponseSDKType {
  next_key: Uint8Array;
  total: bigint;
}
function createBasePageRequest(): PageRequest {
  return {
    key: new Uint8Array(),
    offset: BigInt(0),
    limit: BigInt(0),
    countTotal: false,
    reverse: false
  };
}
export const PageRequest = {
  typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
  encode(message: PageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.offset !== BigInt(0)) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.offset = reader.uint64();
          break;
        case 3:
          message.limit = reader.uint64();
          break;
        case 4:
          message.countTotal = reader.bool();
          break;
        case 5:
          message.reverse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageRequest>): PageRequest {
    const message = createBasePageRequest();
    message.key = object.key ?? new Uint8Array();
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = BigInt(object.offset.toString());
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit.toString());
    }
    message.countTotal = object.countTotal ?? false;
    message.reverse = object.reverse ?? false;
    return message;
  },
  fromAmino(object: PageRequestAmino): PageRequest {
    return {
      key: object.key,
      offset: BigInt(object.offset),
      limit: BigInt(object.limit),
      countTotal: object.count_total,
      reverse: object.reverse
    };
  },
  toAmino(message: PageRequest): PageRequestAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.offset = message.offset ? message.offset.toString() : undefined;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    obj.count_total = message.countTotal;
    obj.reverse = message.reverse;
    return obj;
  },
  fromAminoMsg(object: PageRequestAminoMsg): PageRequest {
    return PageRequest.fromAmino(object.value);
  },
  toAminoMsg(message: PageRequest): PageRequestAminoMsg {
    return {
      type: "cosmos-sdk/PageRequest",
      value: PageRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: PageRequestProtoMsg): PageRequest {
    return PageRequest.decode(message.value);
  },
  toProto(message: PageRequest): Uint8Array {
    return PageRequest.encode(message).finish();
  },
  toProtoMsg(message: PageRequest): PageRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.query.v1beta1.PageRequest",
      value: PageRequest.encode(message).finish()
    };
  }
};
function createBasePageResponse(): PageResponse {
  return {
    nextKey: new Uint8Array(),
    total: BigInt(0)
  };
}
export const PageResponse = {
  typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
  encode(message: PageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextKey = reader.bytes();
          break;
        case 2:
          message.total = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PageResponse>): PageResponse {
    const message = createBasePageResponse();
    message.nextKey = object.nextKey ?? new Uint8Array();
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total.toString());
    }
    return message;
  },
  fromAmino(object: PageResponseAmino): PageResponse {
    return {
      nextKey: object.next_key,
      total: BigInt(object.total)
    };
  },
  toAmino(message: PageResponse): PageResponseAmino {
    const obj: any = {};
    obj.next_key = message.nextKey;
    obj.total = message.total ? message.total.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PageResponseAminoMsg): PageResponse {
    return PageResponse.fromAmino(object.value);
  },
  toAminoMsg(message: PageResponse): PageResponseAminoMsg {
    return {
      type: "cosmos-sdk/PageResponse",
      value: PageResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: PageResponseProtoMsg): PageResponse {
    return PageResponse.decode(message.value);
  },
  toProto(message: PageResponse): Uint8Array {
    return PageResponse.encode(message).finish();
  },
  toProtoMsg(message: PageResponse): PageResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.query.v1beta1.PageResponse",
      value: PageResponse.encode(message).finish()
    };
  }
};