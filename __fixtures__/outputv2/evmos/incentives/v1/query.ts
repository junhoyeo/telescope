import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveAmino, IncentiveSDKType, GasMeter, GasMeterAmino, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "evmos.incentives.v1";

/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryIncentivesRequestProtoType {
  typeUrl: "/evmos.incentives.v1.QueryIncentivesRequest";
  value: Uint8Array;
}

/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryIncentivesRequestAminoType {
  type: "/evmos.incentives.v1.QueryIncentivesRequest";
  value: QueryIncentivesRequestAmino;
}

/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequestSDKType {
  pagination?: PageRequestSDKType;
}

/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponse {
  incentives: Incentive[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryIncentivesResponseProtoType {
  typeUrl: "/evmos.incentives.v1.QueryIncentivesResponse";
  value: Uint8Array;
}

/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponseAmino {
  incentives: IncentiveAmino[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryIncentivesResponseAminoType {
  type: "/evmos.incentives.v1.QueryIncentivesResponse";
  value: QueryIncentivesResponseAmino;
}

/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponseSDKType {
  incentives: IncentiveSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequest {
  /** contract identifier is the hex contract address of a contract */
  contract: string;
}
export interface QueryIncentiveRequestProtoType {
  typeUrl: "/evmos.incentives.v1.QueryIncentiveRequest";
  value: Uint8Array;
}

/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequestAmino {
  /** contract identifier is the hex contract address of a contract */
  contract: string;
}
export interface QueryIncentiveRequestAminoType {
  type: "/evmos.incentives.v1.QueryIncentiveRequest";
  value: QueryIncentiveRequestAmino;
}

/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequestSDKType {
  contract: string;
}

/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponse {
  incentive?: Incentive;
}
export interface QueryIncentiveResponseProtoType {
  typeUrl: "/evmos.incentives.v1.QueryIncentiveResponse";
  value: Uint8Array;
}

/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponseAmino {
  incentive?: IncentiveAmino;
}
export interface QueryIncentiveResponseAminoType {
  type: "/evmos.incentives.v1.QueryIncentiveResponse";
  value: QueryIncentiveResponseAmino;
}

/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponseSDKType {
  incentive?: IncentiveSDKType;
}

/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequest {
  /** contract is the hex contract address of a incentivized smart contract */
  contract: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGasMetersRequestProtoType {
  typeUrl: "/evmos.incentives.v1.QueryGasMetersRequest";
  value: Uint8Array;
}

/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequestAmino {
  /** contract is the hex contract address of a incentivized smart contract */
  contract: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryGasMetersRequestAminoType {
  type: "/evmos.incentives.v1.QueryGasMetersRequest";
  value: QueryGasMetersRequestAmino;
}

/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequestSDKType {
  contract: string;
  pagination?: PageRequestSDKType;
}

/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponse {
  gasMeters: GasMeter[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryGasMetersResponseProtoType {
  typeUrl: "/evmos.incentives.v1.QueryGasMetersResponse";
  value: Uint8Array;
}

/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponseAmino {
  gas_meters: GasMeterAmino[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryGasMetersResponseAminoType {
  type: "/evmos.incentives.v1.QueryGasMetersResponse";
  value: QueryGasMetersResponseAmino;
}

/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponseSDKType {
  gas_meters: GasMeterSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequest {
  /** contract identifier is the hex contract address of a contract */
  contract: string;

  /** participant identifier is the hex address of a user */
  participant: string;
}
export interface QueryGasMeterRequestProtoType {
  typeUrl: "/evmos.incentives.v1.QueryGasMeterRequest";
  value: Uint8Array;
}

/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequestAmino {
  /** contract identifier is the hex contract address of a contract */
  contract: string;

  /** participant identifier is the hex address of a user */
  participant: string;
}
export interface QueryGasMeterRequestAminoType {
  type: "/evmos.incentives.v1.QueryGasMeterRequest";
  value: QueryGasMeterRequestAmino;
}

/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequestSDKType {
  contract: string;
  participant: string;
}

/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponse {
  /**
   * QueryGasMeterResponse is the response type for the Query/Incentive RPC
   * method.
   */
  gasMeter: Long;
}
export interface QueryGasMeterResponseProtoType {
  typeUrl: "/evmos.incentives.v1.QueryGasMeterResponse";
  value: Uint8Array;
}

/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponseAmino {
  /**
   * QueryGasMeterResponse is the response type for the Query/Incentive RPC
   * method.
   */
  gas_meter: string;
}
export interface QueryGasMeterResponseAminoType {
  type: "/evmos.incentives.v1.QueryGasMeterResponse";
  value: QueryGasMeterResponseAmino;
}

/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponseSDKType {
  gas_meter: Long;
}

/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllocationMetersRequestProtoType {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMetersRequest";
  value: Uint8Array;
}

/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllocationMetersRequestAminoType {
  type: "/evmos.incentives.v1.QueryAllocationMetersRequest";
  value: QueryAllocationMetersRequestAmino;
}

/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequestSDKType {
  pagination?: PageRequestSDKType;
}

/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponse {
  allocationMeters: DecCoin[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllocationMetersResponseProtoType {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMetersResponse";
  value: Uint8Array;
}

/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponseAmino {
  allocation_meters: DecCoinAmino[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllocationMetersResponseAminoType {
  type: "/evmos.incentives.v1.QueryAllocationMetersResponse";
  value: QueryAllocationMetersResponseAmino;
}

/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponseSDKType {
  allocation_meters: DecCoinSDKType[];
  pagination?: PageResponseSDKType;
}

/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequest {
  /** denom is the coin denom to query an allocation meter for. */
  denom: string;
}
export interface QueryAllocationMeterRequestProtoType {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMeterRequest";
  value: Uint8Array;
}

/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequestAmino {
  /** denom is the coin denom to query an allocation meter for. */
  denom: string;
}
export interface QueryAllocationMeterRequestAminoType {
  type: "/evmos.incentives.v1.QueryAllocationMeterRequest";
  value: QueryAllocationMeterRequestAmino;
}

/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequestSDKType {
  denom: string;
}

/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponse {
  allocationMeter?: DecCoin;
}
export interface QueryAllocationMeterResponseProtoType {
  typeUrl: "/evmos.incentives.v1.QueryAllocationMeterResponse";
  value: Uint8Array;
}

/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponseAmino {
  allocation_meter?: DecCoinAmino;
}
export interface QueryAllocationMeterResponseAminoType {
  type: "/evmos.incentives.v1.QueryAllocationMeterResponse";
  value: QueryAllocationMeterResponseAmino;
}

/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponseSDKType {
  allocation_meter?: DecCoinSDKType;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoType {
  typeUrl: "/evmos.incentives.v1.QueryParamsRequest";
  value: Uint8Array;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoType {
  type: "/evmos.incentives.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoType {
  typeUrl: "/evmos.incentives.v1.QueryParamsResponse";
  value: Uint8Array;
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoType {
  type: "/evmos.incentives.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}

function createBaseQueryIncentivesRequest(): QueryIncentivesRequest {
  return {
    pagination: undefined
  };
}

export const QueryIncentivesRequest = {
  encode(message: QueryIncentivesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIncentivesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryIncentivesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentivesRequest>): QueryIncentivesRequest {
    const message = createBaseQueryIncentivesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryIncentivesRequestSDKType): QueryIncentivesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryIncentivesRequest): QueryIncentivesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryIncentivesRequestAmino): QueryIncentivesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryIncentivesRequest): QueryIncentivesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryIncentivesResponse(): QueryIncentivesResponse {
  return {
    incentives: [],
    pagination: undefined
  };
}

export const QueryIncentivesResponse = {
  encode(message: QueryIncentivesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.incentives) {
      Incentive.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.incentives.push(Incentive.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIncentivesResponse {
    return {
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryIncentivesResponse): unknown {
    const obj: any = {};

    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toJSON(e) : undefined);
    } else {
      obj.incentives = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentivesResponse>): QueryIncentivesResponse {
    const message = createBaseQueryIncentivesResponse();
    message.incentives = object.incentives?.map(e => Incentive.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryIncentivesResponseSDKType): QueryIncentivesResponse {
    return {
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryIncentivesResponse): QueryIncentivesResponseSDKType {
    const obj: any = {};

    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toSDK(e) : undefined);
    } else {
      obj.incentives = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryIncentivesResponseAmino): QueryIncentivesResponse {
    return {
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryIncentivesResponse): QueryIncentivesResponseAmino {
    const obj: any = {};

    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toAmino(e) : undefined);
    } else {
      obj.incentives = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryIncentiveRequest(): QueryIncentiveRequest {
  return {
    contract: ""
  };
}

export const QueryIncentiveRequest = {
  encode(message: QueryIncentiveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentiveRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIncentiveRequest {
    return {
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },

  toJSON(message: QueryIncentiveRequest): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentiveRequest>): QueryIncentiveRequest {
    const message = createBaseQueryIncentiveRequest();
    message.contract = object.contract ?? "";
    return message;
  },

  fromSDK(object: QueryIncentiveRequestSDKType): QueryIncentiveRequest {
    return {
      contract: object?.contract
    };
  },

  toSDK(message: QueryIncentiveRequest): QueryIncentiveRequestSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    return obj;
  },

  fromAmino(object: QueryIncentiveRequestAmino): QueryIncentiveRequest {
    return {
      contract: object.contract
    };
  },

  toAmino(message: QueryIncentiveRequest): QueryIncentiveRequestAmino {
    const obj: any = {};
    obj.contract = message.contract;
    return obj;
  }

};

function createBaseQueryIncentiveResponse(): QueryIncentiveResponse {
  return {
    incentive: undefined
  };
}

export const QueryIncentiveResponse = {
  encode(message: QueryIncentiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incentive !== undefined) {
      Incentive.encode(message.incentive, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentiveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.incentive = Incentive.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIncentiveResponse {
    return {
      incentive: isSet(object.incentive) ? Incentive.fromJSON(object.incentive) : undefined
    };
  },

  toJSON(message: QueryIncentiveResponse): unknown {
    const obj: any = {};
    message.incentive !== undefined && (obj.incentive = message.incentive ? Incentive.toJSON(message.incentive) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIncentiveResponse>): QueryIncentiveResponse {
    const message = createBaseQueryIncentiveResponse();
    message.incentive = object.incentive !== undefined && object.incentive !== null ? Incentive.fromPartial(object.incentive) : undefined;
    return message;
  },

  fromSDK(object: QueryIncentiveResponseSDKType): QueryIncentiveResponse {
    return {
      incentive: object.incentive ? Incentive.fromSDK(object.incentive) : undefined
    };
  },

  toSDK(message: QueryIncentiveResponse): QueryIncentiveResponseSDKType {
    const obj: any = {};
    message.incentive !== undefined && (obj.incentive = message.incentive ? Incentive.toSDK(message.incentive) : undefined);
    return obj;
  },

  fromAmino(object: QueryIncentiveResponseAmino): QueryIncentiveResponse {
    return {
      incentive: object?.incentive ? Incentive.fromAmino(object.incentive) : undefined
    };
  },

  toAmino(message: QueryIncentiveResponse): QueryIncentiveResponseAmino {
    const obj: any = {};
    obj.incentive = message.incentive ? Incentive.toAmino(message.incentive) : undefined;
    return obj;
  }

};

function createBaseQueryGasMetersRequest(): QueryGasMetersRequest {
  return {
    contract: "",
    pagination: undefined
  };
}

export const QueryGasMetersRequest = {
  encode(message: QueryGasMetersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGasMetersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMetersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGasMetersRequest {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryGasMetersRequest): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGasMetersRequest>): QueryGasMetersRequest {
    const message = createBaseQueryGasMetersRequest();
    message.contract = object.contract ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryGasMetersRequestSDKType): QueryGasMetersRequest {
    return {
      contract: object?.contract,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryGasMetersRequest): QueryGasMetersRequestSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryGasMetersRequestAmino): QueryGasMetersRequest {
    return {
      contract: object.contract,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryGasMetersRequest): QueryGasMetersRequestAmino {
    const obj: any = {};
    obj.contract = message.contract;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryGasMetersResponse(): QueryGasMetersResponse {
  return {
    gasMeters: [],
    pagination: undefined
  };
}

export const QueryGasMetersResponse = {
  encode(message: QueryGasMetersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gasMeters) {
      GasMeter.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGasMetersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMetersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gasMeters.push(GasMeter.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGasMetersResponse {
    return {
      gasMeters: Array.isArray(object?.gasMeters) ? object.gasMeters.map((e: any) => GasMeter.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryGasMetersResponse): unknown {
    const obj: any = {};

    if (message.gasMeters) {
      obj.gasMeters = message.gasMeters.map(e => e ? GasMeter.toJSON(e) : undefined);
    } else {
      obj.gasMeters = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGasMetersResponse>): QueryGasMetersResponse {
    const message = createBaseQueryGasMetersResponse();
    message.gasMeters = object.gasMeters?.map(e => GasMeter.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryGasMetersResponseSDKType): QueryGasMetersResponse {
    return {
      gasMeters: Array.isArray(object?.gas_meters) ? object.gas_meters.map((e: any) => GasMeter.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryGasMetersResponse): QueryGasMetersResponseSDKType {
    const obj: any = {};

    if (message.gasMeters) {
      obj.gas_meters = message.gasMeters.map(e => e ? GasMeter.toSDK(e) : undefined);
    } else {
      obj.gas_meters = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryGasMetersResponseAmino): QueryGasMetersResponse {
    return {
      gasMeters: Array.isArray(object?.gas_meters) ? object.gas_meters.map((e: any) => GasMeter.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryGasMetersResponse): QueryGasMetersResponseAmino {
    const obj: any = {};

    if (message.gasMeters) {
      obj.gas_meters = message.gasMeters.map(e => e ? GasMeter.toAmino(e) : undefined);
    } else {
      obj.gas_meters = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryGasMeterRequest(): QueryGasMeterRequest {
  return {
    contract: "",
    participant: ""
  };
}

export const QueryGasMeterRequest = {
  encode(message: QueryGasMeterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }

    if (message.participant !== "") {
      writer.uint32(18).string(message.participant);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGasMeterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMeterRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;

        case 2:
          message.participant = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGasMeterRequest {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      participant: isSet(object.participant) ? String(object.participant) : ""
    };
  },

  toJSON(message: QueryGasMeterRequest): unknown {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.participant !== undefined && (obj.participant = message.participant);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGasMeterRequest>): QueryGasMeterRequest {
    const message = createBaseQueryGasMeterRequest();
    message.contract = object.contract ?? "";
    message.participant = object.participant ?? "";
    return message;
  },

  fromSDK(object: QueryGasMeterRequestSDKType): QueryGasMeterRequest {
    return {
      contract: object?.contract,
      participant: object?.participant
    };
  },

  toSDK(message: QueryGasMeterRequest): QueryGasMeterRequestSDKType {
    const obj: any = {};
    obj.contract = message.contract;
    obj.participant = message.participant;
    return obj;
  },

  fromAmino(object: QueryGasMeterRequestAmino): QueryGasMeterRequest {
    return {
      contract: object.contract,
      participant: object.participant
    };
  },

  toAmino(message: QueryGasMeterRequest): QueryGasMeterRequestAmino {
    const obj: any = {};
    obj.contract = message.contract;
    obj.participant = message.participant;
    return obj;
  }

};

function createBaseQueryGasMeterResponse(): QueryGasMeterResponse {
  return {
    gasMeter: Long.UZERO
  };
}

export const QueryGasMeterResponse = {
  encode(message: QueryGasMeterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gasMeter.isZero()) {
      writer.uint32(8).uint64(message.gasMeter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGasMeterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGasMeterResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gasMeter = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGasMeterResponse {
    return {
      gasMeter: isSet(object.gasMeter) ? Long.fromValue(object.gasMeter) : Long.UZERO
    };
  },

  toJSON(message: QueryGasMeterResponse): unknown {
    const obj: any = {};
    message.gasMeter !== undefined && (obj.gasMeter = (message.gasMeter || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGasMeterResponse>): QueryGasMeterResponse {
    const message = createBaseQueryGasMeterResponse();
    message.gasMeter = object.gasMeter !== undefined && object.gasMeter !== null ? Long.fromValue(object.gasMeter) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryGasMeterResponseSDKType): QueryGasMeterResponse {
    return {
      gasMeter: object?.gas_meter
    };
  },

  toSDK(message: QueryGasMeterResponse): QueryGasMeterResponseSDKType {
    const obj: any = {};
    obj.gas_meter = message.gasMeter;
    return obj;
  },

  fromAmino(object: QueryGasMeterResponseAmino): QueryGasMeterResponse {
    return {
      gasMeter: Long.fromString(object.gas_meter)
    };
  },

  toAmino(message: QueryGasMeterResponse): QueryGasMeterResponseAmino {
    const obj: any = {};
    obj.gas_meter = message.gasMeter ? message.gasMeter.toString() : undefined;
    return obj;
  }

};

function createBaseQueryAllocationMetersRequest(): QueryAllocationMetersRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllocationMetersRequest = {
  encode(message: QueryAllocationMetersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationMetersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMetersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllocationMetersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllocationMetersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllocationMetersRequest>): QueryAllocationMetersRequest {
    const message = createBaseQueryAllocationMetersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryAllocationMetersRequestSDKType): QueryAllocationMetersRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllocationMetersRequest): QueryAllocationMetersRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryAllocationMetersRequestAmino): QueryAllocationMetersRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAllocationMetersRequest): QueryAllocationMetersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryAllocationMetersResponse(): QueryAllocationMetersResponse {
  return {
    allocationMeters: [],
    pagination: undefined
  };
}

export const QueryAllocationMetersResponse = {
  encode(message: QueryAllocationMetersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allocationMeters) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationMetersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMetersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allocationMeters.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllocationMetersResponse {
    return {
      allocationMeters: Array.isArray(object?.allocationMeters) ? object.allocationMeters.map((e: any) => DecCoin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllocationMetersResponse): unknown {
    const obj: any = {};

    if (message.allocationMeters) {
      obj.allocationMeters = message.allocationMeters.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.allocationMeters = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllocationMetersResponse>): QueryAllocationMetersResponse {
    const message = createBaseQueryAllocationMetersResponse();
    message.allocationMeters = object.allocationMeters?.map(e => DecCoin.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryAllocationMetersResponseSDKType): QueryAllocationMetersResponse {
    return {
      allocationMeters: Array.isArray(object?.allocation_meters) ? object.allocation_meters.map((e: any) => DecCoin.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryAllocationMetersResponse): QueryAllocationMetersResponseSDKType {
    const obj: any = {};

    if (message.allocationMeters) {
      obj.allocation_meters = message.allocationMeters.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.allocation_meters = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryAllocationMetersResponseAmino): QueryAllocationMetersResponse {
    return {
      allocationMeters: Array.isArray(object?.allocation_meters) ? object.allocation_meters.map((e: any) => DecCoin.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryAllocationMetersResponse): QueryAllocationMetersResponseAmino {
    const obj: any = {};

    if (message.allocationMeters) {
      obj.allocation_meters = message.allocationMeters.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.allocation_meters = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryAllocationMeterRequest(): QueryAllocationMeterRequest {
  return {
    denom: ""
  };
}

export const QueryAllocationMeterRequest = {
  encode(message: QueryAllocationMeterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationMeterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMeterRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllocationMeterRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryAllocationMeterRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllocationMeterRequest>): QueryAllocationMeterRequest {
    const message = createBaseQueryAllocationMeterRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: QueryAllocationMeterRequestSDKType): QueryAllocationMeterRequest {
    return {
      denom: object?.denom
    };
  },

  toSDK(message: QueryAllocationMeterRequest): QueryAllocationMeterRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: QueryAllocationMeterRequestAmino): QueryAllocationMeterRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: QueryAllocationMeterRequest): QueryAllocationMeterRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseQueryAllocationMeterResponse(): QueryAllocationMeterResponse {
  return {
    allocationMeter: undefined
  };
}

export const QueryAllocationMeterResponse = {
  encode(message: QueryAllocationMeterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allocationMeter !== undefined) {
      DecCoin.encode(message.allocationMeter, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationMeterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllocationMeterResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allocationMeter = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllocationMeterResponse {
    return {
      allocationMeter: isSet(object.allocationMeter) ? DecCoin.fromJSON(object.allocationMeter) : undefined
    };
  },

  toJSON(message: QueryAllocationMeterResponse): unknown {
    const obj: any = {};
    message.allocationMeter !== undefined && (obj.allocationMeter = message.allocationMeter ? DecCoin.toJSON(message.allocationMeter) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllocationMeterResponse>): QueryAllocationMeterResponse {
    const message = createBaseQueryAllocationMeterResponse();
    message.allocationMeter = object.allocationMeter !== undefined && object.allocationMeter !== null ? DecCoin.fromPartial(object.allocationMeter) : undefined;
    return message;
  },

  fromSDK(object: QueryAllocationMeterResponseSDKType): QueryAllocationMeterResponse {
    return {
      allocationMeter: object.allocation_meter ? DecCoin.fromSDK(object.allocation_meter) : undefined
    };
  },

  toSDK(message: QueryAllocationMeterResponse): QueryAllocationMeterResponseSDKType {
    const obj: any = {};
    message.allocationMeter !== undefined && (obj.allocation_meter = message.allocationMeter ? DecCoin.toSDK(message.allocationMeter) : undefined);
    return obj;
  },

  fromAmino(object: QueryAllocationMeterResponseAmino): QueryAllocationMeterResponse {
    return {
      allocationMeter: object?.allocation_meter ? DecCoin.fromAmino(object.allocation_meter) : undefined
    };
  },

  toAmino(message: QueryAllocationMeterResponse): QueryAllocationMeterResponseAmino {
    const obj: any = {};
    obj.allocation_meter = message.allocationMeter ? DecCoin.toAmino(message.allocationMeter) : undefined;
    return obj;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },

  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },

  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },

  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },

  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },

  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },

  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },

  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  }

};