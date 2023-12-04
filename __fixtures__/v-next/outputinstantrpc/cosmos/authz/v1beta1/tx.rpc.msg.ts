import { Grant, GrantSDKType } from "./authz";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgGrant, MsgGrantSDKType, MsgGrantResponse, MsgGrantResponseSDKType, MsgExec, MsgExecSDKType, MsgExecResponse, MsgExecResponseSDKType, MsgRevoke, MsgRevokeSDKType, MsgRevokeResponse, MsgRevokeResponseSDKType } from "./tx";
/** Msg defines the authz Msg service. */
export interface Msg {
  /**
   * Grant grants the provided authorization to the grantee on the granter's
   * account with the provided expiration time. If there is already a grant
   * for the given (granter, grantee, Authorization) triple, then the grant
   * will be overwritten.
   */
  grant(request: BroadcastTxReq<MsgGrant>): Promise<DeliverTxResponse>;
  /**
   * Exec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  exec(request: BroadcastTxReq<MsgExec>): Promise<DeliverTxResponse>;
  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter's account that has been granted to the grantee.
   */
  revoke(request: BroadcastTxReq<MsgRevoke>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Grant grants the provided authorization to the grantee on the granter's
   account with the provided expiration time. If there is already a grant
   for the given (granter, grantee, Authorization) triple, then the grant
   will be overwritten. */
  grant = async (request: BroadcastTxReq<MsgGrant>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgGrant.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Exec attempts to execute the provided messages using
   authorizations granted to the grantee. Each message should have only
   one signer corresponding to the granter of the authorization. */
  exec = async (request: BroadcastTxReq<MsgExec>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExec.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* Revoke revokes any authorization corresponding to the provided method name on the
   granter's account that has been granted to the grantee. */
  revoke = async (request: BroadcastTxReq<MsgRevoke>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRevoke.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};