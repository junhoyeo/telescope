import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelAmino, ChannelSDKType, IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, Long } from "../../../../helpers";
export const protobufPackage = "ibc.core.channel.v1";

/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;
}
export interface QueryChannelRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryChannelRequest";
  value: Uint8Array;
}

/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;
}
export interface QueryChannelRequestAminoType {
  type: "cosmos-sdk/QueryChannelRequest";
  value: QueryChannelRequestAmino;
}

/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestSDKType {
  port_id: string;
  channel_id: string;
}

/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
  /** channel associated with the request identifiers */
  channel?: Channel;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryChannelResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryChannelResponse";
  value: Uint8Array;
}

/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseAmino {
  /** channel associated with the request identifiers */
  channel?: ChannelAmino;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryChannelResponseAminoType {
  type: "cosmos-sdk/QueryChannelResponse";
  value: QueryChannelResponseAmino;
}

/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseSDKType {
  channel?: ChannelSDKType;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}

/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryChannelsRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest";
  value: Uint8Array;
}

/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestAmino {
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryChannelsRequestAminoType {
  type: "cosmos-sdk/QueryChannelsRequest";
  value: QueryChannelsRequestAmino;
}

/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestSDKType {
  pagination?: PageRequestSDKType;
}

/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannel[];

  /** pagination response */
  pagination?: PageResponse;

  /** query block height */
  height?: Height;
}
export interface QueryChannelsResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse";
  value: Uint8Array;
}

/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseAmino {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannelAmino[];

  /** pagination response */
  pagination?: PageResponseAmino;

  /** query block height */
  height?: HeightAmino;
}
export interface QueryChannelsResponseAminoType {
  type: "cosmos-sdk/QueryChannelsResponse";
  value: QueryChannelsResponseAmino;
}

/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseSDKType {
  channels: IdentifiedChannelSDKType[];
  pagination?: PageResponseSDKType;
  height?: HeightSDKType;
}

/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
  /** connection unique identifier */
  connection: string;

  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryConnectionChannelsRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest";
  value: Uint8Array;
}

/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestAmino {
  /** connection unique identifier */
  connection: string;

  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryConnectionChannelsRequestAminoType {
  type: "cosmos-sdk/QueryConnectionChannelsRequest";
  value: QueryConnectionChannelsRequestAmino;
}

/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestSDKType {
  connection: string;
  pagination?: PageRequestSDKType;
}

/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannel[];

  /** pagination response */
  pagination?: PageResponse;

  /** query block height */
  height?: Height;
}
export interface QueryConnectionChannelsResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse";
  value: Uint8Array;
}

/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseAmino {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannelAmino[];

  /** pagination response */
  pagination?: PageResponseAmino;

  /** query block height */
  height?: HeightAmino;
}
export interface QueryConnectionChannelsResponseAminoType {
  type: "cosmos-sdk/QueryConnectionChannelsResponse";
  value: QueryConnectionChannelsResponseAmino;
}

/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseSDKType {
  channels: IdentifiedChannelSDKType[];
  pagination?: PageResponseSDKType;
  height?: HeightSDKType;
}

/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;
}
export interface QueryChannelClientStateRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest";
  value: Uint8Array;
}

/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;
}
export interface QueryChannelClientStateRequestAminoType {
  type: "cosmos-sdk/QueryChannelClientStateRequest";
  value: QueryChannelClientStateRequestAmino;
}

/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestSDKType {
  port_id: string;
  channel_id: string;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
  /** client state associated with the channel */
  identifiedClientState?: IdentifiedClientState;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryChannelClientStateResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse";
  value: Uint8Array;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseAmino {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientStateAmino;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryChannelClientStateResponseAminoType {
  type: "cosmos-sdk/QueryChannelClientStateResponse";
  value: QueryChannelClientStateResponseAmino;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseSDKType {
  identified_client_state?: IdentifiedClientStateSDKType;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}

/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;

  /** revision number of the consensus state */
  revisionNumber: Long;

  /** revision height of the consensus state */
  revisionHeight: Long;
}
export interface QueryChannelConsensusStateRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest";
  value: Uint8Array;
}

/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;

  /** revision number of the consensus state */
  revision_number: string;

  /** revision height of the consensus state */
  revision_height: string;
}
export interface QueryChannelConsensusStateRequestAminoType {
  type: "cosmos-sdk/QueryChannelConsensusStateRequest";
  value: QueryChannelConsensusStateRequestAmino;
}

/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestSDKType {
  port_id: string;
  channel_id: string;
  revision_number: Long;
  revision_height: Long;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
  /** consensus state associated with the channel */
  consensusState?: Any;

  /** client ID associated with the consensus state */
  clientId: string;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryChannelConsensusStateResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse";
  value: Uint8Array;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseAmino {
  /** consensus state associated with the channel */
  consensus_state?: AnyAmino;

  /** client ID associated with the consensus state */
  client_id: string;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryChannelConsensusStateResponseAminoType {
  type: "cosmos-sdk/QueryChannelConsensusStateResponse";
  value: QueryChannelConsensusStateResponseAmino;
}

/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseSDKType {
  consensus_state?: AnySDKType;
  client_id: string;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}

/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;

  /** packet sequence */
  sequence: Long;
}
export interface QueryPacketCommitmentRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest";
  value: Uint8Array;
}

/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;

  /** packet sequence */
  sequence: string;
}
export interface QueryPacketCommitmentRequestAminoType {
  type: "cosmos-sdk/QueryPacketCommitmentRequest";
  value: QueryPacketCommitmentRequestAmino;
}

/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestSDKType {
  port_id: string;
  channel_id: string;
  sequence: Long;
}

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
  /** packet associated with the request fields */
  commitment: Uint8Array;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryPacketCommitmentResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse";
  value: Uint8Array;
}

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseAmino {
  /** packet associated with the request fields */
  commitment: Uint8Array;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryPacketCommitmentResponseAminoType {
  type: "cosmos-sdk/QueryPacketCommitmentResponse";
  value: QueryPacketCommitmentResponseAmino;
}

/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseSDKType {
  commitment: Uint8Array;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}

/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;

  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryPacketCommitmentsRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest";
  value: Uint8Array;
}

/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;

  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryPacketCommitmentsRequestAminoType {
  type: "cosmos-sdk/QueryPacketCommitmentsRequest";
  value: QueryPacketCommitmentsRequestAmino;
}

/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestSDKType {
  port_id: string;
  channel_id: string;
  pagination?: PageRequestSDKType;
}

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
  commitments: PacketState[];

  /** pagination response */
  pagination?: PageResponse;

  /** query block height */
  height?: Height;
}
export interface QueryPacketCommitmentsResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse";
  value: Uint8Array;
}

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseAmino {
  commitments: PacketStateAmino[];

  /** pagination response */
  pagination?: PageResponseAmino;

  /** query block height */
  height?: HeightAmino;
}
export interface QueryPacketCommitmentsResponseAminoType {
  type: "cosmos-sdk/QueryPacketCommitmentsResponse";
  value: QueryPacketCommitmentsResponseAmino;
}

/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseSDKType {
  commitments: PacketStateSDKType[];
  pagination?: PageResponseSDKType;
  height?: HeightSDKType;
}

/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;

  /** packet sequence */
  sequence: Long;
}
export interface QueryPacketReceiptRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest";
  value: Uint8Array;
}

/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;

  /** packet sequence */
  sequence: string;
}
export interface QueryPacketReceiptRequestAminoType {
  type: "cosmos-sdk/QueryPacketReceiptRequest";
  value: QueryPacketReceiptRequestAmino;
}

/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestSDKType {
  port_id: string;
  channel_id: string;
  sequence: Long;
}

/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received: boolean;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryPacketReceiptResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse";
  value: Uint8Array;
}

/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseAmino {
  /** success flag for if receipt exists */
  received: boolean;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryPacketReceiptResponseAminoType {
  type: "cosmos-sdk/QueryPacketReceiptResponse";
  value: QueryPacketReceiptResponseAmino;
}

/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseSDKType {
  received: boolean;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}

/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;

  /** packet sequence */
  sequence: Long;
}
export interface QueryPacketAcknowledgementRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest";
  value: Uint8Array;
}

/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;

  /** packet sequence */
  sequence: string;
}
export interface QueryPacketAcknowledgementRequestAminoType {
  type: "cosmos-sdk/QueryPacketAcknowledgementRequest";
  value: QueryPacketAcknowledgementRequestAmino;
}

/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestSDKType {
  port_id: string;
  channel_id: string;
  sequence: Long;
}

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryPacketAcknowledgementResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse";
  value: Uint8Array;
}

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseAmino {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryPacketAcknowledgementResponseAminoType {
  type: "cosmos-sdk/QueryPacketAcknowledgementResponse";
  value: QueryPacketAcknowledgementResponseAmino;
}

/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseSDKType {
  acknowledgement: Uint8Array;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}

/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;

  /** pagination request */
  pagination?: PageRequest;

  /** list of packet sequences */
  packetCommitmentSequences: Long[];
}
export interface QueryPacketAcknowledgementsRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest";
  value: Uint8Array;
}

/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;

  /** pagination request */
  pagination?: PageRequestAmino;

  /** list of packet sequences */
  packet_commitment_sequences: string[];
}
export interface QueryPacketAcknowledgementsRequestAminoType {
  type: "cosmos-sdk/QueryPacketAcknowledgementsRequest";
  value: QueryPacketAcknowledgementsRequestAmino;
}

/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestSDKType {
  port_id: string;
  channel_id: string;
  pagination?: PageRequestSDKType;
  packet_commitment_sequences: Long[];
}

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
  acknowledgements: PacketState[];

  /** pagination response */
  pagination?: PageResponse;

  /** query block height */
  height?: Height;
}
export interface QueryPacketAcknowledgementsResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse";
  value: Uint8Array;
}

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseAmino {
  acknowledgements: PacketStateAmino[];

  /** pagination response */
  pagination?: PageResponseAmino;

  /** query block height */
  height?: HeightAmino;
}
export interface QueryPacketAcknowledgementsResponseAminoType {
  type: "cosmos-sdk/QueryPacketAcknowledgementsResponse";
  value: QueryPacketAcknowledgementsResponseAmino;
}

/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseSDKType {
  acknowledgements: PacketStateSDKType[];
  pagination?: PageResponseSDKType;
  height?: HeightSDKType;
}

/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;

  /** list of packet sequences */
  packetCommitmentSequences: Long[];
}
export interface QueryUnreceivedPacketsRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest";
  value: Uint8Array;
}

/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;

  /** list of packet sequences */
  packet_commitment_sequences: string[];
}
export interface QueryUnreceivedPacketsRequestAminoType {
  type: "cosmos-sdk/QueryUnreceivedPacketsRequest";
  value: QueryUnreceivedPacketsRequestAmino;
}

/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestSDKType {
  port_id: string;
  channel_id: string;
  packet_commitment_sequences: Long[];
}

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences: Long[];

  /** query block height */
  height?: Height;
}
export interface QueryUnreceivedPacketsResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse";
  value: Uint8Array;
}

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseAmino {
  /** list of unreceived packet sequences */
  sequences: string[];

  /** query block height */
  height?: HeightAmino;
}
export interface QueryUnreceivedPacketsResponseAminoType {
  type: "cosmos-sdk/QueryUnreceivedPacketsResponse";
  value: QueryUnreceivedPacketsResponseAmino;
}

/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseSDKType {
  sequences: Long[];
  height?: HeightSDKType;
}

/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;

  /** list of acknowledgement sequences */
  packetAckSequences: Long[];
}
export interface QueryUnreceivedAcksRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest";
  value: Uint8Array;
}

/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;

  /** list of acknowledgement sequences */
  packet_ack_sequences: string[];
}
export interface QueryUnreceivedAcksRequestAminoType {
  type: "cosmos-sdk/QueryUnreceivedAcksRequest";
  value: QueryUnreceivedAcksRequestAmino;
}

/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestSDKType {
  port_id: string;
  channel_id: string;
  packet_ack_sequences: Long[];
}

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences: Long[];

  /** query block height */
  height?: Height;
}
export interface QueryUnreceivedAcksResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse";
  value: Uint8Array;
}

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseAmino {
  /** list of unreceived acknowledgement sequences */
  sequences: string[];

  /** query block height */
  height?: HeightAmino;
}
export interface QueryUnreceivedAcksResponseAminoType {
  type: "cosmos-sdk/QueryUnreceivedAcksResponse";
  value: QueryUnreceivedAcksResponseAmino;
}

/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseSDKType {
  sequences: Long[];
  height?: HeightSDKType;
}

/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
  /** port unique identifier */
  portId: string;

  /** channel unique identifier */
  channelId: string;
}
export interface QueryNextSequenceReceiveRequestProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest";
  value: Uint8Array;
}

/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestAmino {
  /** port unique identifier */
  port_id: string;

  /** channel unique identifier */
  channel_id: string;
}
export interface QueryNextSequenceReceiveRequestAminoType {
  type: "cosmos-sdk/QueryNextSequenceReceiveRequest";
  value: QueryNextSequenceReceiveRequestAmino;
}

/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestSDKType {
  port_id: string;
  channel_id: string;
}

/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
  /** next sequence receive number */
  nextSequenceReceive: Long;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryNextSequenceReceiveResponseProtoType {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse";
  value: Uint8Array;
}

/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseAmino {
  /** next sequence receive number */
  next_sequence_receive: string;

  /** merkle proof of existence */
  proof: Uint8Array;

  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryNextSequenceReceiveResponseAminoType {
  type: "cosmos-sdk/QueryNextSequenceReceiveResponse";
  value: QueryNextSequenceReceiveResponseAmino;
}

/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseSDKType {
  next_sequence_receive: Long;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}

function createBaseQueryChannelRequest(): QueryChannelRequest {
  return {
    portId: "",
    channelId: ""
  };
}

export const QueryChannelRequest = {
  encode(message: QueryChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryChannelRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message: QueryChannelRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelRequest>): QueryChannelRequest {
    const message = createBaseQueryChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },

  fromSDK(object: QueryChannelRequestSDKType): QueryChannelRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id
    };
  },

  toSDK(message: QueryChannelRequest): QueryChannelRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },

  fromAmino(object: QueryChannelRequestAmino): QueryChannelRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id
    };
  },

  toAmino(message: QueryChannelRequest): QueryChannelRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  }

};

function createBaseQueryChannelResponse(): QueryChannelResponse {
  return {
    channel: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

export const QueryChannelResponse = {
  encode(message: QueryChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channel = Channel.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryChannelResponse {
    return {
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },

  toJSON(message: QueryChannelResponse): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelResponse>): QueryChannelResponse {
    const message = createBaseQueryChannelResponse();
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },

  fromSDK(object: QueryChannelResponseSDKType): QueryChannelResponse {
    return {
      channel: object.channel ? Channel.fromSDK(object.channel) : undefined,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },

  toSDK(message: QueryChannelResponse): QueryChannelResponseSDKType {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toSDK(message.channel) : undefined);
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },

  fromAmino(object: QueryChannelResponseAmino): QueryChannelResponse {
    return {
      channel: object?.channel ? Channel.fromAmino(object.channel) : undefined,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },

  toAmino(message: QueryChannelResponse): QueryChannelResponseAmino {
    const obj: any = {};
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  }

};

function createBaseQueryChannelsRequest(): QueryChannelsRequest {
  return {
    pagination: undefined
  };
}

export const QueryChannelsRequest = {
  encode(message: QueryChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsRequest();

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

  fromJSON(object: any): QueryChannelsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelsRequest>): QueryChannelsRequest {
    const message = createBaseQueryChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryChannelsRequestSDKType): QueryChannelsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryChannelsRequest): QueryChannelsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryChannelsRequestAmino): QueryChannelsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryChannelsRequest): QueryChannelsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryChannelsResponse(): QueryChannelsResponse {
  return {
    channels: [],
    pagination: undefined,
    height: undefined
  };
}

export const QueryChannelsResponse = {
  encode(message: QueryChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },

  toJSON(message: QueryChannelsResponse): unknown {
    const obj: any = {};

    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelsResponse>): QueryChannelsResponse {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },

  fromSDK(object: QueryChannelsResponseSDKType): QueryChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined,
      height: object.height ? Height.fromSDK(object.height) : undefined
    };
  },

  toSDK(message: QueryChannelsResponse): QueryChannelsResponseSDKType {
    const obj: any = {};

    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toSDK(e) : undefined);
    } else {
      obj.channels = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    return obj;
  },

  fromAmino(object: QueryChannelsResponseAmino): QueryChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      height: object?.height ? Height.fromAmino(object.height) : undefined
    };
  },

  toAmino(message: QueryChannelsResponse): QueryChannelsResponseAmino {
    const obj: any = {};

    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  }

};

function createBaseQueryConnectionChannelsRequest(): QueryConnectionChannelsRequest {
  return {
    connection: "",
    pagination: undefined
  };
}

export const QueryConnectionChannelsRequest = {
  encode(message: QueryConnectionChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
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

  fromJSON(object: any): QueryConnectionChannelsRequest {
    return {
      connection: isSet(object.connection) ? String(object.connection) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryConnectionChannelsRequest): unknown {
    const obj: any = {};
    message.connection !== undefined && (obj.connection = message.connection);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest {
    const message = createBaseQueryConnectionChannelsRequest();
    message.connection = object.connection ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryConnectionChannelsRequestSDKType): QueryConnectionChannelsRequest {
    return {
      connection: object?.connection,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestSDKType {
    const obj: any = {};
    obj.connection = message.connection;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryConnectionChannelsRequestAmino): QueryConnectionChannelsRequest {
    return {
      connection: object.connection,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAmino {
    const obj: any = {};
    obj.connection = message.connection;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryConnectionChannelsResponse(): QueryConnectionChannelsResponse {
  return {
    channels: [],
    pagination: undefined,
    height: undefined
  };
}

export const QueryConnectionChannelsResponse = {
  encode(message: QueryConnectionChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryConnectionChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },

  toJSON(message: QueryConnectionChannelsResponse): unknown {
    const obj: any = {};

    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },

  fromSDK(object: QueryConnectionChannelsResponseSDKType): QueryConnectionChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined,
      height: object.height ? Height.fromSDK(object.height) : undefined
    };
  },

  toSDK(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseSDKType {
    const obj: any = {};

    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toSDK(e) : undefined);
    } else {
      obj.channels = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    return obj;
  },

  fromAmino(object: QueryConnectionChannelsResponseAmino): QueryConnectionChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      height: object?.height ? Height.fromAmino(object.height) : undefined
    };
  },

  toAmino(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAmino {
    const obj: any = {};

    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  }

};

function createBaseQueryChannelClientStateRequest(): QueryChannelClientStateRequest {
  return {
    portId: "",
    channelId: ""
  };
}

export const QueryChannelClientStateRequest = {
  encode(message: QueryChannelClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryChannelClientStateRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message: QueryChannelClientStateRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest {
    const message = createBaseQueryChannelClientStateRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },

  fromSDK(object: QueryChannelClientStateRequestSDKType): QueryChannelClientStateRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id
    };
  },

  toSDK(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },

  fromAmino(object: QueryChannelClientStateRequestAmino): QueryChannelClientStateRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id
    };
  },

  toAmino(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  }

};

function createBaseQueryChannelClientStateResponse(): QueryChannelClientStateResponse {
  return {
    identifiedClientState: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

export const QueryChannelClientStateResponse = {
  encode(message: QueryChannelClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifiedClientState !== undefined) {
      IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identifiedClientState = IdentifiedClientState.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryChannelClientStateResponse {
    return {
      identifiedClientState: isSet(object.identifiedClientState) ? IdentifiedClientState.fromJSON(object.identifiedClientState) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },

  toJSON(message: QueryChannelClientStateResponse): unknown {
    const obj: any = {};
    message.identifiedClientState !== undefined && (obj.identifiedClientState = message.identifiedClientState ? IdentifiedClientState.toJSON(message.identifiedClientState) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse {
    const message = createBaseQueryChannelClientStateResponse();
    message.identifiedClientState = object.identifiedClientState !== undefined && object.identifiedClientState !== null ? IdentifiedClientState.fromPartial(object.identifiedClientState) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },

  fromSDK(object: QueryChannelClientStateResponseSDKType): QueryChannelClientStateResponse {
    return {
      identifiedClientState: object.identified_client_state ? IdentifiedClientState.fromSDK(object.identified_client_state) : undefined,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },

  toSDK(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseSDKType {
    const obj: any = {};
    message.identifiedClientState !== undefined && (obj.identified_client_state = message.identifiedClientState ? IdentifiedClientState.toSDK(message.identifiedClientState) : undefined);
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },

  fromAmino(object: QueryChannelClientStateResponseAmino): QueryChannelClientStateResponse {
    return {
      identifiedClientState: object?.identified_client_state ? IdentifiedClientState.fromAmino(object.identified_client_state) : undefined,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },

  toAmino(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAmino {
    const obj: any = {};
    obj.identified_client_state = message.identifiedClientState ? IdentifiedClientState.toAmino(message.identifiedClientState) : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  }

};

function createBaseQueryChannelConsensusStateRequest(): QueryChannelConsensusStateRequest {
  return {
    portId: "",
    channelId: "",
    revisionNumber: Long.UZERO,
    revisionHeight: Long.UZERO
  };
}

export const QueryChannelConsensusStateRequest = {
  encode(message: QueryChannelConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.revisionNumber.isZero()) {
      writer.uint32(24).uint64(message.revisionNumber);
    }

    if (!message.revisionHeight.isZero()) {
      writer.uint32(32).uint64(message.revisionHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.revisionNumber = (reader.uint64() as Long);
          break;

        case 4:
          message.revisionHeight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryChannelConsensusStateRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      revisionNumber: isSet(object.revisionNumber) ? Long.fromValue(object.revisionNumber) : Long.UZERO,
      revisionHeight: isSet(object.revisionHeight) ? Long.fromValue(object.revisionHeight) : Long.UZERO
    };
  },

  toJSON(message: QueryChannelConsensusStateRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest {
    const message = createBaseQueryChannelConsensusStateRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? Long.fromValue(object.revisionNumber) : Long.UZERO;
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? Long.fromValue(object.revisionHeight) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryChannelConsensusStateRequestSDKType): QueryChannelConsensusStateRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      revisionNumber: object?.revision_number,
      revisionHeight: object?.revision_height
    };
  },

  toSDK(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.revision_number = message.revisionNumber;
    obj.revision_height = message.revisionHeight;
    return obj;
  },

  fromAmino(object: QueryChannelConsensusStateRequestAmino): QueryChannelConsensusStateRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      revisionNumber: Long.fromString(object.revision_number),
      revisionHeight: Long.fromString(object.revision_height)
    };
  },

  toAmino(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
    obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
    return obj;
  }

};

function createBaseQueryChannelConsensusStateResponse(): QueryChannelConsensusStateResponse {
  return {
    consensusState: undefined,
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

export const QueryChannelConsensusStateResponse = {
  encode(message: QueryChannelConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }

    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }

    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.clientId = reader.string();
          break;

        case 3:
          message.proof = reader.bytes();
          break;

        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryChannelConsensusStateResponse {
    return {
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },

  toJSON(message: QueryChannelConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse {
    const message = createBaseQueryChannelConsensusStateResponse();
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },

  fromSDK(object: QueryChannelConsensusStateResponseSDKType): QueryChannelConsensusStateResponse {
    return {
      consensusState: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined,
      clientId: object?.client_id,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },

  toSDK(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseSDKType {
    const obj: any = {};
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    obj.client_id = message.clientId;
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },

  fromAmino(object: QueryChannelConsensusStateResponseAmino): QueryChannelConsensusStateResponse {
    return {
      consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      clientId: object.client_id,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },

  toAmino(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.client_id = message.clientId;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  }

};

function createBaseQueryPacketCommitmentRequest(): QueryPacketCommitmentRequest {
  return {
    portId: "",
    channelId: "",
    sequence: Long.UZERO
  };
}

export const QueryPacketCommitmentRequest = {
  encode(message: QueryPacketCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: QueryPacketCommitmentRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryPacketCommitmentRequestSDKType): QueryPacketCommitmentRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      sequence: object?.sequence
    };
  },

  toSDK(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence;
    return obj;
  },

  fromAmino(object: QueryPacketCommitmentRequestAmino): QueryPacketCommitmentRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      sequence: Long.fromString(object.sequence)
    };
  },

  toAmino(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  }

};

function createBaseQueryPacketCommitmentResponse(): QueryPacketCommitmentResponse {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

export const QueryPacketCommitmentResponse = {
  encode(message: QueryPacketCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentResponse {
    return {
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },

  toJSON(message: QueryPacketCommitmentResponse): unknown {
    const obj: any = {};
    message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },

  fromSDK(object: QueryPacketCommitmentResponseSDKType): QueryPacketCommitmentResponse {
    return {
      commitment: object?.commitment,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },

  toSDK(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseSDKType {
    const obj: any = {};
    obj.commitment = message.commitment;
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },

  fromAmino(object: QueryPacketCommitmentResponseAmino): QueryPacketCommitmentResponse {
    return {
      commitment: object.commitment,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },

  toAmino(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAmino {
    const obj: any = {};
    obj.commitment = message.commitment;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  }

};

function createBaseQueryPacketCommitmentsRequest(): QueryPacketCommitmentsRequest {
  return {
    portId: "",
    channelId: "",
    pagination: undefined
  };
}

export const QueryPacketCommitmentsRequest = {
  encode(message: QueryPacketCommitmentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentsRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryPacketCommitmentsRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryPacketCommitmentsRequestSDKType): QueryPacketCommitmentsRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: QueryPacketCommitmentsRequestAmino): QueryPacketCommitmentsRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseQueryPacketCommitmentsResponse(): QueryPacketCommitmentsResponse {
  return {
    commitments: [],
    pagination: undefined,
    height: undefined
  };
}

export const QueryPacketCommitmentsResponse = {
  encode(message: QueryPacketCommitmentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketCommitmentsResponse {
    return {
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },

  toJSON(message: QueryPacketCommitmentsResponse): unknown {
    const obj: any = {};

    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },

  fromSDK(object: QueryPacketCommitmentsResponseSDKType): QueryPacketCommitmentsResponse {
    return {
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined,
      height: object.height ? Height.fromSDK(object.height) : undefined
    };
  },

  toSDK(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseSDKType {
    const obj: any = {};

    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toSDK(e) : undefined);
    } else {
      obj.commitments = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    return obj;
  },

  fromAmino(object: QueryPacketCommitmentsResponseAmino): QueryPacketCommitmentsResponse {
    return {
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      height: object?.height ? Height.fromAmino(object.height) : undefined
    };
  },

  toAmino(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAmino {
    const obj: any = {};

    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  }

};

function createBaseQueryPacketReceiptRequest(): QueryPacketReceiptRequest {
  return {
    portId: "",
    channelId: "",
    sequence: Long.UZERO
  };
}

export const QueryPacketReceiptRequest = {
  encode(message: QueryPacketReceiptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketReceiptRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: QueryPacketReceiptRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryPacketReceiptRequestSDKType): QueryPacketReceiptRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      sequence: object?.sequence
    };
  },

  toSDK(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence;
    return obj;
  },

  fromAmino(object: QueryPacketReceiptRequestAmino): QueryPacketReceiptRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      sequence: Long.fromString(object.sequence)
    };
  },

  toAmino(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  }

};

function createBaseQueryPacketReceiptResponse(): QueryPacketReceiptResponse {
  return {
    received: false,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

export const QueryPacketReceiptResponse = {
  encode(message: QueryPacketReceiptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }

    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;

        case 3:
          message.proof = reader.bytes();
          break;

        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketReceiptResponse {
    return {
      received: isSet(object.received) ? Boolean(object.received) : false,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },

  toJSON(message: QueryPacketReceiptResponse): unknown {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },

  fromSDK(object: QueryPacketReceiptResponseSDKType): QueryPacketReceiptResponse {
    return {
      received: object?.received,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },

  toSDK(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseSDKType {
    const obj: any = {};
    obj.received = message.received;
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },

  fromAmino(object: QueryPacketReceiptResponseAmino): QueryPacketReceiptResponse {
    return {
      received: object.received,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },

  toAmino(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAmino {
    const obj: any = {};
    obj.received = message.received;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  }

};

function createBaseQueryPacketAcknowledgementRequest(): QueryPacketAcknowledgementRequest {
  return {
    portId: "",
    channelId: "",
    sequence: Long.UZERO
  };
}

export const QueryPacketAcknowledgementRequest = {
  encode(message: QueryPacketAcknowledgementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },

  toJSON(message: QueryPacketAcknowledgementRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },

  fromSDK(object: QueryPacketAcknowledgementRequestSDKType): QueryPacketAcknowledgementRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      sequence: object?.sequence
    };
  },

  toSDK(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence;
    return obj;
  },

  fromAmino(object: QueryPacketAcknowledgementRequestAmino): QueryPacketAcknowledgementRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      sequence: Long.fromString(object.sequence)
    };
  },

  toAmino(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  }

};

function createBaseQueryPacketAcknowledgementResponse(): QueryPacketAcknowledgementResponse {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

export const QueryPacketAcknowledgementResponse = {
  encode(message: QueryPacketAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementResponse {
    return {
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },

  toJSON(message: QueryPacketAcknowledgementResponse): unknown {
    const obj: any = {};
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },

  fromSDK(object: QueryPacketAcknowledgementResponseSDKType): QueryPacketAcknowledgementResponse {
    return {
      acknowledgement: object?.acknowledgement,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },

  toSDK(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseSDKType {
    const obj: any = {};
    obj.acknowledgement = message.acknowledgement;
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },

  fromAmino(object: QueryPacketAcknowledgementResponseAmino): QueryPacketAcknowledgementResponse {
    return {
      acknowledgement: object.acknowledgement,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },

  toAmino(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAmino {
    const obj: any = {};
    obj.acknowledgement = message.acknowledgement;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  }

};

function createBaseQueryPacketAcknowledgementsRequest(): QueryPacketAcknowledgementsRequest {
  return {
    portId: "",
    channelId: "",
    pagination: undefined,
    packetCommitmentSequences: []
  };
}

export const QueryPacketAcknowledgementsRequest = {
  encode(message: QueryPacketAcknowledgementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    writer.uint32(34).fork();

    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packetCommitmentSequences.push((reader.uint64() as Long));
            }
          } else {
            message.packetCommitmentSequences.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementsRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences) ? object.packetCommitmentSequences.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: QueryPacketAcknowledgementsRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);

    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map(e => (e || Long.UZERO).toString());
    } else {
      obj.packetCommitmentSequences = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.packetCommitmentSequences = object.packetCommitmentSequences?.map(e => Long.fromValue(e)) || [];
    return message;
  },

  fromSDK(object: QueryPacketAcknowledgementsRequestSDKType): QueryPacketAcknowledgementsRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined,
      packetCommitmentSequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e: any) => e) : []
    };
  },

  toSDK(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);

    if (message.packetCommitmentSequences) {
      obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e);
    } else {
      obj.packet_commitment_sequences = [];
    }

    return obj;
  },

  fromAmino(object: QueryPacketAcknowledgementsRequestAmino): QueryPacketAcknowledgementsRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      packetCommitmentSequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e: any) => e) : []
    };
  },

  toAmino(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;

    if (message.packetCommitmentSequences) {
      obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e);
    } else {
      obj.packet_commitment_sequences = [];
    }

    return obj;
  }

};

function createBaseQueryPacketAcknowledgementsResponse(): QueryPacketAcknowledgementsResponse {
  return {
    acknowledgements: [],
    pagination: undefined,
    height: undefined
  };
}

export const QueryPacketAcknowledgementsResponse = {
  encode(message: QueryPacketAcknowledgementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPacketAcknowledgementsResponse {
    return {
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },

  toJSON(message: QueryPacketAcknowledgementsResponse): unknown {
    const obj: any = {};

    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },

  fromSDK(object: QueryPacketAcknowledgementsResponseSDKType): QueryPacketAcknowledgementsResponse {
    return {
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined,
      height: object.height ? Height.fromSDK(object.height) : undefined
    };
  },

  toSDK(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseSDKType {
    const obj: any = {};

    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toSDK(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    return obj;
  },

  fromAmino(object: QueryPacketAcknowledgementsResponseAmino): QueryPacketAcknowledgementsResponse {
    return {
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      height: object?.height ? Height.fromAmino(object.height) : undefined
    };
  },

  toAmino(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAmino {
    const obj: any = {};

    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  }

};

function createBaseQueryUnreceivedPacketsRequest(): QueryUnreceivedPacketsRequest {
  return {
    portId: "",
    channelId: "",
    packetCommitmentSequences: []
  };
}

export const QueryUnreceivedPacketsRequest = {
  encode(message: QueryUnreceivedPacketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    writer.uint32(26).fork();

    for (const v of message.packetCommitmentSequences) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packetCommitmentSequences.push((reader.uint64() as Long));
            }
          } else {
            message.packetCommitmentSequences.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnreceivedPacketsRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences) ? object.packetCommitmentSequences.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: QueryUnreceivedPacketsRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);

    if (message.packetCommitmentSequences) {
      obj.packetCommitmentSequences = message.packetCommitmentSequences.map(e => (e || Long.UZERO).toString());
    } else {
      obj.packetCommitmentSequences = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.packetCommitmentSequences = object.packetCommitmentSequences?.map(e => Long.fromValue(e)) || [];
    return message;
  },

  fromSDK(object: QueryUnreceivedPacketsRequestSDKType): QueryUnreceivedPacketsRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      packetCommitmentSequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e: any) => e) : []
    };
  },

  toSDK(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;

    if (message.packetCommitmentSequences) {
      obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e);
    } else {
      obj.packet_commitment_sequences = [];
    }

    return obj;
  },

  fromAmino(object: QueryUnreceivedPacketsRequestAmino): QueryUnreceivedPacketsRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      packetCommitmentSequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e: any) => e) : []
    };
  },

  toAmino(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;

    if (message.packetCommitmentSequences) {
      obj.packet_commitment_sequences = message.packetCommitmentSequences.map(e => e);
    } else {
      obj.packet_commitment_sequences = [];
    }

    return obj;
  }

};

function createBaseQueryUnreceivedPacketsResponse(): QueryUnreceivedPacketsResponse {
  return {
    sequences: [],
    height: undefined
  };
}

export const QueryUnreceivedPacketsResponse = {
  encode(message: QueryUnreceivedPacketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.sequences) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sequences.push((reader.uint64() as Long));
            }
          } else {
            message.sequences.push((reader.uint64() as Long));
          }

          break;

        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnreceivedPacketsResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Long.fromValue(e)) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },

  toJSON(message: QueryUnreceivedPacketsResponse): unknown {
    const obj: any = {};

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => (e || Long.UZERO).toString());
    } else {
      obj.sequences = [];
    }

    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map(e => Long.fromValue(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },

  fromSDK(object: QueryUnreceivedPacketsResponseSDKType): QueryUnreceivedPacketsResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => e) : [],
      height: object.height ? Height.fromSDK(object.height) : undefined
    };
  },

  toSDK(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseSDKType {
    const obj: any = {};

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e);
    } else {
      obj.sequences = [];
    }

    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    return obj;
  },

  fromAmino(object: QueryUnreceivedPacketsResponseAmino): QueryUnreceivedPacketsResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => e) : [],
      height: object?.height ? Height.fromAmino(object.height) : undefined
    };
  },

  toAmino(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAmino {
    const obj: any = {};

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e);
    } else {
      obj.sequences = [];
    }

    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  }

};

function createBaseQueryUnreceivedAcksRequest(): QueryUnreceivedAcksRequest {
  return {
    portId: "",
    channelId: "",
    packetAckSequences: []
  };
}

export const QueryUnreceivedAcksRequest = {
  encode(message: QueryUnreceivedAcksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    writer.uint32(26).fork();

    for (const v of message.packetAckSequences) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packetAckSequences.push((reader.uint64() as Long));
            }
          } else {
            message.packetAckSequences.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnreceivedAcksRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      packetAckSequences: Array.isArray(object?.packetAckSequences) ? object.packetAckSequences.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: QueryUnreceivedAcksRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);

    if (message.packetAckSequences) {
      obj.packetAckSequences = message.packetAckSequences.map(e => (e || Long.UZERO).toString());
    } else {
      obj.packetAckSequences = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.packetAckSequences = object.packetAckSequences?.map(e => Long.fromValue(e)) || [];
    return message;
  },

  fromSDK(object: QueryUnreceivedAcksRequestSDKType): QueryUnreceivedAcksRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      packetAckSequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e: any) => e) : []
    };
  },

  toSDK(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;

    if (message.packetAckSequences) {
      obj.packet_ack_sequences = message.packetAckSequences.map(e => e);
    } else {
      obj.packet_ack_sequences = [];
    }

    return obj;
  },

  fromAmino(object: QueryUnreceivedAcksRequestAmino): QueryUnreceivedAcksRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      packetAckSequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e: any) => e) : []
    };
  },

  toAmino(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;

    if (message.packetAckSequences) {
      obj.packet_ack_sequences = message.packetAckSequences.map(e => e);
    } else {
      obj.packet_ack_sequences = [];
    }

    return obj;
  }

};

function createBaseQueryUnreceivedAcksResponse(): QueryUnreceivedAcksResponse {
  return {
    sequences: [],
    height: undefined
  };
}

export const QueryUnreceivedAcksResponse = {
  encode(message: QueryUnreceivedAcksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.sequences) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sequences.push((reader.uint64() as Long));
            }
          } else {
            message.sequences.push((reader.uint64() as Long));
          }

          break;

        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnreceivedAcksResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Long.fromValue(e)) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },

  toJSON(message: QueryUnreceivedAcksResponse): unknown {
    const obj: any = {};

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => (e || Long.UZERO).toString());
    } else {
      obj.sequences = [];
    }

    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map(e => Long.fromValue(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },

  fromSDK(object: QueryUnreceivedAcksResponseSDKType): QueryUnreceivedAcksResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => e) : [],
      height: object.height ? Height.fromSDK(object.height) : undefined
    };
  },

  toSDK(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseSDKType {
    const obj: any = {};

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e);
    } else {
      obj.sequences = [];
    }

    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    return obj;
  },

  fromAmino(object: QueryUnreceivedAcksResponseAmino): QueryUnreceivedAcksResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => e) : [],
      height: object?.height ? Height.fromAmino(object.height) : undefined
    };
  },

  toAmino(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAmino {
    const obj: any = {};

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e);
    } else {
      obj.sequences = [];
    }

    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  }

};

function createBaseQueryNextSequenceReceiveRequest(): QueryNextSequenceReceiveRequest {
  return {
    portId: "",
    channelId: ""
  };
}

export const QueryNextSequenceReceiveRequest = {
  encode(message: QueryNextSequenceReceiveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNextSequenceReceiveRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },

  toJSON(message: QueryNextSequenceReceiveRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest {
    const message = createBaseQueryNextSequenceReceiveRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },

  fromSDK(object: QueryNextSequenceReceiveRequestSDKType): QueryNextSequenceReceiveRequest {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id
    };
  },

  toSDK(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },

  fromAmino(object: QueryNextSequenceReceiveRequestAmino): QueryNextSequenceReceiveRequest {
    return {
      portId: object.port_id,
      channelId: object.channel_id
    };
  },

  toAmino(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  }

};

function createBaseQueryNextSequenceReceiveResponse(): QueryNextSequenceReceiveResponse {
  return {
    nextSequenceReceive: Long.UZERO,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}

export const QueryNextSequenceReceiveResponse = {
  encode(message: QueryNextSequenceReceiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextSequenceReceive.isZero()) {
      writer.uint32(8).uint64(message.nextSequenceReceive);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextSequenceReceive = (reader.uint64() as Long);
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNextSequenceReceiveResponse {
    return {
      nextSequenceReceive: isSet(object.nextSequenceReceive) ? Long.fromValue(object.nextSequenceReceive) : Long.UZERO,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },

  toJSON(message: QueryNextSequenceReceiveResponse): unknown {
    const obj: any = {};
    message.nextSequenceReceive !== undefined && (obj.nextSequenceReceive = (message.nextSequenceReceive || Long.UZERO).toString());
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse {
    const message = createBaseQueryNextSequenceReceiveResponse();
    message.nextSequenceReceive = object.nextSequenceReceive !== undefined && object.nextSequenceReceive !== null ? Long.fromValue(object.nextSequenceReceive) : Long.UZERO;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },

  fromSDK(object: QueryNextSequenceReceiveResponseSDKType): QueryNextSequenceReceiveResponse {
    return {
      nextSequenceReceive: object?.next_sequence_receive,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },

  toSDK(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseSDKType {
    const obj: any = {};
    obj.next_sequence_receive = message.nextSequenceReceive;
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },

  fromAmino(object: QueryNextSequenceReceiveResponseAmino): QueryNextSequenceReceiveResponse {
    return {
      nextSequenceReceive: Long.fromString(object.next_sequence_receive),
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },

  toAmino(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAmino {
    const obj: any = {};
    obj.next_sequence_receive = message.nextSequenceReceive ? message.nextSequenceReceive.toString() : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  }

};