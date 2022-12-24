import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeAmino, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordAmino, SuperfluidDelegationRecordSDKType, superfluidAssetTypeFromJSON, superfluidAssetTypeToJSON } from "./superfluid";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "../../helpers";
export const protobufPackage = "osmosis.superfluid";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoType {
  typeUrl: "/osmosis.superfluid.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoType {
  type: "osmosis/query-params-request";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoType {
  typeUrl: "/osmosis.superfluid.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoType {
  type: "osmosis/query-params-response";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface AssetTypeRequest {
  denom: string;
}
export interface AssetTypeRequestProtoType {
  typeUrl: "/osmosis.superfluid.AssetTypeRequest";
  value: Uint8Array;
}
export interface AssetTypeRequestAmino {
  denom: string;
}
export interface AssetTypeRequestAminoType {
  type: "osmosis/asset-type-request";
  value: AssetTypeRequestAmino;
}
export interface AssetTypeRequestSDKType {
  denom: string;
}
export interface AssetTypeResponse {
  assetType: SuperfluidAssetType;
}
export interface AssetTypeResponseProtoType {
  typeUrl: "/osmosis.superfluid.AssetTypeResponse";
  value: Uint8Array;
}
export interface AssetTypeResponseAmino {
  asset_type: SuperfluidAssetType;
}
export interface AssetTypeResponseAminoType {
  type: "osmosis/asset-type-response";
  value: AssetTypeResponseAmino;
}
export interface AssetTypeResponseSDKType {
  asset_type: SuperfluidAssetType;
}
export interface AllAssetsRequest {}
export interface AllAssetsRequestProtoType {
  typeUrl: "/osmosis.superfluid.AllAssetsRequest";
  value: Uint8Array;
}
export interface AllAssetsRequestAmino {}
export interface AllAssetsRequestAminoType {
  type: "osmosis/all-assets-request";
  value: AllAssetsRequestAmino;
}
export interface AllAssetsRequestSDKType {}
export interface AllAssetsResponse {
  assets: SuperfluidAsset[];
}
export interface AllAssetsResponseProtoType {
  typeUrl: "/osmosis.superfluid.AllAssetsResponse";
  value: Uint8Array;
}
export interface AllAssetsResponseAmino {
  assets: SuperfluidAssetAmino[];
}
export interface AllAssetsResponseAminoType {
  type: "osmosis/all-assets-response";
  value: AllAssetsResponseAmino;
}
export interface AllAssetsResponseSDKType {
  assets: SuperfluidAssetSDKType[];
}
export interface AssetMultiplierRequest {
  denom: string;
}
export interface AssetMultiplierRequestProtoType {
  typeUrl: "/osmosis.superfluid.AssetMultiplierRequest";
  value: Uint8Array;
}
export interface AssetMultiplierRequestAmino {
  denom: string;
}
export interface AssetMultiplierRequestAminoType {
  type: "osmosis/asset-multiplier-request";
  value: AssetMultiplierRequestAmino;
}
export interface AssetMultiplierRequestSDKType {
  denom: string;
}
export interface AssetMultiplierResponse {
  osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
}
export interface AssetMultiplierResponseProtoType {
  typeUrl: "/osmosis.superfluid.AssetMultiplierResponse";
  value: Uint8Array;
}
export interface AssetMultiplierResponseAmino {
  osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordAmino;
}
export interface AssetMultiplierResponseAminoType {
  type: "osmosis/asset-multiplier-response";
  value: AssetMultiplierResponseAmino;
}
export interface AssetMultiplierResponseSDKType {
  osmo_equivalent_multiplier?: OsmoEquivalentMultiplierRecordSDKType;
}
export interface SuperfluidIntermediaryAccountInfo {
  denom: string;
  valAddr: string;
  gaugeId: Long;
  address: string;
}
export interface SuperfluidIntermediaryAccountInfoProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
  value: Uint8Array;
}
export interface SuperfluidIntermediaryAccountInfoAmino {
  denom: string;
  val_addr: string;
  gauge_id: string;
  address: string;
}
export interface SuperfluidIntermediaryAccountInfoAminoType {
  type: "osmosis/superfluid-intermediary-account-info";
  value: SuperfluidIntermediaryAccountInfoAmino;
}
export interface SuperfluidIntermediaryAccountInfoSDKType {
  denom: string;
  val_addr: string;
  gauge_id: Long;
  address: string;
}
export interface AllIntermediaryAccountsRequest {
  pagination?: PageRequest;
}
export interface AllIntermediaryAccountsRequestProtoType {
  typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest";
  value: Uint8Array;
}
export interface AllIntermediaryAccountsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface AllIntermediaryAccountsRequestAminoType {
  type: "osmosis/all-intermediary-accounts-request";
  value: AllIntermediaryAccountsRequestAmino;
}
export interface AllIntermediaryAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface AllIntermediaryAccountsResponse {
  accounts: SuperfluidIntermediaryAccountInfo[];
  pagination?: PageResponse;
}
export interface AllIntermediaryAccountsResponseProtoType {
  typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse";
  value: Uint8Array;
}
export interface AllIntermediaryAccountsResponseAmino {
  accounts: SuperfluidIntermediaryAccountInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface AllIntermediaryAccountsResponseAminoType {
  type: "osmosis/all-intermediary-accounts-response";
  value: AllIntermediaryAccountsResponseAmino;
}
export interface AllIntermediaryAccountsResponseSDKType {
  accounts: SuperfluidIntermediaryAccountInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface ConnectedIntermediaryAccountRequest {
  lockId: Long;
}
export interface ConnectedIntermediaryAccountRequestProtoType {
  typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest";
  value: Uint8Array;
}
export interface ConnectedIntermediaryAccountRequestAmino {
  lock_id: string;
}
export interface ConnectedIntermediaryAccountRequestAminoType {
  type: "osmosis/connected-intermediary-account-request";
  value: ConnectedIntermediaryAccountRequestAmino;
}
export interface ConnectedIntermediaryAccountRequestSDKType {
  lock_id: Long;
}
export interface ConnectedIntermediaryAccountResponse {
  account?: SuperfluidIntermediaryAccountInfo;
}
export interface ConnectedIntermediaryAccountResponseProtoType {
  typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse";
  value: Uint8Array;
}
export interface ConnectedIntermediaryAccountResponseAmino {
  account?: SuperfluidIntermediaryAccountInfoAmino;
}
export interface ConnectedIntermediaryAccountResponseAminoType {
  type: "osmosis/connected-intermediary-account-response";
  value: ConnectedIntermediaryAccountResponseAmino;
}
export interface ConnectedIntermediaryAccountResponseSDKType {
  account?: SuperfluidIntermediaryAccountInfoSDKType;
}
export interface QueryTotalDelegationByValidatorForDenomRequest {
  denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestProtoType {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest";
  value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAmino {
  denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomRequestAminoType {
  type: "osmosis/query-total-delegation-by-validator-for-denom-request";
  value: QueryTotalDelegationByValidatorForDenomRequestAmino;
}
export interface QueryTotalDelegationByValidatorForDenomRequestSDKType {
  denom: string;
}
export interface QueryTotalDelegationByValidatorForDenomResponse {
  assets: Delegations[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseProtoType {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse";
  value: Uint8Array;
}
export interface QueryTotalDelegationByValidatorForDenomResponseAmino {
  assets: DelegationsAmino[];
}
export interface QueryTotalDelegationByValidatorForDenomResponseAminoType {
  type: "osmosis/query-total-delegation-by-validator-for-denom-response";
  value: QueryTotalDelegationByValidatorForDenomResponseAmino;
}
export interface QueryTotalDelegationByValidatorForDenomResponseSDKType {
  assets: DelegationsSDKType[];
}
export interface Delegations {
  valAddr: string;
  amountSfsd: string;
  osmoEquivalent: string;
}
export interface DelegationsProtoType {
  typeUrl: "/osmosis.superfluid.Delegations";
  value: Uint8Array;
}
export interface DelegationsAmino {
  val_addr: string;
  amount_sfsd: string;
  osmo_equivalent: string;
}
export interface DelegationsAminoType {
  type: "osmosis/delegations";
  value: DelegationsAmino;
}
export interface DelegationsSDKType {
  val_addr: string;
  amount_sfsd: string;
  osmo_equivalent: string;
}
export interface TotalSuperfluidDelegationsRequest {}
export interface TotalSuperfluidDelegationsRequestProtoType {
  typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest";
  value: Uint8Array;
}
export interface TotalSuperfluidDelegationsRequestAmino {}
export interface TotalSuperfluidDelegationsRequestAminoType {
  type: "osmosis/total-superfluid-delegations-request";
  value: TotalSuperfluidDelegationsRequestAmino;
}
export interface TotalSuperfluidDelegationsRequestSDKType {}
export interface TotalSuperfluidDelegationsResponse {
  totalDelegations: string;
}
export interface TotalSuperfluidDelegationsResponseProtoType {
  typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse";
  value: Uint8Array;
}
export interface TotalSuperfluidDelegationsResponseAmino {
  total_delegations: string;
}
export interface TotalSuperfluidDelegationsResponseAminoType {
  type: "osmosis/total-superfluid-delegations-response";
  value: TotalSuperfluidDelegationsResponseAmino;
}
export interface TotalSuperfluidDelegationsResponseSDKType {
  total_delegations: string;
}
export interface SuperfluidDelegationAmountRequest {
  delegatorAddress: string;
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationAmountRequestProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest";
  value: Uint8Array;
}
export interface SuperfluidDelegationAmountRequestAmino {
  delegator_address: string;
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationAmountRequestAminoType {
  type: "osmosis/superfluid-delegation-amount-request";
  value: SuperfluidDelegationAmountRequestAmino;
}
export interface SuperfluidDelegationAmountRequestSDKType {
  delegator_address: string;
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationAmountResponse {
  amount: Coin[];
}
export interface SuperfluidDelegationAmountResponseProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse";
  value: Uint8Array;
}
export interface SuperfluidDelegationAmountResponseAmino {
  amount: CoinAmino[];
}
export interface SuperfluidDelegationAmountResponseAminoType {
  type: "osmosis/superfluid-delegation-amount-response";
  value: SuperfluidDelegationAmountResponseAmino;
}
export interface SuperfluidDelegationAmountResponseSDKType {
  amount: CoinSDKType[];
}
export interface SuperfluidDelegationsByDelegatorRequest {
  delegatorAddress: string;
}
export interface SuperfluidDelegationsByDelegatorRequestProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest";
  value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorRequestAmino {
  delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorRequestAminoType {
  type: "osmosis/superfluid-delegations-by-delegator-request";
  value: SuperfluidDelegationsByDelegatorRequestAmino;
}
export interface SuperfluidDelegationsByDelegatorRequestSDKType {
  delegator_address: string;
}
export interface SuperfluidDelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount?: Coin;
}
export interface SuperfluidDelegationsByDelegatorResponseProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse";
  value: Uint8Array;
}
export interface SuperfluidDelegationsByDelegatorResponseAmino {
  superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
  total_delegated_coins: CoinAmino[];
  total_equivalent_staked_amount?: CoinAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseAminoType {
  type: "osmosis/superfluid-delegations-by-delegator-response";
  value: SuperfluidDelegationsByDelegatorResponseAmino;
}
export interface SuperfluidDelegationsByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  total_delegated_coins: CoinSDKType[];
  total_equivalent_staked_amount?: CoinSDKType;
}
export interface SuperfluidUndelegationsByDelegatorRequest {
  delegatorAddress: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest";
  value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorRequestAmino {
  delegator_address: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorRequestAminoType {
  type: "osmosis/superfluid-undelegations-by-delegator-request";
  value: SuperfluidUndelegationsByDelegatorRequestAmino;
}
export interface SuperfluidUndelegationsByDelegatorRequestSDKType {
  delegator_address: string;
  denom: string;
}
export interface SuperfluidUndelegationsByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  totalUndelegatedCoins: Coin[];
  syntheticLocks: SyntheticLock[];
}
export interface SuperfluidUndelegationsByDelegatorResponseProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse";
  value: Uint8Array;
}
export interface SuperfluidUndelegationsByDelegatorResponseAmino {
  superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
  total_undelegated_coins: CoinAmino[];
  synthetic_locks: SyntheticLockAmino[];
}
export interface SuperfluidUndelegationsByDelegatorResponseAminoType {
  type: "osmosis/superfluid-undelegations-by-delegator-response";
  value: SuperfluidUndelegationsByDelegatorResponseAmino;
}
export interface SuperfluidUndelegationsByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  total_undelegated_coins: CoinSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
}
export interface SuperfluidDelegationsByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest";
  value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAmino {
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomRequestAminoType {
  type: "osmosis/superfluid-delegations-by-validator-denom-request";
  value: SuperfluidDelegationsByValidatorDenomRequestAmino;
}
export interface SuperfluidDelegationsByValidatorDenomRequestSDKType {
  validator_address: string;
  denom: string;
}
export interface SuperfluidDelegationsByValidatorDenomResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseProtoType {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse";
  value: Uint8Array;
}
export interface SuperfluidDelegationsByValidatorDenomResponseAmino {
  superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
}
export interface SuperfluidDelegationsByValidatorDenomResponseAminoType {
  type: "osmosis/superfluid-delegations-by-validator-denom-response";
  value: SuperfluidDelegationsByValidatorDenomResponseAmino;
}
export interface SuperfluidDelegationsByValidatorDenomResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  validatorAddress: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoType {
  typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
  value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
  validator_address: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoType {
  type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request";
  value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
  validator_address: string;
  denom: string;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  totalDelegatedCoins: Coin[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoType {
  typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
  value: Uint8Array;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
  total_delegated_coins: CoinAmino[];
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoType {
  type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response";
  value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
}
export interface EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
  total_delegated_coins: CoinSDKType[];
}
export interface QueryTotalDelegationByDelegatorRequest {
  delegatorAddress: string;
}
export interface QueryTotalDelegationByDelegatorRequestProtoType {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest";
  value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorRequestAmino {
  delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorRequestAminoType {
  type: "osmosis/query-total-delegation-by-delegator-request";
  value: QueryTotalDelegationByDelegatorRequestAmino;
}
export interface QueryTotalDelegationByDelegatorRequestSDKType {
  delegator_address: string;
}
export interface QueryTotalDelegationByDelegatorResponse {
  superfluidDelegationRecords: SuperfluidDelegationRecord[];
  delegationResponse: DelegationResponse[];
  totalDelegatedCoins: Coin[];
  totalEquivalentStakedAmount?: Coin;
}
export interface QueryTotalDelegationByDelegatorResponseProtoType {
  typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse";
  value: Uint8Array;
}
export interface QueryTotalDelegationByDelegatorResponseAmino {
  superfluid_delegation_records: SuperfluidDelegationRecordAmino[];
  delegation_response: DelegationResponseAmino[];
  total_delegated_coins: CoinAmino[];
  total_equivalent_staked_amount?: CoinAmino;
}
export interface QueryTotalDelegationByDelegatorResponseAminoType {
  type: "osmosis/query-total-delegation-by-delegator-response";
  value: QueryTotalDelegationByDelegatorResponseAmino;
}
export interface QueryTotalDelegationByDelegatorResponseSDKType {
  superfluid_delegation_records: SuperfluidDelegationRecordSDKType[];
  delegation_response: DelegationResponseSDKType[];
  total_delegated_coins: CoinSDKType[];
  total_equivalent_staked_amount?: CoinSDKType;
}
export interface QueryUnpoolWhitelistRequest {}
export interface QueryUnpoolWhitelistRequestProtoType {
  typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest";
  value: Uint8Array;
}
export interface QueryUnpoolWhitelistRequestAmino {}
export interface QueryUnpoolWhitelistRequestAminoType {
  type: "osmosis/query-unpool-whitelist-request";
  value: QueryUnpoolWhitelistRequestAmino;
}
export interface QueryUnpoolWhitelistRequestSDKType {}
export interface QueryUnpoolWhitelistResponse {
  poolIds: Long[];
}
export interface QueryUnpoolWhitelistResponseProtoType {
  typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse";
  value: Uint8Array;
}
export interface QueryUnpoolWhitelistResponseAmino {
  pool_ids: string[];
}
export interface QueryUnpoolWhitelistResponseAminoType {
  type: "osmosis/query-unpool-whitelist-response";
  value: QueryUnpoolWhitelistResponseAmino;
}
export interface QueryUnpoolWhitelistResponseSDKType {
  pool_ids: Long[];
}

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

function createBaseAssetTypeRequest(): AssetTypeRequest {
  return {
    denom: ""
  };
}

export const AssetTypeRequest = {
  encode(message: AssetTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeRequest();

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

  fromJSON(object: any): AssetTypeRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AssetTypeRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetTypeRequest>): AssetTypeRequest {
    const message = createBaseAssetTypeRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: AssetTypeRequestSDKType): AssetTypeRequest {
    return {
      denom: object?.denom
    };
  },

  toSDK(message: AssetTypeRequest): AssetTypeRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: AssetTypeRequestAmino): AssetTypeRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: AssetTypeRequest): AssetTypeRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseAssetTypeResponse(): AssetTypeResponse {
  return {
    assetType: 0
  };
}

export const AssetTypeResponse = {
  encode(message: AssetTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetType !== 0) {
      writer.uint32(8).int32(message.assetType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTypeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assetType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetTypeResponse {
    return {
      assetType: isSet(object.assetType) ? superfluidAssetTypeFromJSON(object.assetType) : 0
    };
  },

  toJSON(message: AssetTypeResponse): unknown {
    const obj: any = {};
    message.assetType !== undefined && (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromPartial(object: DeepPartial<AssetTypeResponse>): AssetTypeResponse {
    const message = createBaseAssetTypeResponse();
    message.assetType = object.assetType ?? 0;
    return message;
  },

  fromSDK(object: AssetTypeResponseSDKType): AssetTypeResponse {
    return {
      assetType: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : 0
    };
  },

  toSDK(message: AssetTypeResponse): AssetTypeResponseSDKType {
    const obj: any = {};
    message.assetType !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.assetType));
    return obj;
  },

  fromAmino(object: AssetTypeResponseAmino): AssetTypeResponse {
    return {
      assetType: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : 0
    };
  },

  toAmino(message: AssetTypeResponse): AssetTypeResponseAmino {
    const obj: any = {};
    obj.asset_type = message.assetType;
    return obj;
  }

};

function createBaseAllAssetsRequest(): AllAssetsRequest {
  return {};
}

export const AllAssetsRequest = {
  encode(_: AllAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsRequest();

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

  fromJSON(_: any): AllAssetsRequest {
    return {};
  },

  toJSON(_: AllAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<AllAssetsRequest>): AllAssetsRequest {
    const message = createBaseAllAssetsRequest();
    return message;
  },

  fromSDK(_: AllAssetsRequestSDKType): AllAssetsRequest {
    return {};
  },

  toSDK(_: AllAssetsRequest): AllAssetsRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: AllAssetsRequestAmino): AllAssetsRequest {
    return {};
  },

  toAmino(_: AllAssetsRequest): AllAssetsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseAllAssetsResponse(): AllAssetsResponse {
  return {
    assets: []
  };
}

export const AllAssetsResponse = {
  encode(message: AllAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      SuperfluidAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllAssetsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromJSON(e)) : []
    };
  },

  toJSON(message: AllAssetsResponse): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AllAssetsResponse>): AllAssetsResponse {
    const message = createBaseAllAssetsResponse();
    message.assets = object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: AllAssetsResponseSDKType): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromSDK(e)) : []
    };
  },

  toSDK(message: AllAssetsResponse): AllAssetsResponseSDKType {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toSDK(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromAmino(object: AllAssetsResponseAmino): AllAssetsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => SuperfluidAsset.fromAmino(e)) : []
    };
  },

  toAmino(message: AllAssetsResponse): AllAssetsResponseAmino {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  }

};

function createBaseAssetMultiplierRequest(): AssetMultiplierRequest {
  return {
    denom: ""
  };
}

export const AssetMultiplierRequest = {
  encode(message: AssetMultiplierRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierRequest();

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

  fromJSON(object: any): AssetMultiplierRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: AssetMultiplierRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetMultiplierRequest>): AssetMultiplierRequest {
    const message = createBaseAssetMultiplierRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: AssetMultiplierRequestSDKType): AssetMultiplierRequest {
    return {
      denom: object?.denom
    };
  },

  toSDK(message: AssetMultiplierRequest): AssetMultiplierRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: AssetMultiplierRequestAmino): AssetMultiplierRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: AssetMultiplierRequest): AssetMultiplierRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseAssetMultiplierResponse(): AssetMultiplierResponse {
  return {
    osmoEquivalentMultiplier: undefined
  };
}

export const AssetMultiplierResponse = {
  encode(message: AssetMultiplierResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.osmoEquivalentMultiplier !== undefined) {
      OsmoEquivalentMultiplierRecord.encode(message.osmoEquivalentMultiplier, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMultiplierResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMultiplierResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.osmoEquivalentMultiplier = OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: isSet(object.osmoEquivalentMultiplier) ? OsmoEquivalentMultiplierRecord.fromJSON(object.osmoEquivalentMultiplier) : undefined
    };
  },

  toJSON(message: AssetMultiplierResponse): unknown {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined && (obj.osmoEquivalentMultiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toJSON(message.osmoEquivalentMultiplier) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetMultiplierResponse>): AssetMultiplierResponse {
    const message = createBaseAssetMultiplierResponse();
    message.osmoEquivalentMultiplier = object.osmoEquivalentMultiplier !== undefined && object.osmoEquivalentMultiplier !== null ? OsmoEquivalentMultiplierRecord.fromPartial(object.osmoEquivalentMultiplier) : undefined;
    return message;
  },

  fromSDK(object: AssetMultiplierResponseSDKType): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: object.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.fromSDK(object.osmo_equivalent_multiplier) : undefined
    };
  },

  toSDK(message: AssetMultiplierResponse): AssetMultiplierResponseSDKType {
    const obj: any = {};
    message.osmoEquivalentMultiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toSDK(message.osmoEquivalentMultiplier) : undefined);
    return obj;
  },

  fromAmino(object: AssetMultiplierResponseAmino): AssetMultiplierResponse {
    return {
      osmoEquivalentMultiplier: object?.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.fromAmino(object.osmo_equivalent_multiplier) : undefined
    };
  },

  toAmino(message: AssetMultiplierResponse): AssetMultiplierResponseAmino {
    const obj: any = {};
    obj.osmo_equivalent_multiplier = message.osmoEquivalentMultiplier ? OsmoEquivalentMultiplierRecord.toAmino(message.osmoEquivalentMultiplier) : undefined;
    return obj;
  }

};

function createBaseSuperfluidIntermediaryAccountInfo(): SuperfluidIntermediaryAccountInfo {
  return {
    denom: "",
    valAddr: "",
    gaugeId: Long.UZERO,
    address: ""
  };
}

export const SuperfluidIntermediaryAccountInfo = {
  encode(message: SuperfluidIntermediaryAccountInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.valAddr !== "") {
      writer.uint32(18).string(message.valAddr);
    }

    if (!message.gaugeId.isZero()) {
      writer.uint32(24).uint64(message.gaugeId);
    }

    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidIntermediaryAccountInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccountInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.valAddr = reader.string();
          break;

        case 3:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 4:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidIntermediaryAccountInfo {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: SuperfluidIntermediaryAccountInfo): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidIntermediaryAccountInfo>): SuperfluidIntermediaryAccountInfo {
    const message = createBaseSuperfluidIntermediaryAccountInfo();
    message.denom = object.denom ?? "";
    message.valAddr = object.valAddr ?? "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },

  fromSDK(object: SuperfluidIntermediaryAccountInfoSDKType): SuperfluidIntermediaryAccountInfo {
    return {
      denom: object?.denom,
      valAddr: object?.val_addr,
      gaugeId: object?.gauge_id,
      address: object?.address
    };
  },

  toSDK(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.val_addr = message.valAddr;
    obj.gauge_id = message.gaugeId;
    obj.address = message.address;
    return obj;
  },

  fromAmino(object: SuperfluidIntermediaryAccountInfoAmino): SuperfluidIntermediaryAccountInfo {
    return {
      denom: object.denom,
      valAddr: object.val_addr,
      gaugeId: Long.fromString(object.gauge_id),
      address: object.address
    };
  },

  toAmino(message: SuperfluidIntermediaryAccountInfo): SuperfluidIntermediaryAccountInfoAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.val_addr = message.valAddr;
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    obj.address = message.address;
    return obj;
  }

};

function createBaseAllIntermediaryAccountsRequest(): AllIntermediaryAccountsRequest {
  return {
    pagination: undefined
  };
}

export const AllIntermediaryAccountsRequest = {
  encode(message: AllIntermediaryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsRequest();

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

  fromJSON(object: any): AllIntermediaryAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: AllIntermediaryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AllIntermediaryAccountsRequest>): AllIntermediaryAccountsRequest {
    const message = createBaseAllIntermediaryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: AllIntermediaryAccountsRequestSDKType): AllIntermediaryAccountsRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: AllIntermediaryAccountsRequestAmino): AllIntermediaryAccountsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: AllIntermediaryAccountsRequest): AllIntermediaryAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseAllIntermediaryAccountsResponse(): AllIntermediaryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}

export const AllIntermediaryAccountsResponse = {
  encode(message: AllIntermediaryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      SuperfluidIntermediaryAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllIntermediaryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllIntermediaryAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: AllIntermediaryAccountsResponse): unknown {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AllIntermediaryAccountsResponse>): AllIntermediaryAccountsResponse {
    const message = createBaseAllIntermediaryAccountsResponse();
    message.accounts = object.accounts?.map(e => SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: AllIntermediaryAccountsResponseSDKType): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  toSDK(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseSDKType {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toSDK(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },

  fromAmino(object: AllIntermediaryAccountsResponseAmino): AllIntermediaryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => SuperfluidIntermediaryAccountInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },

  toAmino(message: AllIntermediaryAccountsResponse): AllIntermediaryAccountsResponseAmino {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }

    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  }

};

function createBaseConnectedIntermediaryAccountRequest(): ConnectedIntermediaryAccountRequest {
  return {
    lockId: Long.UZERO
  };
}

export const ConnectedIntermediaryAccountRequest = {
  encode(message: ConnectedIntermediaryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lockId.isZero()) {
      writer.uint32(8).uint64(message.lockId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lockId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConnectedIntermediaryAccountRequest {
    return {
      lockId: isSet(object.lockId) ? Long.fromValue(object.lockId) : Long.UZERO
    };
  },

  toJSON(message: ConnectedIntermediaryAccountRequest): unknown {
    const obj: any = {};
    message.lockId !== undefined && (obj.lockId = (message.lockId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ConnectedIntermediaryAccountRequest>): ConnectedIntermediaryAccountRequest {
    const message = createBaseConnectedIntermediaryAccountRequest();
    message.lockId = object.lockId !== undefined && object.lockId !== null ? Long.fromValue(object.lockId) : Long.UZERO;
    return message;
  },

  fromSDK(object: ConnectedIntermediaryAccountRequestSDKType): ConnectedIntermediaryAccountRequest {
    return {
      lockId: object?.lock_id
    };
  },

  toSDK(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestSDKType {
    const obj: any = {};
    obj.lock_id = message.lockId;
    return obj;
  },

  fromAmino(object: ConnectedIntermediaryAccountRequestAmino): ConnectedIntermediaryAccountRequest {
    return {
      lockId: Long.fromString(object.lock_id)
    };
  },

  toAmino(message: ConnectedIntermediaryAccountRequest): ConnectedIntermediaryAccountRequestAmino {
    const obj: any = {};
    obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
    return obj;
  }

};

function createBaseConnectedIntermediaryAccountResponse(): ConnectedIntermediaryAccountResponse {
  return {
    account: undefined
  };
}

export const ConnectedIntermediaryAccountResponse = {
  encode(message: ConnectedIntermediaryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectedIntermediaryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectedIntermediaryAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConnectedIntermediaryAccountResponse {
    return {
      account: isSet(object.account) ? SuperfluidIntermediaryAccountInfo.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: ConnectedIntermediaryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ConnectedIntermediaryAccountResponse>): ConnectedIntermediaryAccountResponse {
    const message = createBaseConnectedIntermediaryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? SuperfluidIntermediaryAccountInfo.fromPartial(object.account) : undefined;
    return message;
  },

  fromSDK(object: ConnectedIntermediaryAccountResponseSDKType): ConnectedIntermediaryAccountResponse {
    return {
      account: object.account ? SuperfluidIntermediaryAccountInfo.fromSDK(object.account) : undefined
    };
  },

  toSDK(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseSDKType {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toSDK(message.account) : undefined);
    return obj;
  },

  fromAmino(object: ConnectedIntermediaryAccountResponseAmino): ConnectedIntermediaryAccountResponse {
    return {
      account: object?.account ? SuperfluidIntermediaryAccountInfo.fromAmino(object.account) : undefined
    };
  },

  toAmino(message: ConnectedIntermediaryAccountResponse): ConnectedIntermediaryAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toAmino(message.account) : undefined;
    return obj;
  }

};

function createBaseQueryTotalDelegationByValidatorForDenomRequest(): QueryTotalDelegationByValidatorForDenomRequest {
  return {
    denom: ""
  };
}

export const QueryTotalDelegationByValidatorForDenomRequest = {
  encode(message: QueryTotalDelegationByValidatorForDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();

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

  fromJSON(object: any): QueryTotalDelegationByValidatorForDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryTotalDelegationByValidatorForDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalDelegationByValidatorForDenomRequest>): QueryTotalDelegationByValidatorForDenomRequest {
    const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: QueryTotalDelegationByValidatorForDenomRequestSDKType): QueryTotalDelegationByValidatorForDenomRequest {
    return {
      denom: object?.denom
    };
  },

  toSDK(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: QueryTotalDelegationByValidatorForDenomRequestAmino): QueryTotalDelegationByValidatorForDenomRequest {
    return {
      denom: object.denom
    };
  },

  toAmino(message: QueryTotalDelegationByValidatorForDenomRequest): QueryTotalDelegationByValidatorForDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseQueryTotalDelegationByValidatorForDenomResponse(): QueryTotalDelegationByValidatorForDenomResponse {
  return {
    assets: []
  };
}

export const QueryTotalDelegationByValidatorForDenomResponse = {
  encode(message: QueryTotalDelegationByValidatorForDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Delegations.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByValidatorForDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(Delegations.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByValidatorForDenomResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Delegations.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryTotalDelegationByValidatorForDenomResponse): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Delegations.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalDelegationByValidatorForDenomResponse>): QueryTotalDelegationByValidatorForDenomResponse {
    const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
    message.assets = object.assets?.map(e => Delegations.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: QueryTotalDelegationByValidatorForDenomResponseSDKType): QueryTotalDelegationByValidatorForDenomResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Delegations.fromSDK(e)) : []
    };
  },

  toSDK(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseSDKType {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Delegations.toSDK(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromAmino(object: QueryTotalDelegationByValidatorForDenomResponseAmino): QueryTotalDelegationByValidatorForDenomResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Delegations.fromAmino(e)) : []
    };
  },

  toAmino(message: QueryTotalDelegationByValidatorForDenomResponse): QueryTotalDelegationByValidatorForDenomResponseAmino {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Delegations.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  }

};

function createBaseDelegations(): Delegations {
  return {
    valAddr: "",
    amountSfsd: "",
    osmoEquivalent: ""
  };
}

export const Delegations = {
  encode(message: Delegations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valAddr !== "") {
      writer.uint32(10).string(message.valAddr);
    }

    if (message.amountSfsd !== "") {
      writer.uint32(18).string(message.amountSfsd);
    }

    if (message.osmoEquivalent !== "") {
      writer.uint32(26).string(message.osmoEquivalent);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegations();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.valAddr = reader.string();
          break;

        case 2:
          message.amountSfsd = reader.string();
          break;

        case 3:
          message.osmoEquivalent = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Delegations {
    return {
      valAddr: isSet(object.valAddr) ? String(object.valAddr) : "",
      amountSfsd: isSet(object.amountSfsd) ? String(object.amountSfsd) : "",
      osmoEquivalent: isSet(object.osmoEquivalent) ? String(object.osmoEquivalent) : ""
    };
  },

  toJSON(message: Delegations): unknown {
    const obj: any = {};
    message.valAddr !== undefined && (obj.valAddr = message.valAddr);
    message.amountSfsd !== undefined && (obj.amountSfsd = message.amountSfsd);
    message.osmoEquivalent !== undefined && (obj.osmoEquivalent = message.osmoEquivalent);
    return obj;
  },

  fromPartial(object: DeepPartial<Delegations>): Delegations {
    const message = createBaseDelegations();
    message.valAddr = object.valAddr ?? "";
    message.amountSfsd = object.amountSfsd ?? "";
    message.osmoEquivalent = object.osmoEquivalent ?? "";
    return message;
  },

  fromSDK(object: DelegationsSDKType): Delegations {
    return {
      valAddr: object?.val_addr,
      amountSfsd: object?.amount_sfsd,
      osmoEquivalent: object?.osmo_equivalent
    };
  },

  toSDK(message: Delegations): DelegationsSDKType {
    const obj: any = {};
    obj.val_addr = message.valAddr;
    obj.amount_sfsd = message.amountSfsd;
    obj.osmo_equivalent = message.osmoEquivalent;
    return obj;
  },

  fromAmino(object: DelegationsAmino): Delegations {
    return {
      valAddr: object.val_addr,
      amountSfsd: object.amount_sfsd,
      osmoEquivalent: object.osmo_equivalent
    };
  },

  toAmino(message: Delegations): DelegationsAmino {
    const obj: any = {};
    obj.val_addr = message.valAddr;
    obj.amount_sfsd = message.amountSfsd;
    obj.osmo_equivalent = message.osmoEquivalent;
    return obj;
  }

};

function createBaseTotalSuperfluidDelegationsRequest(): TotalSuperfluidDelegationsRequest {
  return {};
}

export const TotalSuperfluidDelegationsRequest = {
  encode(_: TotalSuperfluidDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsRequest();

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

  fromJSON(_: any): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toJSON(_: TotalSuperfluidDelegationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<TotalSuperfluidDelegationsRequest>): TotalSuperfluidDelegationsRequest {
    const message = createBaseTotalSuperfluidDelegationsRequest();
    return message;
  },

  fromSDK(_: TotalSuperfluidDelegationsRequestSDKType): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toSDK(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: TotalSuperfluidDelegationsRequestAmino): TotalSuperfluidDelegationsRequest {
    return {};
  },

  toAmino(_: TotalSuperfluidDelegationsRequest): TotalSuperfluidDelegationsRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseTotalSuperfluidDelegationsResponse(): TotalSuperfluidDelegationsResponse {
  return {
    totalDelegations: ""
  };
}

export const TotalSuperfluidDelegationsResponse = {
  encode(message: TotalSuperfluidDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalDelegations !== "") {
      writer.uint32(10).string(message.totalDelegations);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalSuperfluidDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSuperfluidDelegationsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalDelegations = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: isSet(object.totalDelegations) ? String(object.totalDelegations) : ""
    };
  },

  toJSON(message: TotalSuperfluidDelegationsResponse): unknown {
    const obj: any = {};
    message.totalDelegations !== undefined && (obj.totalDelegations = message.totalDelegations);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalSuperfluidDelegationsResponse>): TotalSuperfluidDelegationsResponse {
    const message = createBaseTotalSuperfluidDelegationsResponse();
    message.totalDelegations = object.totalDelegations ?? "";
    return message;
  },

  fromSDK(object: TotalSuperfluidDelegationsResponseSDKType): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: object?.total_delegations
    };
  },

  toSDK(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseSDKType {
    const obj: any = {};
    obj.total_delegations = message.totalDelegations;
    return obj;
  },

  fromAmino(object: TotalSuperfluidDelegationsResponseAmino): TotalSuperfluidDelegationsResponse {
    return {
      totalDelegations: object.total_delegations
    };
  },

  toAmino(message: TotalSuperfluidDelegationsResponse): TotalSuperfluidDelegationsResponseAmino {
    const obj: any = {};
    obj.total_delegations = message.totalDelegations;
    return obj;
  }

};

function createBaseSuperfluidDelegationAmountRequest(): SuperfluidDelegationAmountRequest {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    denom: ""
  };
}

export const SuperfluidDelegationAmountRequest = {
  encode(message: SuperfluidDelegationAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidDelegationAmountRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationAmountRequest>): SuperfluidDelegationAmountRequest {
    const message = createBaseSuperfluidDelegationAmountRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: SuperfluidDelegationAmountRequestSDKType): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address,
      denom: object?.denom
    };
  },

  toSDK(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: SuperfluidDelegationAmountRequestAmino): SuperfluidDelegationAmountRequest {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      denom: object.denom
    };
  },

  toAmino(message: SuperfluidDelegationAmountRequest): SuperfluidDelegationAmountRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseSuperfluidDelegationAmountResponse(): SuperfluidDelegationAmountResponse {
  return {
    amount: []
  };
}

export const SuperfluidDelegationAmountResponse = {
  encode(message: SuperfluidDelegationAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationAmountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidDelegationAmountResponse): unknown {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationAmountResponse>): SuperfluidDelegationAmountResponse {
    const message = createBaseSuperfluidDelegationAmountResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: SuperfluidDelegationAmountResponseSDKType): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseSDKType {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromAmino(object: SuperfluidDelegationAmountResponseAmino): SuperfluidDelegationAmountResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidDelegationAmountResponse): SuperfluidDelegationAmountResponseAmino {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseSuperfluidDelegationsByDelegatorRequest(): SuperfluidDelegationsByDelegatorRequest {
  return {
    delegatorAddress: ""
  };
}

export const SuperfluidDelegationsByDelegatorRequest = {
  encode(message: SuperfluidDelegationsByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },

  toJSON(message: SuperfluidDelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationsByDelegatorRequest>): SuperfluidDelegationsByDelegatorRequest {
    const message = createBaseSuperfluidDelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },

  fromSDK(object: SuperfluidDelegationsByDelegatorRequestSDKType): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: object?.delegator_address
    };
  },

  toSDK(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },

  fromAmino(object: SuperfluidDelegationsByDelegatorRequestAmino): SuperfluidDelegationsByDelegatorRequest {
    return {
      delegatorAddress: object.delegator_address
    };
  },

  toAmino(message: SuperfluidDelegationsByDelegatorRequest): SuperfluidDelegationsByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  }

};

function createBaseSuperfluidDelegationsByDelegatorResponse(): SuperfluidDelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}

export const SuperfluidDelegationsByDelegatorResponse = {
  encode(message: SuperfluidDelegationsByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      totalEquivalentStakedAmount: isSet(object.totalEquivalentStakedAmount) ? Coin.fromJSON(object.totalEquivalentStakedAmount) : undefined
    };
  },

  toJSON(message: SuperfluidDelegationsByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount ? Coin.toJSON(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationsByDelegatorResponse>): SuperfluidDelegationsByDelegatorResponse {
    const message = createBaseSuperfluidDelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  },

  fromSDK(object: SuperfluidDelegationsByDelegatorResponseSDKType): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      totalEquivalentStakedAmount: object.total_equivalent_staked_amount ? Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
    };
  },

  toSDK(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toSDK(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromAmino(object: SuperfluidDelegationsByDelegatorResponseAmino): SuperfluidDelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      totalEquivalentStakedAmount: object?.total_equivalent_staked_amount ? Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
    };
  },

  toAmino(message: SuperfluidDelegationsByDelegatorResponse): SuperfluidDelegationsByDelegatorResponseAmino {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toAmino(message.totalEquivalentStakedAmount) : undefined;
    return obj;
  }

};

function createBaseSuperfluidUndelegationsByDelegatorRequest(): SuperfluidUndelegationsByDelegatorRequest {
  return {
    delegatorAddress: "",
    denom: ""
  };
}

export const SuperfluidUndelegationsByDelegatorRequest = {
  encode(message: SuperfluidUndelegationsByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidUndelegationsByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidUndelegationsByDelegatorRequest>): SuperfluidUndelegationsByDelegatorRequest {
    const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: SuperfluidUndelegationsByDelegatorRequestSDKType): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: object?.delegator_address,
      denom: object?.denom
    };
  },

  toSDK(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: SuperfluidUndelegationsByDelegatorRequestAmino): SuperfluidUndelegationsByDelegatorRequest {
    return {
      delegatorAddress: object.delegator_address,
      denom: object.denom
    };
  },

  toAmino(message: SuperfluidUndelegationsByDelegatorRequest): SuperfluidUndelegationsByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseSuperfluidUndelegationsByDelegatorResponse(): SuperfluidUndelegationsByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    totalUndelegatedCoins: [],
    syntheticLocks: []
  };
}

export const SuperfluidUndelegationsByDelegatorResponse = {
  encode(message: SuperfluidUndelegationsByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.totalUndelegatedCoins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.syntheticLocks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidUndelegationsByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.totalUndelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.syntheticLocks.push(SyntheticLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.totalUndelegatedCoins) ? object.totalUndelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      syntheticLocks: Array.isArray(object?.syntheticLocks) ? object.syntheticLocks.map((e: any) => SyntheticLock.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidUndelegationsByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.totalUndelegatedCoins) {
      obj.totalUndelegatedCoins = message.totalUndelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalUndelegatedCoins = [];
    }

    if (message.syntheticLocks) {
      obj.syntheticLocks = message.syntheticLocks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.syntheticLocks = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidUndelegationsByDelegatorResponse>): SuperfluidUndelegationsByDelegatorResponse {
    const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.totalUndelegatedCoins = object.totalUndelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.syntheticLocks = object.syntheticLocks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: SuperfluidUndelegationsByDelegatorResponseSDKType): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromSDK(e)) : []
    };
  },

  toSDK(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalUndelegatedCoins) {
      obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_undelegated_coins = [];
    }

    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }

    return obj;
  },

  fromAmino(object: SuperfluidUndelegationsByDelegatorResponseAmino): SuperfluidUndelegationsByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      totalUndelegatedCoins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      syntheticLocks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidUndelegationsByDelegatorResponse): SuperfluidUndelegationsByDelegatorResponseAmino {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.totalUndelegatedCoins) {
      obj.total_undelegated_coins = message.totalUndelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_undelegated_coins = [];
    }

    if (message.syntheticLocks) {
      obj.synthetic_locks = message.syntheticLocks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }

    return obj;
  }

};

function createBaseSuperfluidDelegationsByValidatorDenomRequest(): SuperfluidDelegationsByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: ""
  };
}

export const SuperfluidDelegationsByValidatorDenomRequest = {
  encode(message: SuperfluidDelegationsByValidatorDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: SuperfluidDelegationsByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>): SuperfluidDelegationsByValidatorDenomRequest {
    const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: SuperfluidDelegationsByValidatorDenomRequestSDKType): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: object?.validator_address,
      denom: object?.denom
    };
  },

  toSDK(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: SuperfluidDelegationsByValidatorDenomRequestAmino): SuperfluidDelegationsByValidatorDenomRequest {
    return {
      validatorAddress: object.validator_address,
      denom: object.denom
    };
  },

  toAmino(message: SuperfluidDelegationsByValidatorDenomRequest): SuperfluidDelegationsByValidatorDenomRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseSuperfluidDelegationsByValidatorDenomResponse(): SuperfluidDelegationsByValidatorDenomResponse {
  return {
    superfluidDelegationRecords: []
  };
}

export const SuperfluidDelegationsByValidatorDenomResponse = {
  encode(message: SuperfluidDelegationsByValidatorDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuperfluidDelegationsByValidatorDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: SuperfluidDelegationsByValidatorDenomResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<SuperfluidDelegationsByValidatorDenomResponse>): SuperfluidDelegationsByValidatorDenomResponse {
    const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: SuperfluidDelegationsByValidatorDenomResponseSDKType): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : []
    };
  },

  toSDK(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    return obj;
  },

  fromAmino(object: SuperfluidDelegationsByValidatorDenomResponseAmino): SuperfluidDelegationsByValidatorDenomResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : []
    };
  },

  toAmino(message: SuperfluidDelegationsByValidatorDenomResponse): SuperfluidDelegationsByValidatorDenomResponseAmino {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    return obj;
  }

};

function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest(): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
  return {
    validatorAddress: "",
    denom: ""
  };
}

export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
  encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.denom = object.denom ?? "";
    return message;
  },

  fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: object?.validator_address,
      denom: object?.denom
    };
  },

  toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  },

  fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest {
    return {
      validatorAddress: object.validator_address,
      denom: object.denom
    };
  },

  toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.denom = message.denom;
    return obj;
  }

};

function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse(): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
  return {
    totalDelegatedCoins: []
  };
}

export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
  encode(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown {
    const obj: any = {};

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType {
    const obj: any = {};

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    return obj;
  },

  fromAmino(object: EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse {
    return {
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino {
    const obj: any = {};

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    return obj;
  }

};

function createBaseQueryTotalDelegationByDelegatorRequest(): QueryTotalDelegationByDelegatorRequest {
  return {
    delegatorAddress: ""
  };
}

export const QueryTotalDelegationByDelegatorRequest = {
  encode(message: QueryTotalDelegationByDelegatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
    };
  },

  toJSON(message: QueryTotalDelegationByDelegatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalDelegationByDelegatorRequest>): QueryTotalDelegationByDelegatorRequest {
    const message = createBaseQueryTotalDelegationByDelegatorRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },

  fromSDK(object: QueryTotalDelegationByDelegatorRequestSDKType): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: object?.delegator_address
    };
  },

  toSDK(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },

  fromAmino(object: QueryTotalDelegationByDelegatorRequestAmino): QueryTotalDelegationByDelegatorRequest {
    return {
      delegatorAddress: object.delegator_address
    };
  },

  toAmino(message: QueryTotalDelegationByDelegatorRequest): QueryTotalDelegationByDelegatorRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  }

};

function createBaseQueryTotalDelegationByDelegatorResponse(): QueryTotalDelegationByDelegatorResponse {
  return {
    superfluidDelegationRecords: [],
    delegationResponse: [],
    totalDelegatedCoins: [],
    totalEquivalentStakedAmount: undefined
  };
}

export const QueryTotalDelegationByDelegatorResponse = {
  encode(message: QueryTotalDelegationByDelegatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.superfluidDelegationRecords) {
      SuperfluidDelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.delegationResponse) {
      DelegationResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.totalDelegatedCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.totalEquivalentStakedAmount !== undefined) {
      Coin.encode(message.totalEquivalentStakedAmount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDelegationByDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalDelegationByDelegatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.superfluidDelegationRecords.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.delegationResponse.push(DelegationResponse.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalDelegatedCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.totalEquivalentStakedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluidDelegationRecords) ? object.superfluidDelegationRecords.map((e: any) => SuperfluidDelegationRecord.fromJSON(e)) : [],
      delegationResponse: Array.isArray(object?.delegationResponse) ? object.delegationResponse.map((e: any) => DelegationResponse.fromJSON(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.totalDelegatedCoins) ? object.totalDelegatedCoins.map((e: any) => Coin.fromJSON(e)) : [],
      totalEquivalentStakedAmount: isSet(object.totalEquivalentStakedAmount) ? Coin.fromJSON(object.totalEquivalentStakedAmount) : undefined
    };
  },

  toJSON(message: QueryTotalDelegationByDelegatorResponse): unknown {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluidDelegationRecords = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
    } else {
      obj.superfluidDelegationRecords = [];
    }

    if (message.delegationResponse) {
      obj.delegationResponse = message.delegationResponse.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponse = [];
    }

    if (message.totalDelegatedCoins) {
      obj.totalDelegatedCoins = message.totalDelegatedCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDelegatedCoins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.totalEquivalentStakedAmount = message.totalEquivalentStakedAmount ? Coin.toJSON(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalDelegationByDelegatorResponse>): QueryTotalDelegationByDelegatorResponse {
    const message = createBaseQueryTotalDelegationByDelegatorResponse();
    message.superfluidDelegationRecords = object.superfluidDelegationRecords?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
    message.delegationResponse = object.delegationResponse?.map(e => DelegationResponse.fromPartial(e)) || [];
    message.totalDelegatedCoins = object.totalDelegatedCoins?.map(e => Coin.fromPartial(e)) || [];
    message.totalEquivalentStakedAmount = object.totalEquivalentStakedAmount !== undefined && object.totalEquivalentStakedAmount !== null ? Coin.fromPartial(object.totalEquivalentStakedAmount) : undefined;
    return message;
  },

  fromSDK(object: QueryTotalDelegationByDelegatorResponseSDKType): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromSDK(e)) : [],
      delegationResponse: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e: any) => DelegationResponse.fromSDK(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromSDK(e)) : [],
      totalEquivalentStakedAmount: object.total_equivalent_staked_amount ? Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
    };
  },

  toSDK(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseSDKType {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.delegationResponse) {
      obj.delegation_response = message.delegationResponse.map(e => e ? DelegationResponse.toSDK(e) : undefined);
    } else {
      obj.delegation_response = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    message.totalEquivalentStakedAmount !== undefined && (obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toSDK(message.totalEquivalentStakedAmount) : undefined);
    return obj;
  },

  fromAmino(object: QueryTotalDelegationByDelegatorResponseAmino): QueryTotalDelegationByDelegatorResponse {
    return {
      superfluidDelegationRecords: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e: any) => SuperfluidDelegationRecord.fromAmino(e)) : [],
      delegationResponse: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e: any) => DelegationResponse.fromAmino(e)) : [],
      totalDelegatedCoins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e: any) => Coin.fromAmino(e)) : [],
      totalEquivalentStakedAmount: object?.total_equivalent_staked_amount ? Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
    };
  },

  toAmino(message: QueryTotalDelegationByDelegatorResponse): QueryTotalDelegationByDelegatorResponseAmino {
    const obj: any = {};

    if (message.superfluidDelegationRecords) {
      obj.superfluid_delegation_records = message.superfluidDelegationRecords.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
    } else {
      obj.superfluid_delegation_records = [];
    }

    if (message.delegationResponse) {
      obj.delegation_response = message.delegationResponse.map(e => e ? DelegationResponse.toAmino(e) : undefined);
    } else {
      obj.delegation_response = [];
    }

    if (message.totalDelegatedCoins) {
      obj.total_delegated_coins = message.totalDelegatedCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_delegated_coins = [];
    }

    obj.total_equivalent_staked_amount = message.totalEquivalentStakedAmount ? Coin.toAmino(message.totalEquivalentStakedAmount) : undefined;
    return obj;
  }

};

function createBaseQueryUnpoolWhitelistRequest(): QueryUnpoolWhitelistRequest {
  return {};
}

export const QueryUnpoolWhitelistRequest = {
  encode(_: QueryUnpoolWhitelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistRequest();

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

  fromJSON(_: any): QueryUnpoolWhitelistRequest {
    return {};
  },

  toJSON(_: QueryUnpoolWhitelistRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryUnpoolWhitelistRequest>): QueryUnpoolWhitelistRequest {
    const message = createBaseQueryUnpoolWhitelistRequest();
    return message;
  },

  fromSDK(_: QueryUnpoolWhitelistRequestSDKType): QueryUnpoolWhitelistRequest {
    return {};
  },

  toSDK(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: QueryUnpoolWhitelistRequestAmino): QueryUnpoolWhitelistRequest {
    return {};
  },

  toAmino(_: QueryUnpoolWhitelistRequest): QueryUnpoolWhitelistRequestAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseQueryUnpoolWhitelistResponse(): QueryUnpoolWhitelistResponse {
  return {
    poolIds: []
  };
}

export const QueryUnpoolWhitelistResponse = {
  encode(message: QueryUnpoolWhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.poolIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnpoolWhitelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnpoolWhitelistResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.poolIds.push((reader.uint64() as Long));
            }
          } else {
            message.poolIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUnpoolWhitelistResponse {
    return {
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: QueryUnpoolWhitelistResponse): unknown {
    const obj: any = {};

    if (message.poolIds) {
      obj.poolIds = message.poolIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.poolIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryUnpoolWhitelistResponse>): QueryUnpoolWhitelistResponse {
    const message = createBaseQueryUnpoolWhitelistResponse();
    message.poolIds = object.poolIds?.map(e => Long.fromValue(e)) || [];
    return message;
  },

  fromSDK(object: QueryUnpoolWhitelistResponseSDKType): QueryUnpoolWhitelistResponse {
    return {
      poolIds: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e: any) => e) : []
    };
  },

  toSDK(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseSDKType {
    const obj: any = {};

    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e);
    } else {
      obj.pool_ids = [];
    }

    return obj;
  },

  fromAmino(object: QueryUnpoolWhitelistResponseAmino): QueryUnpoolWhitelistResponse {
    return {
      poolIds: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e: any) => e) : []
    };
  },

  toAmino(message: QueryUnpoolWhitelistResponse): QueryUnpoolWhitelistResponseAmino {
    const obj: any = {};

    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e);
    } else {
      obj.pool_ids = [];
    }

    return obj;
  }

};