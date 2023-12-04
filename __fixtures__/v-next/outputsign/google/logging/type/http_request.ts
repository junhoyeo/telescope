import { Duration, DurationAmino, DurationSDKType } from "../../protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export const protobufPackage = "google.logging.type";
/**
 * A common proto for logging HTTP requests. Only contains semantics
 * defined by the HTTP specification. Product-specific logging
 * information MUST be defined in a separate message.
 */
export interface HttpRequest {
  /** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
  requestMethod: string;
  /**
   * The scheme (http, https), the host name, the path and the query
   * portion of the URL that was requested.
   * Example: `"http://example.com/some/info?color=red"`.
   */
  requestUrl: string;
  /**
   * The size of the HTTP request message in bytes, including the request
   * headers and the request body.
   */
  requestSize: bigint;
  /**
   * The response code indicating the status of response.
   * Examples: 200, 404.
   */
  status: number;
  /**
   * The size of the HTTP response message sent back to the client, in bytes,
   * including the response headers and the response body.
   */
  responseSize: bigint;
  /**
   * The user agent sent by the client. Example:
   * `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET
   * CLR 1.0.3705)"`.
   */
  userAgent: string;
  /**
   * The IP address (IPv4 or IPv6) of the client that issued the HTTP
   * request. This field can include port information. Examples:
   * `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.
   */
  remoteIp: string;
  /**
   * The IP address (IPv4 or IPv6) of the origin server that the request was
   * sent to. This field can include port information. Examples:
   * `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.
   */
  serverIp: string;
  /**
   * The referer URL of the request, as defined in
   * [HTTP/1.1 Header Field
   * Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   */
  referer: string;
  /**
   * The request processing latency on the server, from the time the request was
   * received until the response was sent.
   */
  latency?: Duration;
  /** Whether or not a cache lookup was attempted. */
  cacheLookup: boolean;
  /**
   * Whether or not an entity was served from cache
   * (with or without validation).
   */
  cacheHit: boolean;
  /**
   * Whether or not the response was validated with the origin server before
   * being served from cache. This field is only meaningful if `cache_hit` is
   * True.
   */
  cacheValidatedWithOriginServer: boolean;
  /**
   * The number of HTTP response bytes inserted into cache. Set only when a
   * cache fill was attempted.
   */
  cacheFillBytes: bigint;
  /** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
  protocol: string;
}
export interface HttpRequestProtoMsg {
  typeUrl: "/google.logging.type.HttpRequest";
  value: Uint8Array;
}
/**
 * A common proto for logging HTTP requests. Only contains semantics
 * defined by the HTTP specification. Product-specific logging
 * information MUST be defined in a separate message.
 */
export interface HttpRequestAmino {
  /** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
  request_method: string;
  /**
   * The scheme (http, https), the host name, the path and the query
   * portion of the URL that was requested.
   * Example: `"http://example.com/some/info?color=red"`.
   */
  request_url: string;
  /**
   * The size of the HTTP request message in bytes, including the request
   * headers and the request body.
   */
  request_size: string;
  /**
   * The response code indicating the status of response.
   * Examples: 200, 404.
   */
  status: number;
  /**
   * The size of the HTTP response message sent back to the client, in bytes,
   * including the response headers and the response body.
   */
  response_size: string;
  /**
   * The user agent sent by the client. Example:
   * `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET
   * CLR 1.0.3705)"`.
   */
  user_agent: string;
  /**
   * The IP address (IPv4 or IPv6) of the client that issued the HTTP
   * request. This field can include port information. Examples:
   * `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.
   */
  remote_ip: string;
  /**
   * The IP address (IPv4 or IPv6) of the origin server that the request was
   * sent to. This field can include port information. Examples:
   * `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.
   */
  server_ip: string;
  /**
   * The referer URL of the request, as defined in
   * [HTTP/1.1 Header Field
   * Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   */
  referer: string;
  /**
   * The request processing latency on the server, from the time the request was
   * received until the response was sent.
   */
  latency?: DurationAmino;
  /** Whether or not a cache lookup was attempted. */
  cache_lookup: boolean;
  /**
   * Whether or not an entity was served from cache
   * (with or without validation).
   */
  cache_hit: boolean;
  /**
   * Whether or not the response was validated with the origin server before
   * being served from cache. This field is only meaningful if `cache_hit` is
   * True.
   */
  cache_validated_with_origin_server: boolean;
  /**
   * The number of HTTP response bytes inserted into cache. Set only when a
   * cache fill was attempted.
   */
  cache_fill_bytes: string;
  /** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
  protocol: string;
}
export interface HttpRequestAminoMsg {
  type: "/google.logging.type.HttpRequest";
  value: HttpRequestAmino;
}
/**
 * A common proto for logging HTTP requests. Only contains semantics
 * defined by the HTTP specification. Product-specific logging
 * information MUST be defined in a separate message.
 */
export interface HttpRequestSDKType {
  request_method: string;
  request_url: string;
  request_size: bigint;
  status: number;
  response_size: bigint;
  user_agent: string;
  remote_ip: string;
  server_ip: string;
  referer: string;
  latency?: DurationSDKType;
  cache_lookup: boolean;
  cache_hit: boolean;
  cache_validated_with_origin_server: boolean;
  cache_fill_bytes: bigint;
  protocol: string;
}
function createBaseHttpRequest(): HttpRequest {
  return {
    requestMethod: "",
    requestUrl: "",
    requestSize: BigInt(0),
    status: 0,
    responseSize: BigInt(0),
    userAgent: "",
    remoteIp: "",
    serverIp: "",
    referer: "",
    latency: undefined,
    cacheLookup: false,
    cacheHit: false,
    cacheValidatedWithOriginServer: false,
    cacheFillBytes: BigInt(0),
    protocol: ""
  };
}
export const HttpRequest = {
  typeUrl: "/google.logging.type.HttpRequest",
  encode(message: HttpRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestMethod !== "") {
      writer.uint32(10).string(message.requestMethod);
    }
    if (message.requestUrl !== "") {
      writer.uint32(18).string(message.requestUrl);
    }
    if (message.requestSize !== BigInt(0)) {
      writer.uint32(24).int64(message.requestSize);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.responseSize !== BigInt(0)) {
      writer.uint32(40).int64(message.responseSize);
    }
    if (message.userAgent !== "") {
      writer.uint32(50).string(message.userAgent);
    }
    if (message.remoteIp !== "") {
      writer.uint32(58).string(message.remoteIp);
    }
    if (message.serverIp !== "") {
      writer.uint32(106).string(message.serverIp);
    }
    if (message.referer !== "") {
      writer.uint32(66).string(message.referer);
    }
    if (message.latency !== undefined) {
      Duration.encode(message.latency, writer.uint32(114).fork()).ldelim();
    }
    if (message.cacheLookup === true) {
      writer.uint32(88).bool(message.cacheLookup);
    }
    if (message.cacheHit === true) {
      writer.uint32(72).bool(message.cacheHit);
    }
    if (message.cacheValidatedWithOriginServer === true) {
      writer.uint32(80).bool(message.cacheValidatedWithOriginServer);
    }
    if (message.cacheFillBytes !== BigInt(0)) {
      writer.uint32(96).int64(message.cacheFillBytes);
    }
    if (message.protocol !== "") {
      writer.uint32(122).string(message.protocol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HttpRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestMethod = reader.string();
          break;
        case 2:
          message.requestUrl = reader.string();
          break;
        case 3:
          message.requestSize = reader.int64();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 5:
          message.responseSize = reader.int64();
          break;
        case 6:
          message.userAgent = reader.string();
          break;
        case 7:
          message.remoteIp = reader.string();
          break;
        case 13:
          message.serverIp = reader.string();
          break;
        case 8:
          message.referer = reader.string();
          break;
        case 14:
          message.latency = Duration.decode(reader, reader.uint32());
          break;
        case 11:
          message.cacheLookup = reader.bool();
          break;
        case 9:
          message.cacheHit = reader.bool();
          break;
        case 10:
          message.cacheValidatedWithOriginServer = reader.bool();
          break;
        case 12:
          message.cacheFillBytes = reader.int64();
          break;
        case 15:
          message.protocol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HttpRequest>): HttpRequest {
    const message = createBaseHttpRequest();
    message.requestMethod = object.requestMethod ?? "";
    message.requestUrl = object.requestUrl ?? "";
    if (object.requestSize !== undefined && object.requestSize !== null) {
      message.requestSize = BigInt(object.requestSize.toString());
    }
    message.status = object.status ?? 0;
    if (object.responseSize !== undefined && object.responseSize !== null) {
      message.responseSize = BigInt(object.responseSize.toString());
    }
    message.userAgent = object.userAgent ?? "";
    message.remoteIp = object.remoteIp ?? "";
    message.serverIp = object.serverIp ?? "";
    message.referer = object.referer ?? "";
    if (object.latency !== undefined && object.latency !== null) {
      message.latency = Duration.fromPartial(object.latency);
    }
    message.cacheLookup = object.cacheLookup ?? false;
    message.cacheHit = object.cacheHit ?? false;
    message.cacheValidatedWithOriginServer = object.cacheValidatedWithOriginServer ?? false;
    if (object.cacheFillBytes !== undefined && object.cacheFillBytes !== null) {
      message.cacheFillBytes = BigInt(object.cacheFillBytes.toString());
    }
    message.protocol = object.protocol ?? "";
    return message;
  },
  fromAmino(object: HttpRequestAmino): HttpRequest {
    return {
      requestMethod: object.request_method,
      requestUrl: object.request_url,
      requestSize: BigInt(object.request_size),
      status: object.status,
      responseSize: BigInt(object.response_size),
      userAgent: object.user_agent,
      remoteIp: object.remote_ip,
      serverIp: object.server_ip,
      referer: object.referer,
      latency: object?.latency ? Duration.fromAmino(object.latency) : undefined,
      cacheLookup: object.cache_lookup,
      cacheHit: object.cache_hit,
      cacheValidatedWithOriginServer: object.cache_validated_with_origin_server,
      cacheFillBytes: BigInt(object.cache_fill_bytes),
      protocol: object.protocol
    };
  },
  toAmino(message: HttpRequest): HttpRequestAmino {
    const obj: any = {};
    obj.request_method = message.requestMethod;
    obj.request_url = message.requestUrl;
    obj.request_size = message.requestSize ? message.requestSize.toString() : undefined;
    obj.status = message.status;
    obj.response_size = message.responseSize ? message.responseSize.toString() : undefined;
    obj.user_agent = message.userAgent;
    obj.remote_ip = message.remoteIp;
    obj.server_ip = message.serverIp;
    obj.referer = message.referer;
    obj.latency = message.latency ? Duration.toAmino(message.latency) : undefined;
    obj.cache_lookup = message.cacheLookup;
    obj.cache_hit = message.cacheHit;
    obj.cache_validated_with_origin_server = message.cacheValidatedWithOriginServer;
    obj.cache_fill_bytes = message.cacheFillBytes ? message.cacheFillBytes.toString() : undefined;
    obj.protocol = message.protocol;
    return obj;
  },
  fromAminoMsg(object: HttpRequestAminoMsg): HttpRequest {
    return HttpRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: HttpRequestProtoMsg): HttpRequest {
    return HttpRequest.decode(message.value);
  },
  toProto(message: HttpRequest): Uint8Array {
    return HttpRequest.encode(message).finish();
  },
  toProtoMsg(message: HttpRequest): HttpRequestProtoMsg {
    return {
      typeUrl: "/google.logging.type.HttpRequest",
      value: HttpRequest.encode(message).finish()
    };
  }
};