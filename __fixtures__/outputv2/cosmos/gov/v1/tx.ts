import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, VoteOptionAmino, VoteOptionSDKType, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType, voteOptionFromJSON, voteOptionToJSON } from "./gov";
import { TextProposal, TextProposalAmino, TextProposalSDKType } from "../v1beta1/gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalAmino, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalAmino, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalAmino, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalAmino, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalAmino, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalAmino, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalAmino, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalAmino, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalAmino, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "cosmos.gov.v1";

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  messages: (TextProposal & RegisterIncentiveProposal & ClientUpdateProposal & UpgradeProposal & ReplacePoolIncentivesProposal & UpdatePoolIncentivesProposal & SetSuperfluidAssetsProposal & RemoveSuperfluidAssetsProposal & UpdateUnpoolWhiteListProposal & UpdateFeeTokenProposal & Any)[] | Any[];
  initialDeposit: Coin[];
  proposer: string;

  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
}
export interface MsgSubmitProposalProtoType {
  typeUrl: "/cosmos.gov.v1.MsgSubmitProposal";
  value: Uint8Array;
}

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalAmino {
  messages: AnyAmino[];
  initial_deposit: CoinAmino[];
  proposer: string;

  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
}
export interface MsgSubmitProposalAminoType {
  type: "cosmos-sdk/v1/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
  messages: AnySDKType[];
  initial_deposit: CoinSDKType[];
  proposer: string;
  metadata: string;
}

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  proposalId: Long;
}
export interface MsgSubmitProposalResponseProtoType {
  typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse";
  value: Uint8Array;
}

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
  proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoType {
  type: "cosmos-sdk/v1/MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
  proposal_id: Long;
}

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContent {
  /** content is the proposal's content. */
  content?: (TextProposal & RegisterIncentiveProposal & ClientUpdateProposal & UpgradeProposal & ReplacePoolIncentivesProposal & UpdatePoolIncentivesProposal & SetSuperfluidAssetsProposal & RemoveSuperfluidAssetsProposal & UpdateUnpoolWhiteListProposal & UpdateFeeTokenProposal & Any) | undefined;

  /** authority must be the gov module address. */
  authority: string;
}
export interface MsgExecLegacyContentProtoType {
  typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent";
  value: Uint8Array;
}

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContentAmino {
  /** content is the proposal's content. */
  content?: AnyAmino;

  /** authority must be the gov module address. */
  authority: string;
}
export interface MsgExecLegacyContentAminoType {
  type: "cosmos-sdk/v1/MsgExecLegacyContent";
  value: MsgExecLegacyContentAmino;
}

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContentSDKType {
  content?: AnySDKType;
  authority: string;
}

/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponse {}
export interface MsgExecLegacyContentResponseProtoType {
  typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse";
  value: Uint8Array;
}

/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponseAmino {}
export interface MsgExecLegacyContentResponseAminoType {
  type: "cosmos-sdk/v1/MsgExecLegacyContentResponse";
  value: MsgExecLegacyContentResponseAmino;
}

/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponseSDKType {}

/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
  proposalId: Long;
  voter: string;
  option: VoteOption;
  metadata: string;
}
export interface MsgVoteProtoType {
  typeUrl: "/cosmos.gov.v1.MsgVote";
  value: Uint8Array;
}

/** MsgVote defines a message to cast a vote. */
export interface MsgVoteAmino {
  proposal_id: string;
  voter: string;
  option: VoteOption;
  metadata: string;
}
export interface MsgVoteAminoType {
  type: "cosmos-sdk/v1/MsgVote";
  value: MsgVoteAmino;
}

/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
  proposal_id: Long;
  voter: string;
  option: VoteOption;
  metadata: string;
}

/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoType {
  typeUrl: "/cosmos.gov.v1.MsgVoteResponse";
  value: Uint8Array;
}

/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoType {
  type: "cosmos-sdk/v1/MsgVoteResponse";
  value: MsgVoteResponseAmino;
}

/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {}

/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeighted {
  proposalId: Long;
  voter: string;
  options: WeightedVoteOption[];
  metadata: string;
}
export interface MsgVoteWeightedProtoType {
  typeUrl: "/cosmos.gov.v1.MsgVoteWeighted";
  value: Uint8Array;
}

/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeightedAmino {
  proposal_id: string;
  voter: string;
  options: WeightedVoteOptionAmino[];
  metadata: string;
}
export interface MsgVoteWeightedAminoType {
  type: "cosmos-sdk/v1/MsgVoteWeighted";
  value: MsgVoteWeightedAmino;
}

/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeightedSDKType {
  proposal_id: Long;
  voter: string;
  options: WeightedVoteOptionSDKType[];
  metadata: string;
}

/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponse {}
export interface MsgVoteWeightedResponseProtoType {
  typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse";
  value: Uint8Array;
}

/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponseAmino {}
export interface MsgVoteWeightedResponseAminoType {
  type: "cosmos-sdk/v1/MsgVoteWeightedResponse";
  value: MsgVoteWeightedResponseAmino;
}

/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponseSDKType {}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
  proposalId: Long;
  depositor: string;
  amount: Coin[];
}
export interface MsgDepositProtoType {
  typeUrl: "/cosmos.gov.v1.MsgDeposit";
  value: Uint8Array;
}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositAmino {
  proposal_id: string;
  depositor: string;
  amount: CoinAmino[];
}
export interface MsgDepositAminoType {
  type: "cosmos-sdk/v1/MsgDeposit";
  value: MsgDepositAmino;
}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
  proposal_id: Long;
  depositor: string;
  amount: CoinSDKType[];
}

/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoType {
  typeUrl: "/cosmos.gov.v1.MsgDepositResponse";
  value: Uint8Array;
}

/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoType {
  type: "cosmos-sdk/v1/MsgDepositResponse";
  value: MsgDepositResponseAmino;
}

/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    messages: [],
    initialDeposit: [],
    proposer: "",
    metadata: ""
  };
}

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Any.encode((v! as Any), writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push((ProposalContentI_InterfaceDecoder(reader) as Any));
          break;

        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposer = reader.string();
          break;

        case 4:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      initialDeposit: Array.isArray(object?.initialDeposit) ? object.initialDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }

    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialDeposit = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromSDK(object: MsgSubmitProposalSDKType): MsgSubmitProposal {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDK(e)) : [],
      initialDeposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      proposer: object?.proposer,
      metadata: object?.metadata
    };
  },

  toSDK(message: MsgSubmitProposal): MsgSubmitProposalSDKType {
    const obj: any = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.messages = [];
    }

    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.initial_deposit = [];
    }

    obj.proposer = message.proposer;
    obj.metadata = message.metadata;
    return obj;
  },

  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => ProposalContentI_FromAmino(e)) : [],
      initialDeposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      proposer: object.proposer,
      metadata: object.metadata
    };
  },

  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? ProposalContentI_ToAmino((e as Any)) : undefined);
    } else {
      obj.messages = [];
    }

    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_deposit = [];
    }

    obj.proposer = message.proposer;
    obj.metadata = message.metadata;
    return obj;
  }

};

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: Long.UZERO
  };
}

export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },

  fromSDK(object: MsgSubmitProposalResponseSDKType): MsgSubmitProposalResponse {
    return {
      proposalId: object?.proposal_id
    };
  },

  toSDK(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },

  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },

  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  }

};

function createBaseMsgExecLegacyContent(): MsgExecLegacyContent {
  return {
    content: undefined,
    authority: ""
  };
}

export const MsgExecLegacyContent = {
  encode(message: MsgExecLegacyContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      Any.encode((message.content as Any), writer.uint32(10).fork()).ldelim();
    }

    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.content = (ProposalContentI_InterfaceDecoder(reader) as Any);
          break;

        case 2:
          message.authority = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecLegacyContent {
    return {
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },

  toJSON(message: MsgExecLegacyContent): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecLegacyContent>): MsgExecLegacyContent {
    const message = createBaseMsgExecLegacyContent();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.authority = object.authority ?? "";
    return message;
  },

  fromSDK(object: MsgExecLegacyContentSDKType): MsgExecLegacyContent {
    return {
      content: object.content ? Any.fromSDK(object.content) : undefined,
      authority: object?.authority
    };
  },

  toSDK(message: MsgExecLegacyContent): MsgExecLegacyContentSDKType {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content ? Any.toSDK(message.content) : undefined);
    obj.authority = message.authority;
    return obj;
  },

  fromAmino(object: MsgExecLegacyContentAmino): MsgExecLegacyContent {
    return {
      content: object?.content ? ProposalContentI_FromAmino(object.content) : undefined,
      authority: object.authority
    };
  },

  toAmino(message: MsgExecLegacyContent): MsgExecLegacyContentAmino {
    const obj: any = {};
    obj.content = message.content ? ProposalContentI_ToAmino((message.content as Any)) : undefined;
    obj.authority = message.authority;
    return obj;
  }

};

function createBaseMsgExecLegacyContentResponse(): MsgExecLegacyContentResponse {
  return {};
}

export const MsgExecLegacyContentResponse = {
  encode(_: MsgExecLegacyContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContentResponse();

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

  fromJSON(_: any): MsgExecLegacyContentResponse {
    return {};
  },

  toJSON(_: MsgExecLegacyContentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgExecLegacyContentResponse>): MsgExecLegacyContentResponse {
    const message = createBaseMsgExecLegacyContentResponse();
    return message;
  },

  fromSDK(_: MsgExecLegacyContentResponseSDKType): MsgExecLegacyContentResponse {
    return {};
  },

  toSDK(_: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgExecLegacyContentResponseAmino): MsgExecLegacyContentResponse {
    return {};
  },

  toAmino(_: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgVote(): MsgVote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0,
    metadata: ""
  };
}

export const MsgVote = {
  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = (reader.int32() as any);
          break;

        case 4:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromSDK(object: MsgVoteSDKType): MsgVote {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: object?.metadata
    };
  },

  toSDK(message: MsgVote): MsgVoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    obj.metadata = message.metadata;
    return obj;
  },

  fromAmino(object: MsgVoteAmino): MsgVote {
    return {
      proposalId: Long.fromString(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      metadata: object.metadata
    };
  },

  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    obj.metadata = message.metadata;
    return obj;
  }

};

function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();

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

  fromJSON(_: any): MsgVoteResponse {
    return {};
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },

  fromSDK(_: MsgVoteResponseSDKType): MsgVoteResponse {
    return {};
  },

  toSDK(_: MsgVoteResponse): MsgVoteResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    return {};
  },

  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: Long.UZERO,
    voter: "",
    options: [],
    metadata: ""
  };
}

export const MsgVoteWeighted = {
  encode(message: MsgVoteWeighted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;

        case 4:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgVoteWeighted {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: MsgVoteWeighted): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);

    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },

  fromSDK(object: MsgVoteWeightedSDKType): MsgVoteWeighted {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromSDK(e)) : [],
      metadata: object?.metadata
    };
  },

  toSDK(message: MsgVoteWeighted): MsgVoteWeightedSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;

    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }

    obj.metadata = message.metadata;
    return obj;
  },

  fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted {
    return {
      proposalId: Long.fromString(object.proposal_id),
      voter: object.voter,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromAmino(e)) : [],
      metadata: object.metadata
    };
  },

  toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;

    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = [];
    }

    obj.metadata = message.metadata;
    return obj;
  }

};

function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}

export const MsgVoteWeightedResponse = {
  encode(_: MsgVoteWeightedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();

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

  fromJSON(_: any): MsgVoteWeightedResponse {
    return {};
  },

  toJSON(_: MsgVoteWeightedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },

  fromSDK(_: MsgVoteWeightedResponseSDKType): MsgVoteWeightedResponse {
    return {};
  },

  toSDK(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse {
    return {};
  },

  toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: Long.UZERO,
    depositor: "",
    amount: []
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeposit {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgDepositSDKType): MsgDeposit {
    return {
      proposalId: object?.proposal_id,
      depositor: object?.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: MsgDeposit): MsgDepositSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.depositor = message.depositor;

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromAmino(object: MsgDepositAmino): MsgDeposit {
    return {
      proposalId: Long.fromString(object.proposal_id),
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.depositor = message.depositor;

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

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

  fromJSON(_: any): MsgDepositResponse {
    return {};
  },

  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },

  fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse {
    return {};
  },

  toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    return {};
  },

  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  }

};
export const ProposalContentI_InterfaceDecoder = (input: _m0.Reader | Uint8Array): TextProposal | RegisterIncentiveProposal | ClientUpdateProposal | UpgradeProposal | ReplacePoolIncentivesProposal | UpdatePoolIncentivesProposal | SetSuperfluidAssetsProposal | RemoveSuperfluidAssetsProposal | UpdateUnpoolWhiteListProposal | UpdateFeeTokenProposal | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());

  switch (data.typeUrl) {
    case "/cosmos.gov.v1beta1.TextProposal":
      return TextProposal.decode(data.value);

    case "/evmos.incentives.v1.RegisterIncentiveProposal":
      return RegisterIncentiveProposal.decode(data.value);

    case "/ibc.core.client.v1.ClientUpdateProposal":
      return ClientUpdateProposal.decode(data.value);

    case "/ibc.core.client.v1.UpgradeProposal":
      return UpgradeProposal.decode(data.value);

    case "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal":
      return ReplacePoolIncentivesProposal.decode(data.value);

    case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
      return UpdatePoolIncentivesProposal.decode(data.value);

    case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
      return SetSuperfluidAssetsProposal.decode(data.value);

    case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
      return RemoveSuperfluidAssetsProposal.decode(data.value);

    case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
      return UpdateUnpoolWhiteListProposal.decode(data.value);

    case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
      return UpdateFeeTokenProposal.decode(data.value);

    default:
      return data;
  }
};
export const ProposalContentI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/v1/TextProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(TextProposal.fromPartial((content.value as DeepPartial<TextProposal>))).finish()
      });

    case "/evmos.incentives.v1.RegisterIncentiveProposal":
      return Any.fromPartial({
        typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal",
        value: RegisterIncentiveProposal.encode(RegisterIncentiveProposal.fromPartial((content.value as DeepPartial<RegisterIncentiveProposal>))).finish()
      });

    case "cosmos-sdk/ClientUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
        value: ClientUpdateProposal.encode(ClientUpdateProposal.fromPartial((content.value as DeepPartial<ClientUpdateProposal>))).finish()
      });

    case "cosmos-sdk/UpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        value: UpgradeProposal.encode(UpgradeProposal.fromPartial((content.value as DeepPartial<UpgradeProposal>))).finish()
      });

    case "osmosis/poolincentives/replace-pool-incentives-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
        value: ReplacePoolIncentivesProposal.encode(ReplacePoolIncentivesProposal.fromPartial((content.value as DeepPartial<ReplacePoolIncentivesProposal>))).finish()
      });

    case "osmosis/poolincentives/update-pool-incentives-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
        value: UpdatePoolIncentivesProposal.encode(UpdatePoolIncentivesProposal.fromPartial((content.value as DeepPartial<UpdatePoolIncentivesProposal>))).finish()
      });

    case "osmosis/v1beta1/set-superfluid-assets-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
        value: SetSuperfluidAssetsProposal.encode(SetSuperfluidAssetsProposal.fromPartial((content.value as DeepPartial<SetSuperfluidAssetsProposal>))).finish()
      });

    case "osmosis/v1beta1/remove-superfluid-assets-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
        value: RemoveSuperfluidAssetsProposal.encode(RemoveSuperfluidAssetsProposal.fromPartial((content.value as DeepPartial<RemoveSuperfluidAssetsProposal>))).finish()
      });

    case "osmosis/v1beta1/update-unpool-white-list-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
        value: UpdateUnpoolWhiteListProposal.encode(UpdateUnpoolWhiteListProposal.fromPartial((content.value as DeepPartial<UpdateUnpoolWhiteListProposal>))).finish()
      });

    case "osmosis/txfees/update-fee-token-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
        value: UpdateFeeTokenProposal.encode(UpdateFeeTokenProposal.fromPartial((content.value as DeepPartial<UpdateFeeTokenProposal>))).finish()
      });

    default:
      return Any.fromAmino(content);
  }
};
export const ProposalContentI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/v1/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value))
      };

    case "/evmos.incentives.v1.RegisterIncentiveProposal":
      return {
        type: "/evmos.incentives.v1.RegisterIncentiveProposal",
        value: RegisterIncentiveProposal.toAmino(RegisterIncentiveProposal.decode(content.value))
      };

    case "/ibc.core.client.v1.ClientUpdateProposal":
      return {
        type: "cosmos-sdk/ClientUpdateProposal",
        value: ClientUpdateProposal.toAmino(ClientUpdateProposal.decode(content.value))
      };

    case "/ibc.core.client.v1.UpgradeProposal":
      return {
        type: "cosmos-sdk/UpgradeProposal",
        value: UpgradeProposal.toAmino(UpgradeProposal.decode(content.value))
      };

    case "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal":
      return {
        type: "osmosis/poolincentives/replace-pool-incentives-proposal",
        value: ReplacePoolIncentivesProposal.toAmino(ReplacePoolIncentivesProposal.decode(content.value))
      };

    case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
      return {
        type: "osmosis/poolincentives/update-pool-incentives-proposal",
        value: UpdatePoolIncentivesProposal.toAmino(UpdatePoolIncentivesProposal.decode(content.value))
      };

    case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
      return {
        type: "osmosis/v1beta1/set-superfluid-assets-proposal",
        value: SetSuperfluidAssetsProposal.toAmino(SetSuperfluidAssetsProposal.decode(content.value))
      };

    case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
      return {
        type: "osmosis/v1beta1/remove-superfluid-assets-proposal",
        value: RemoveSuperfluidAssetsProposal.toAmino(RemoveSuperfluidAssetsProposal.decode(content.value))
      };

    case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
      return {
        type: "osmosis/v1beta1/update-unpool-white-list-proposal",
        value: UpdateUnpoolWhiteListProposal.toAmino(UpdateUnpoolWhiteListProposal.decode(content.value))
      };

    case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
      return {
        type: "osmosis/txfees/update-fee-token-proposal",
        value: UpdateFeeTokenProposal.toAmino(UpdateFeeTokenProposal.decode(content.value))
      };

    default:
      return Any.toAmino(content);
  }
};