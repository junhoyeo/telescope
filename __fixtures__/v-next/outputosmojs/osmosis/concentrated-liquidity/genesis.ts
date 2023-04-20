import { TickInfo, TickInfoSDKType } from "./tickInfo";
import { Any, AnySDKType } from "../../google/protobuf/any";
import { IncentiveRecord, IncentiveRecordSDKType } from "./incentive_record";
import { Params, ParamsSDKType } from "./params";
import { Position, PositionSDKType } from "./position";
import { AccumulatorContent, AccumulatorContentSDKType } from "../accum/v1beta1/accum";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "osmosis.concentratedliquidity.v1beta1";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTick {
  /** pool id associated with the tick. */
  poolId: bigint;
  /** tick's index. */
  tickIndex: bigint;
  /** tick's info. */
  info?: TickInfo;
}
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 */
export interface FullTickSDKType {
  pool_id: bigint;
  tick_index: bigint;
  info?: TickInfoSDKType;
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolData {
  /** pool struct */
  pool?: Any;
  /** pool's ticks */
  ticks: FullTick[];
  feeAccumulator?: AccumObject;
  incentivesAccumulators: AccumObject[];
  /** incentive records to be set */
  incentiveRecords: IncentiveRecord[];
}
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 */
export interface PoolDataSDKType {
  pool?: AnySDKType;
  ticks: FullTickSDKType[];
  fee_accumulator?: AccumObjectSDKType;
  incentives_accumulators: AccumObjectSDKType[];
  incentive_records: IncentiveRecordSDKType[];
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisState {
  /** params are all the parameters of the module */
  params?: Params;
  /** pool data containining serialized pool struct and ticks. */
  poolData: PoolData[];
  positions: Position[];
  nextPositionId: bigint;
}
/** GenesisState defines the concentrated liquidity module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  pool_data: PoolDataSDKType[];
  positions: PositionSDKType[];
  next_position_id: bigint;
}
export interface AccumObject {
  /** Accumulator's name (pulled from AccumulatorContent) */
  name: string;
  accumContent?: AccumulatorContent;
}
export interface AccumObjectSDKType {
  name: string;
  accum_content?: AccumulatorContentSDKType;
}
function createBaseFullTick(): FullTick {
  return {
    poolId: BigInt("0"),
    tickIndex: BigInt("0"),
    info: undefined
  };
}
export const FullTick = {
  encode(message: FullTick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.poolId.toString()));
    }
    if (message.tickIndex !== BigInt(0)) {
      writer.uint32(16).int64(Long.fromString(message.tickIndex.toString()));
    }
    if (message.info !== undefined) {
      TickInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FullTick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullTick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = BigInt(reader.uint64().toString());
          break;
        case 2:
          message.tickIndex = BigInt(reader.int64().toString());
          break;
        case 3:
          message.info = TickInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FullTick {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt("0"),
      tickIndex: isSet(object.tickIndex) ? BigInt(object.tickIndex.toString()) : BigInt("0"),
      info: isSet(object.info) ? TickInfo.fromJSON(object.info) : undefined
    };
  },
  toJSON(message: FullTick): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt("0")).toString());
    message.tickIndex !== undefined && (obj.tickIndex = (message.tickIndex || BigInt("0")).toString());
    message.info !== undefined && (obj.info = message.info ? TickInfo.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<FullTick>): FullTick {
    const message = createBaseFullTick();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt("0");
    message.tickIndex = object.tickIndex !== undefined && object.tickIndex !== null ? BigInt(object.tickIndex.toString()) : BigInt("0");
    message.info = object.info !== undefined && object.info !== null ? TickInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromSDK(object: FullTickSDKType): FullTick {
    return {
      poolId: object?.pool_id,
      tickIndex: object?.tick_index,
      info: object.info ? TickInfo.fromSDK(object.info) : undefined
    };
  },
  fromSDKJSON(object: any): FullTickSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt("0"),
      tick_index: isSet(object.tick_index) ? BigInt(object.tick_index.toString()) : BigInt("0"),
      info: isSet(object.info) ? TickInfo.fromSDKJSON(object.info) : undefined
    };
  },
  toSDK(message: FullTick): FullTickSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.tick_index = message.tickIndex;
    message.info !== undefined && (obj.info = message.info ? TickInfo.toSDK(message.info) : undefined);
    return obj;
  }
};
function createBasePoolData(): PoolData {
  return {
    pool: undefined,
    ticks: [],
    feeAccumulator: undefined,
    incentivesAccumulators: [],
    incentiveRecords: []
  };
}
export const PoolData = {
  encode(message: PoolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ticks) {
      FullTick.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.feeAccumulator !== undefined) {
      AccumObject.encode(message.feeAccumulator, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.incentivesAccumulators) {
      AccumObject.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.incentiveRecords) {
      IncentiveRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PoolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.ticks.push(FullTick.decode(reader, reader.uint32()));
          break;
        case 3:
          message.feeAccumulator = AccumObject.decode(reader, reader.uint32());
          break;
        case 4:
          message.incentivesAccumulators.push(AccumObject.decode(reader, reader.uint32()));
          break;
        case 5:
          message.incentiveRecords.push(IncentiveRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolData {
    return {
      pool: isSet(object.pool) ? Any.fromJSON(object.pool) : undefined,
      ticks: Array.isArray(object?.ticks) ? object.ticks.map((e: any) => FullTick.fromJSON(e)) : [],
      feeAccumulator: isSet(object.feeAccumulator) ? AccumObject.fromJSON(object.feeAccumulator) : undefined,
      incentivesAccumulators: Array.isArray(object?.incentivesAccumulators) ? object.incentivesAccumulators.map((e: any) => AccumObject.fromJSON(e)) : [],
      incentiveRecords: Array.isArray(object?.incentiveRecords) ? object.incentiveRecords.map((e: any) => IncentiveRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: PoolData): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
    if (message.ticks) {
      obj.ticks = message.ticks.map(e => e ? FullTick.toJSON(e) : undefined);
    } else {
      obj.ticks = [];
    }
    message.feeAccumulator !== undefined && (obj.feeAccumulator = message.feeAccumulator ? AccumObject.toJSON(message.feeAccumulator) : undefined);
    if (message.incentivesAccumulators) {
      obj.incentivesAccumulators = message.incentivesAccumulators.map(e => e ? AccumObject.toJSON(e) : undefined);
    } else {
      obj.incentivesAccumulators = [];
    }
    if (message.incentiveRecords) {
      obj.incentiveRecords = message.incentiveRecords.map(e => e ? IncentiveRecord.toJSON(e) : undefined);
    } else {
      obj.incentiveRecords = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PoolData>): PoolData {
    const message = createBasePoolData();
    message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
    message.ticks = object.ticks?.map(e => FullTick.fromPartial(e)) || [];
    message.feeAccumulator = object.feeAccumulator !== undefined && object.feeAccumulator !== null ? AccumObject.fromPartial(object.feeAccumulator) : undefined;
    message.incentivesAccumulators = object.incentivesAccumulators?.map(e => AccumObject.fromPartial(e)) || [];
    message.incentiveRecords = object.incentiveRecords?.map(e => IncentiveRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PoolDataSDKType): PoolData {
    return {
      pool: object.pool ? Any.fromSDK(object.pool) : undefined,
      ticks: Array.isArray(object?.ticks) ? object.ticks.map((e: any) => FullTick.fromSDK(e)) : [],
      feeAccumulator: object.fee_accumulator ? AccumObject.fromSDK(object.fee_accumulator) : undefined,
      incentivesAccumulators: Array.isArray(object?.incentives_accumulators) ? object.incentives_accumulators.map((e: any) => AccumObject.fromSDK(e)) : [],
      incentiveRecords: Array.isArray(object?.incentive_records) ? object.incentive_records.map((e: any) => IncentiveRecord.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): PoolDataSDKType {
    return {
      pool: isSet(object.pool) ? Any.fromSDKJSON(object.pool) : undefined,
      ticks: Array.isArray(object?.ticks) ? object.ticks.map((e: any) => FullTick.fromSDKJSON(e)) : [],
      fee_accumulator: isSet(object.fee_accumulator) ? AccumObject.fromSDKJSON(object.fee_accumulator) : undefined,
      incentives_accumulators: Array.isArray(object?.incentives_accumulators) ? object.incentives_accumulators.map((e: any) => AccumObject.fromSDKJSON(e)) : [],
      incentive_records: Array.isArray(object?.incentive_records) ? object.incentive_records.map((e: any) => IncentiveRecord.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: PoolData): PoolDataSDKType {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Any.toSDK(message.pool) : undefined);
    if (message.ticks) {
      obj.ticks = message.ticks.map(e => e ? FullTick.toSDK(e) : undefined);
    } else {
      obj.ticks = [];
    }
    message.feeAccumulator !== undefined && (obj.fee_accumulator = message.feeAccumulator ? AccumObject.toSDK(message.feeAccumulator) : undefined);
    if (message.incentivesAccumulators) {
      obj.incentives_accumulators = message.incentivesAccumulators.map(e => e ? AccumObject.toSDK(e) : undefined);
    } else {
      obj.incentives_accumulators = [];
    }
    if (message.incentiveRecords) {
      obj.incentive_records = message.incentiveRecords.map(e => e ? IncentiveRecord.toSDK(e) : undefined);
    } else {
      obj.incentive_records = [];
    }
    return obj;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    poolData: [],
    positions: [],
    nextPositionId: BigInt("0")
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolData) {
      PoolData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextPositionId !== BigInt(0)) {
      writer.uint32(32).uint64(Long.fromString(message.nextPositionId.toString()));
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolData.push(PoolData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nextPositionId = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolData: Array.isArray(object?.poolData) ? object.poolData.map((e: any) => PoolData.fromJSON(e)) : [],
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromJSON(e)) : [],
      nextPositionId: isSet(object.nextPositionId) ? BigInt(object.nextPositionId.toString()) : BigInt("0")
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolData) {
      obj.poolData = message.poolData.map(e => e ? PoolData.toJSON(e) : undefined);
    } else {
      obj.poolData = [];
    }
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? Position.toJSON(e) : undefined);
    } else {
      obj.positions = [];
    }
    message.nextPositionId !== undefined && (obj.nextPositionId = (message.nextPositionId || BigInt("0")).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolData = object.poolData?.map(e => PoolData.fromPartial(e)) || [];
    message.positions = object.positions?.map(e => Position.fromPartial(e)) || [];
    message.nextPositionId = object.nextPositionId !== undefined && object.nextPositionId !== null ? BigInt(object.nextPositionId.toString()) : BigInt("0");
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      poolData: Array.isArray(object?.pool_data) ? object.pool_data.map((e: any) => PoolData.fromSDK(e)) : [],
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromSDK(e)) : [],
      nextPositionId: object?.next_position_id
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      pool_data: Array.isArray(object?.pool_data) ? object.pool_data.map((e: any) => PoolData.fromSDKJSON(e)) : [],
      positions: Array.isArray(object?.positions) ? object.positions.map((e: any) => Position.fromSDKJSON(e)) : [],
      next_position_id: isSet(object.next_position_id) ? BigInt(object.next_position_id.toString()) : BigInt("0")
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.poolData) {
      obj.pool_data = message.poolData.map(e => e ? PoolData.toSDK(e) : undefined);
    } else {
      obj.pool_data = [];
    }
    if (message.positions) {
      obj.positions = message.positions.map(e => e ? Position.toSDK(e) : undefined);
    } else {
      obj.positions = [];
    }
    obj.next_position_id = message.nextPositionId;
    return obj;
  }
};
function createBaseAccumObject(): AccumObject {
  return {
    name: "",
    accumContent: undefined
  };
}
export const AccumObject = {
  encode(message: AccumObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.accumContent !== undefined) {
      AccumulatorContent.encode(message.accumContent, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AccumObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.accumContent = AccumulatorContent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccumObject {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      accumContent: isSet(object.accumContent) ? AccumulatorContent.fromJSON(object.accumContent) : undefined
    };
  },
  toJSON(message: AccumObject): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.accumContent !== undefined && (obj.accumContent = message.accumContent ? AccumulatorContent.toJSON(message.accumContent) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AccumObject>): AccumObject {
    const message = createBaseAccumObject();
    message.name = object.name ?? "";
    message.accumContent = object.accumContent !== undefined && object.accumContent !== null ? AccumulatorContent.fromPartial(object.accumContent) : undefined;
    return message;
  },
  fromSDK(object: AccumObjectSDKType): AccumObject {
    return {
      name: object?.name,
      accumContent: object.accum_content ? AccumulatorContent.fromSDK(object.accum_content) : undefined
    };
  },
  fromSDKJSON(object: any): AccumObjectSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      accum_content: isSet(object.accum_content) ? AccumulatorContent.fromSDKJSON(object.accum_content) : undefined
    };
  },
  toSDK(message: AccumObject): AccumObjectSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.accumContent !== undefined && (obj.accum_content = message.accumContent ? AccumulatorContent.toSDK(message.accumContent) : undefined);
    return obj;
  }
};