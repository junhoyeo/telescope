import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType } from "../../../core/connection/v1/connection";
import { Channel, ChannelAmino, ChannelSDKType } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.solomachine.v1";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export enum DataType {
  /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
  /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
  DATA_TYPE_CLIENT_STATE = 1,
  /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
  DATA_TYPE_CONSENSUS_STATE = 2,
  /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
  DATA_TYPE_CONNECTION_STATE = 3,
  /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
  DATA_TYPE_CHANNEL_STATE = 4,
  /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
  DATA_TYPE_PACKET_COMMITMENT = 5,
  /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
  /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
  DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
  /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
  DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
  /** DATA_TYPE_HEADER - Data type for header verification */
  DATA_TYPE_HEADER = 9,
  UNRECOGNIZED = -1,
}
export const DataTypeSDKType = DataType;
export const DataTypeAmino = DataType;
export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
      return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "DATA_TYPE_CLIENT_STATE":
      return DataType.DATA_TYPE_CLIENT_STATE;
    case 2:
    case "DATA_TYPE_CONSENSUS_STATE":
      return DataType.DATA_TYPE_CONSENSUS_STATE;
    case 3:
    case "DATA_TYPE_CONNECTION_STATE":
      return DataType.DATA_TYPE_CONNECTION_STATE;
    case 4:
    case "DATA_TYPE_CHANNEL_STATE":
      return DataType.DATA_TYPE_CHANNEL_STATE;
    case 5:
    case "DATA_TYPE_PACKET_COMMITMENT":
      return DataType.DATA_TYPE_PACKET_COMMITMENT;
    case 6:
    case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
      return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
    case 7:
    case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
      return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
    case 8:
    case "DATA_TYPE_NEXT_SEQUENCE_RECV":
      return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
    case 9:
    case "DATA_TYPE_HEADER":
      return DataType.DATA_TYPE_HEADER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}
export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
      return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    case DataType.DATA_TYPE_CLIENT_STATE:
      return "DATA_TYPE_CLIENT_STATE";
    case DataType.DATA_TYPE_CONSENSUS_STATE:
      return "DATA_TYPE_CONSENSUS_STATE";
    case DataType.DATA_TYPE_CONNECTION_STATE:
      return "DATA_TYPE_CONNECTION_STATE";
    case DataType.DATA_TYPE_CHANNEL_STATE:
      return "DATA_TYPE_CHANNEL_STATE";
    case DataType.DATA_TYPE_PACKET_COMMITMENT:
      return "DATA_TYPE_PACKET_COMMITMENT";
    case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
      return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
      return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
      return "DATA_TYPE_NEXT_SEQUENCE_RECV";
    case DataType.DATA_TYPE_HEADER:
      return "DATA_TYPE_HEADER";
    case DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
  /** latest sequence of the client state */
  sequence: bigint;
  /** frozen sequence of the solo machine */
  frozenSequence: bigint;
  consensusState?: ConsensusState;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allowUpdateAfterProposal: boolean;
}
export interface ClientStateProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ClientState";
  value: Uint8Array;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateAmino {
  /** latest sequence of the client state */
  sequence: string;
  /** frozen sequence of the solo machine */
  frozen_sequence: string;
  consensus_state?: ConsensusStateAmino;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allow_update_after_proposal: boolean;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateSDKType {
  sequence: bigint;
  frozen_sequence: bigint;
  consensus_state?: ConsensusStateSDKType;
  allow_update_after_proposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  publicKey?: Any;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: bigint;
}
export interface ConsensusStateProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState";
  value: Uint8Array;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateAmino {
  /** public key of the solo machine */
  public_key?: AnyAmino;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: string;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateSDKType {
  public_key?: AnySDKType;
  diversifier: string;
  timestamp: bigint;
}
/** Header defines a solo machine consensus header */
export interface Header {
  /** sequence to update solo machine public key at */
  sequence: bigint;
  timestamp: bigint;
  signature: Uint8Array;
  newPublicKey?: Any;
  newDiversifier: string;
}
export interface HeaderProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.Header";
  value: Uint8Array;
}
/** Header defines a solo machine consensus header */
export interface HeaderAmino {
  /** sequence to update solo machine public key at */
  sequence: string;
  timestamp: string;
  signature: Uint8Array;
  new_public_key?: AnyAmino;
  new_diversifier: string;
}
export interface HeaderAminoMsg {
  type: "cosmos-sdk/Header";
  value: HeaderAmino;
}
/** Header defines a solo machine consensus header */
export interface HeaderSDKType {
  sequence: bigint;
  timestamp: bigint;
  signature: Uint8Array;
  new_public_key?: AnySDKType;
  new_diversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  clientId: string;
  sequence: bigint;
  signatureOne?: SignatureAndData;
  signatureTwo?: SignatureAndData;
}
export interface MisbehaviourProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour";
  value: Uint8Array;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourAmino {
  client_id: string;
  sequence: string;
  signature_one?: SignatureAndDataAmino;
  signature_two?: SignatureAndDataAmino;
}
export interface MisbehaviourAminoMsg {
  type: "cosmos-sdk/Misbehaviour";
  value: MisbehaviourAmino;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourSDKType {
  client_id: string;
  sequence: bigint;
  signature_one?: SignatureAndDataSDKType;
  signature_two?: SignatureAndDataSDKType;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  dataType: DataType;
  data: Uint8Array;
  timestamp: bigint;
}
export interface SignatureAndDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData";
  value: Uint8Array;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataAmino {
  signature: Uint8Array;
  data_type: DataType;
  data: Uint8Array;
  timestamp: string;
}
export interface SignatureAndDataAminoMsg {
  type: "cosmos-sdk/SignatureAndData";
  value: SignatureAndDataAmino;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataSDKType {
  signature: Uint8Array;
  data_type: DataType;
  data: Uint8Array;
  timestamp: bigint;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signatureData: Uint8Array;
  timestamp: bigint;
}
export interface TimestampedSignatureDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData";
  value: Uint8Array;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataAmino {
  signature_data: Uint8Array;
  timestamp: string;
}
export interface TimestampedSignatureDataAminoMsg {
  type: "cosmos-sdk/TimestampedSignatureData";
  value: TimestampedSignatureDataAmino;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataSDKType {
  signature_data: Uint8Array;
  timestamp: bigint;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  sequence: bigint;
  timestamp: bigint;
  diversifier: string;
  /** type of the data used */
  dataType: DataType;
  /** marshaled data */
  data: Uint8Array;
}
export interface SignBytesProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes";
  value: Uint8Array;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesAmino {
  sequence: string;
  timestamp: string;
  diversifier: string;
  /** type of the data used */
  data_type: DataType;
  /** marshaled data */
  data: Uint8Array;
}
export interface SignBytesAminoMsg {
  type: "cosmos-sdk/SignBytes";
  value: SignBytesAmino;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesSDKType {
  sequence: bigint;
  timestamp: bigint;
  diversifier: string;
  data_type: DataType;
  data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  newPubKey?: Any;
  /** header diversifier */
  newDiversifier: string;
}
export interface HeaderDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData";
  value: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataAmino {
  /** header public key */
  new_pub_key?: AnyAmino;
  /** header diversifier */
  new_diversifier: string;
}
export interface HeaderDataAminoMsg {
  type: "cosmos-sdk/HeaderData";
  value: HeaderDataAmino;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataSDKType {
  new_pub_key?: AnySDKType;
  new_diversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
  path: Uint8Array;
  clientState?: Any;
}
export interface ClientStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData";
  value: Uint8Array;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataAmino {
  path: Uint8Array;
  client_state?: AnyAmino;
}
export interface ClientStateDataAminoMsg {
  type: "cosmos-sdk/ClientStateData";
  value: ClientStateDataAmino;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataSDKType {
  path: Uint8Array;
  client_state?: AnySDKType;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
  path: Uint8Array;
  consensusState?: Any;
}
export interface ConsensusStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData";
  value: Uint8Array;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataAmino {
  path: Uint8Array;
  consensus_state?: AnyAmino;
}
export interface ConsensusStateDataAminoMsg {
  type: "cosmos-sdk/ConsensusStateData";
  value: ConsensusStateDataAmino;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataSDKType {
  path: Uint8Array;
  consensus_state?: AnySDKType;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
  path: Uint8Array;
  connection?: ConnectionEnd;
}
export interface ConnectionStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData";
  value: Uint8Array;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataAmino {
  path: Uint8Array;
  connection?: ConnectionEndAmino;
}
export interface ConnectionStateDataAminoMsg {
  type: "cosmos-sdk/ConnectionStateData";
  value: ConnectionStateDataAmino;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataSDKType {
  path: Uint8Array;
  connection?: ConnectionEndSDKType;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
  path: Uint8Array;
  channel?: Channel;
}
export interface ChannelStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData";
  value: Uint8Array;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataAmino {
  path: Uint8Array;
  channel?: ChannelAmino;
}
export interface ChannelStateDataAminoMsg {
  type: "cosmos-sdk/ChannelStateData";
  value: ChannelStateDataAmino;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataSDKType {
  path: Uint8Array;
  channel?: ChannelSDKType;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentData {
  path: Uint8Array;
  commitment: Uint8Array;
}
export interface PacketCommitmentDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData";
  value: Uint8Array;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataAmino {
  path: Uint8Array;
  commitment: Uint8Array;
}
export interface PacketCommitmentDataAminoMsg {
  type: "cosmos-sdk/PacketCommitmentData";
  value: PacketCommitmentDataAmino;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataSDKType {
  path: Uint8Array;
  commitment: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementData {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
export interface PacketAcknowledgementDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData";
  value: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataAmino {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
export interface PacketAcknowledgementDataAminoMsg {
  type: "cosmos-sdk/PacketAcknowledgementData";
  value: PacketAcknowledgementDataAmino;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataSDKType {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceData {
  path: Uint8Array;
}
export interface PacketReceiptAbsenceDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData";
  value: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataAmino {
  path: Uint8Array;
}
export interface PacketReceiptAbsenceDataAminoMsg {
  type: "cosmos-sdk/PacketReceiptAbsenceData";
  value: PacketReceiptAbsenceDataAmino;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataSDKType {
  path: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvData {
  path: Uint8Array;
  nextSeqRecv: bigint;
}
export interface NextSequenceRecvDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData";
  value: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataAmino {
  path: Uint8Array;
  next_seq_recv: string;
}
export interface NextSequenceRecvDataAminoMsg {
  type: "cosmos-sdk/NextSequenceRecvData";
  value: NextSequenceRecvDataAmino;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataSDKType {
  path: Uint8Array;
  next_seq_recv: bigint;
}
function createBaseClientState(): ClientState {
  return {
    sequence: BigInt(0),
    frozenSequence: BigInt(0),
    consensusState: undefined,
    allowUpdateAfterProposal: false
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.frozenSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.frozenSequence);
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowUpdateAfterProposal === true) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.frozenSequence = reader.uint64();
          break;
        case 3:
          message.consensusState = ConsensusState.decode(reader, reader.uint32());
          break;
        case 4:
          message.allowUpdateAfterProposal = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.frozenSequence !== undefined && object.frozenSequence !== null) {
      message.frozenSequence = BigInt(object.frozenSequence.toString());
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = ConsensusState.fromPartial(object.consensusState);
    }
    message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    return {
      sequence: BigInt(object.sequence),
      frozenSequence: BigInt(object.frozen_sequence),
      consensusState: object?.consensus_state ? ConsensusState.fromAmino(object.consensus_state) : undefined,
      allowUpdateAfterProposal: object.allow_update_after_proposal
    };
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.frozen_sequence = message.frozenSequence ? message.frozenSequence.toString() : undefined;
    obj.consensus_state = message.consensusState ? ConsensusState.toAmino(message.consensusState) : undefined;
    obj.allow_update_after_proposal = message.allowUpdateAfterProposal;
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusState(): ConsensusState {
  return {
    publicKey: undefined,
    diversifier: "",
    timestamp: BigInt(0)
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.diversifier = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Any.fromPartial(object.publicKey);
    }
    message.diversifier = object.diversifier ?? "";
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    return {
      publicKey: object?.public_key ? Any.fromAmino(object.public_key) : undefined,
      diversifier: object.diversifier,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    obj.diversifier = message.diversifier;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseHeader(): Header {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    signature: new Uint8Array(),
    newPublicKey: undefined,
    newDiversifier: ""
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.solomachine.v1.Header",
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(42).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        case 4:
          message.newPublicKey = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    message.signature = object.signature ?? new Uint8Array();
    if (object.newPublicKey !== undefined && object.newPublicKey !== null) {
      message.newPublicKey = Any.fromPartial(object.newPublicKey);
    }
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
  fromAmino(object: HeaderAmino): Header {
    return {
      sequence: BigInt(object.sequence),
      timestamp: BigInt(object.timestamp),
      signature: object.signature,
      newPublicKey: object?.new_public_key ? Any.fromAmino(object.new_public_key) : undefined,
      newDiversifier: object.new_diversifier
    };
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.signature = message.signature;
    obj.new_public_key = message.newPublicKey ? Any.toAmino(message.newPublicKey) : undefined;
    obj.new_diversifier = message.newDiversifier;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message: Header): HeaderAminoMsg {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    sequence: BigInt(0),
    signatureOne: undefined,
    signatureTwo: undefined
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
  encode(message: Misbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.signatureOne !== undefined) {
      SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
    }
    if (message.signatureTwo !== undefined) {
      SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatureTwo = SignatureAndData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.signatureOne !== undefined && object.signatureOne !== null) {
      message.signatureOne = SignatureAndData.fromPartial(object.signatureOne);
    }
    if (object.signatureTwo !== undefined && object.signatureTwo !== null) {
      message.signatureTwo = SignatureAndData.fromPartial(object.signatureTwo);
    }
    return message;
  },
  fromAmino(object: MisbehaviourAmino): Misbehaviour {
    return {
      clientId: object.client_id,
      sequence: BigInt(object.sequence),
      signatureOne: object?.signature_one ? SignatureAndData.fromAmino(object.signature_one) : undefined,
      signatureTwo: object?.signature_two ? SignatureAndData.fromAmino(object.signature_two) : undefined
    };
  },
  toAmino(message: Misbehaviour): MisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.signature_one = message.signatureOne ? SignatureAndData.toAmino(message.signatureOne) : undefined;
    obj.signature_two = message.signatureTwo ? SignatureAndData.toAmino(message.signatureTwo) : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour {
    return Misbehaviour.decode(message.value);
  },
  toProto(message: Misbehaviour): Uint8Array {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
function createBaseSignatureAndData(): SignatureAndData {
  return {
    signature: new Uint8Array(),
    dataType: 0,
    data: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
export const SignatureAndData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
  encode(message: SignatureAndData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignatureAndData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.dataType = (reader.int32() as any);
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SignatureAndData>): SignatureAndData {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array();
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
  fromAmino(object: SignatureAndDataAmino): SignatureAndData {
    return {
      signature: object.signature,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
      data: object.data,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: SignatureAndData): SignatureAndDataAmino {
    const obj: any = {};
    obj.signature = message.signature;
    obj.data_type = message.dataType;
    obj.data = message.data;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SignatureAndDataAminoMsg): SignatureAndData {
    return SignatureAndData.fromAmino(object.value);
  },
  toAminoMsg(message: SignatureAndData): SignatureAndDataAminoMsg {
    return {
      type: "cosmos-sdk/SignatureAndData",
      value: SignatureAndData.toAmino(message)
    };
  },
  fromProtoMsg(message: SignatureAndDataProtoMsg): SignatureAndData {
    return SignatureAndData.decode(message.value);
  },
  toProto(message: SignatureAndData): Uint8Array {
    return SignatureAndData.encode(message).finish();
  },
  toProtoMsg(message: SignatureAndData): SignatureAndDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
      value: SignatureAndData.encode(message).finish()
    };
  }
};
function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return {
    signatureData: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
export const TimestampedSignatureData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
  encode(message: TimestampedSignatureData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimestampedSignatureData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TimestampedSignatureData>): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    message.signatureData = object.signatureData ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
  fromAmino(object: TimestampedSignatureDataAmino): TimestampedSignatureData {
    return {
      signatureData: object.signature_data,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: TimestampedSignatureData): TimestampedSignatureDataAmino {
    const obj: any = {};
    obj.signature_data = message.signatureData;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TimestampedSignatureDataAminoMsg): TimestampedSignatureData {
    return TimestampedSignatureData.fromAmino(object.value);
  },
  toAminoMsg(message: TimestampedSignatureData): TimestampedSignatureDataAminoMsg {
    return {
      type: "cosmos-sdk/TimestampedSignatureData",
      value: TimestampedSignatureData.toAmino(message)
    };
  },
  fromProtoMsg(message: TimestampedSignatureDataProtoMsg): TimestampedSignatureData {
    return TimestampedSignatureData.decode(message.value);
  },
  toProto(message: TimestampedSignatureData): Uint8Array {
    return TimestampedSignatureData.encode(message).finish();
  },
  toProtoMsg(message: TimestampedSignatureData): TimestampedSignatureDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
      value: TimestampedSignatureData.encode(message).finish()
    };
  }
};
function createBaseSignBytes(): SignBytes {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    diversifier: "",
    dataType: 0,
    data: new Uint8Array()
  };
}
export const SignBytes = {
  typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
  encode(message: SignBytes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.dataType !== 0) {
      writer.uint32(32).int32(message.dataType);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignBytes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.diversifier = reader.string();
          break;
        case 4:
          message.dataType = (reader.int32() as any);
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SignBytes>): SignBytes {
    const message = createBaseSignBytes();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    message.diversifier = object.diversifier ?? "";
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SignBytesAmino): SignBytes {
    return {
      sequence: BigInt(object.sequence),
      timestamp: BigInt(object.timestamp),
      diversifier: object.diversifier,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
      data: object.data
    };
  },
  toAmino(message: SignBytes): SignBytesAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.diversifier = message.diversifier;
    obj.data_type = message.dataType;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: SignBytesAminoMsg): SignBytes {
    return SignBytes.fromAmino(object.value);
  },
  toAminoMsg(message: SignBytes): SignBytesAminoMsg {
    return {
      type: "cosmos-sdk/SignBytes",
      value: SignBytes.toAmino(message)
    };
  },
  fromProtoMsg(message: SignBytesProtoMsg): SignBytes {
    return SignBytes.decode(message.value);
  },
  toProto(message: SignBytes): Uint8Array {
    return SignBytes.encode(message).finish();
  },
  toProtoMsg(message: SignBytes): SignBytesProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
      value: SignBytes.encode(message).finish()
    };
  }
};
function createBaseHeaderData(): HeaderData {
  return {
    newPubKey: undefined,
    newDiversifier: ""
  };
}
export const HeaderData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
  encode(message: HeaderData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HeaderData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPubKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HeaderData>): HeaderData {
    const message = createBaseHeaderData();
    if (object.newPubKey !== undefined && object.newPubKey !== null) {
      message.newPubKey = Any.fromPartial(object.newPubKey);
    }
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
  fromAmino(object: HeaderDataAmino): HeaderData {
    return {
      newPubKey: object?.new_pub_key ? Any.fromAmino(object.new_pub_key) : undefined,
      newDiversifier: object.new_diversifier
    };
  },
  toAmino(message: HeaderData): HeaderDataAmino {
    const obj: any = {};
    obj.new_pub_key = message.newPubKey ? Any.toAmino(message.newPubKey) : undefined;
    obj.new_diversifier = message.newDiversifier;
    return obj;
  },
  fromAminoMsg(object: HeaderDataAminoMsg): HeaderData {
    return HeaderData.fromAmino(object.value);
  },
  toAminoMsg(message: HeaderData): HeaderDataAminoMsg {
    return {
      type: "cosmos-sdk/HeaderData",
      value: HeaderData.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderDataProtoMsg): HeaderData {
    return HeaderData.decode(message.value);
  },
  toProto(message: HeaderData): Uint8Array {
    return HeaderData.encode(message).finish();
  },
  toProtoMsg(message: HeaderData): HeaderDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
      value: HeaderData.encode(message).finish()
    };
  }
};
function createBaseClientStateData(): ClientStateData {
  return {
    path: new Uint8Array(),
    clientState: undefined
  };
}
export const ClientStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
  encode(message: ClientStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientStateData>): ClientStateData {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    return message;
  },
  fromAmino(object: ClientStateDataAmino): ClientStateData {
    return {
      path: object.path,
      clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined
    };
  },
  toAmino(message: ClientStateData): ClientStateDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClientStateDataAminoMsg): ClientStateData {
    return ClientStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ClientStateData): ClientStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ClientStateData",
      value: ClientStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateDataProtoMsg): ClientStateData {
    return ClientStateData.decode(message.value);
  },
  toProto(message: ClientStateData): Uint8Array {
    return ClientStateData.encode(message).finish();
  },
  toProtoMsg(message: ClientStateData): ClientStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
      value: ClientStateData.encode(message).finish()
    };
  }
};
function createBaseConsensusStateData(): ConsensusStateData {
  return {
    path: new Uint8Array(),
    consensusState: undefined
  };
}
export const ConsensusStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
  encode(message: ConsensusStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusStateData>): ConsensusStateData {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    return message;
  },
  fromAmino(object: ConsensusStateDataAmino): ConsensusStateData {
    return {
      path: object.path,
      consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined
    };
  },
  toAmino(message: ConsensusStateData): ConsensusStateDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateDataAminoMsg): ConsensusStateData {
    return ConsensusStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusStateData): ConsensusStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusStateData",
      value: ConsensusStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateDataProtoMsg): ConsensusStateData {
    return ConsensusStateData.decode(message.value);
  },
  toProto(message: ConsensusStateData): Uint8Array {
    return ConsensusStateData.encode(message).finish();
  },
  toProtoMsg(message: ConsensusStateData): ConsensusStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
      value: ConsensusStateData.encode(message).finish()
    };
  }
};
function createBaseConnectionStateData(): ConnectionStateData {
  return {
    path: new Uint8Array(),
    connection: undefined
  };
}
export const ConnectionStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
  encode(message: ConnectionStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConnectionStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConnectionStateData>): ConnectionStateData {
    const message = createBaseConnectionStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = ConnectionEnd.fromPartial(object.connection);
    }
    return message;
  },
  fromAmino(object: ConnectionStateDataAmino): ConnectionStateData {
    return {
      path: object.path,
      connection: object?.connection ? ConnectionEnd.fromAmino(object.connection) : undefined
    };
  },
  toAmino(message: ConnectionStateData): ConnectionStateDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConnectionStateDataAminoMsg): ConnectionStateData {
    return ConnectionStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ConnectionStateData): ConnectionStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ConnectionStateData",
      value: ConnectionStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ConnectionStateDataProtoMsg): ConnectionStateData {
    return ConnectionStateData.decode(message.value);
  },
  toProto(message: ConnectionStateData): Uint8Array {
    return ConnectionStateData.encode(message).finish();
  },
  toProtoMsg(message: ConnectionStateData): ConnectionStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
      value: ConnectionStateData.encode(message).finish()
    };
  }
};
function createBaseChannelStateData(): ChannelStateData {
  return {
    path: new Uint8Array(),
    channel: undefined
  };
}
export const ChannelStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
  encode(message: ChannelStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChannelStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ChannelStateData>): ChannelStateData {
    const message = createBaseChannelStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    }
    return message;
  },
  fromAmino(object: ChannelStateDataAmino): ChannelStateData {
    return {
      path: object.path,
      channel: object?.channel ? Channel.fromAmino(object.channel) : undefined
    };
  },
  toAmino(message: ChannelStateData): ChannelStateDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    return obj;
  },
  fromAminoMsg(object: ChannelStateDataAminoMsg): ChannelStateData {
    return ChannelStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ChannelStateData): ChannelStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ChannelStateData",
      value: ChannelStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ChannelStateDataProtoMsg): ChannelStateData {
    return ChannelStateData.decode(message.value);
  },
  toProto(message: ChannelStateData): Uint8Array {
    return ChannelStateData.encode(message).finish();
  },
  toProtoMsg(message: ChannelStateData): ChannelStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
      value: ChannelStateData.encode(message).finish()
    };
  }
};
function createBasePacketCommitmentData(): PacketCommitmentData {
  return {
    path: new Uint8Array(),
    commitment: new Uint8Array()
  };
}
export const PacketCommitmentData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
  encode(message: PacketCommitmentData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketCommitmentData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketCommitmentData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.commitment = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PacketCommitmentData>): PacketCommitmentData {
    const message = createBasePacketCommitmentData();
    message.path = object.path ?? new Uint8Array();
    message.commitment = object.commitment ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketCommitmentDataAmino): PacketCommitmentData {
    return {
      path: object.path,
      commitment: object.commitment
    };
  },
  toAmino(message: PacketCommitmentData): PacketCommitmentDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.commitment = message.commitment;
    return obj;
  },
  fromAminoMsg(object: PacketCommitmentDataAminoMsg): PacketCommitmentData {
    return PacketCommitmentData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketCommitmentData): PacketCommitmentDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketCommitmentData",
      value: PacketCommitmentData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketCommitmentDataProtoMsg): PacketCommitmentData {
    return PacketCommitmentData.decode(message.value);
  },
  toProto(message: PacketCommitmentData): Uint8Array {
    return PacketCommitmentData.encode(message).finish();
  },
  toProtoMsg(message: PacketCommitmentData): PacketCommitmentDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
      value: PacketCommitmentData.encode(message).finish()
    };
  }
};
function createBasePacketAcknowledgementData(): PacketAcknowledgementData {
  return {
    path: new Uint8Array(),
    acknowledgement: new Uint8Array()
  };
}
export const PacketAcknowledgementData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
  encode(message: PacketAcknowledgementData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketAcknowledgementData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketAcknowledgementData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PacketAcknowledgementData>): PacketAcknowledgementData {
    const message = createBasePacketAcknowledgementData();
    message.path = object.path ?? new Uint8Array();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketAcknowledgementDataAmino): PacketAcknowledgementData {
    return {
      path: object.path,
      acknowledgement: object.acknowledgement
    };
  },
  toAmino(message: PacketAcknowledgementData): PacketAcknowledgementDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.acknowledgement = message.acknowledgement;
    return obj;
  },
  fromAminoMsg(object: PacketAcknowledgementDataAminoMsg): PacketAcknowledgementData {
    return PacketAcknowledgementData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketAcknowledgementData): PacketAcknowledgementDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketAcknowledgementData",
      value: PacketAcknowledgementData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketAcknowledgementDataProtoMsg): PacketAcknowledgementData {
    return PacketAcknowledgementData.decode(message.value);
  },
  toProto(message: PacketAcknowledgementData): Uint8Array {
    return PacketAcknowledgementData.encode(message).finish();
  },
  toProtoMsg(message: PacketAcknowledgementData): PacketAcknowledgementDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
      value: PacketAcknowledgementData.encode(message).finish()
    };
  }
};
function createBasePacketReceiptAbsenceData(): PacketReceiptAbsenceData {
  return {
    path: new Uint8Array()
  };
}
export const PacketReceiptAbsenceData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
  encode(message: PacketReceiptAbsenceData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketReceiptAbsenceData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketReceiptAbsenceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PacketReceiptAbsenceData>): PacketReceiptAbsenceData {
    const message = createBasePacketReceiptAbsenceData();
    message.path = object.path ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketReceiptAbsenceDataAmino): PacketReceiptAbsenceData {
    return {
      path: object.path
    };
  },
  toAmino(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAmino {
    const obj: any = {};
    obj.path = message.path;
    return obj;
  },
  fromAminoMsg(object: PacketReceiptAbsenceDataAminoMsg): PacketReceiptAbsenceData {
    return PacketReceiptAbsenceData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketReceiptAbsenceDataProtoMsg): PacketReceiptAbsenceData {
    return PacketReceiptAbsenceData.decode(message.value);
  },
  toProto(message: PacketReceiptAbsenceData): Uint8Array {
    return PacketReceiptAbsenceData.encode(message).finish();
  },
  toProtoMsg(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.encode(message).finish()
    };
  }
};
function createBaseNextSequenceRecvData(): NextSequenceRecvData {
  return {
    path: new Uint8Array(),
    nextSeqRecv: BigInt(0)
  };
}
export const NextSequenceRecvData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
  encode(message: NextSequenceRecvData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.nextSeqRecv !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextSeqRecv);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NextSequenceRecvData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.nextSeqRecv = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array();
    if (object.nextSeqRecv !== undefined && object.nextSeqRecv !== null) {
      message.nextSeqRecv = BigInt(object.nextSeqRecv.toString());
    }
    return message;
  },
  fromAmino(object: NextSequenceRecvDataAmino): NextSequenceRecvData {
    return {
      path: object.path,
      nextSeqRecv: BigInt(object.next_seq_recv)
    };
  },
  toAmino(message: NextSequenceRecvData): NextSequenceRecvDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.next_seq_recv = message.nextSeqRecv ? message.nextSeqRecv.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NextSequenceRecvDataAminoMsg): NextSequenceRecvData {
    return NextSequenceRecvData.fromAmino(object.value);
  },
  toAminoMsg(message: NextSequenceRecvData): NextSequenceRecvDataAminoMsg {
    return {
      type: "cosmos-sdk/NextSequenceRecvData",
      value: NextSequenceRecvData.toAmino(message)
    };
  },
  fromProtoMsg(message: NextSequenceRecvDataProtoMsg): NextSequenceRecvData {
    return NextSequenceRecvData.decode(message.value);
  },
  toProto(message: NextSequenceRecvData): Uint8Array {
    return NextSequenceRecvData.encode(message).finish();
  },
  toProtoMsg(message: NextSequenceRecvData): NextSequenceRecvDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
      value: NextSequenceRecvData.encode(message).finish()
    };
  }
};