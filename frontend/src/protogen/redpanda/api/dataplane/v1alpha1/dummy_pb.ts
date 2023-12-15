// This file is a trick to force protoc-gen-openapiv2 into including the types used here into the openapi spec. They are not normally included, because they are not explicitly referenced in any proto (as protobuf ANY is used in errordetails).

// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension="
// @generated from file redpanda/api/dataplane/v1alpha1/dummy.proto (package redpanda.api.dataplane.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BadRequest, ErrorInfo, Help, QuotaFailure } from "../../../../google/rpc/error_details_pb";

/**
 * @generated from message redpanda.api.dataplane.v1alpha1.DummyMethodResponse
 */
export class DummyMethodResponse extends Message<DummyMethodResponse> {
  /**
   * @generated from field: google.rpc.BadRequest bad_request = 1;
   */
  badRequest?: BadRequest;

  /**
   * @generated from field: google.rpc.ErrorInfo error_info = 2;
   */
  errorInfo?: ErrorInfo;

  /**
   * @generated from field: google.rpc.QuotaFailure quota_failure = 3;
   */
  quotaFailure?: QuotaFailure;

  /**
   * @generated from field: google.rpc.Help help = 4;
   */
  help?: Help;

  constructor(data?: PartialMessage<DummyMethodResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "redpanda.api.dataplane.v1alpha1.DummyMethodResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bad_request", kind: "message", T: BadRequest },
    { no: 2, name: "error_info", kind: "message", T: ErrorInfo },
    { no: 3, name: "quota_failure", kind: "message", T: QuotaFailure },
    { no: 4, name: "help", kind: "message", T: Help },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DummyMethodResponse {
    return new DummyMethodResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DummyMethodResponse {
    return new DummyMethodResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DummyMethodResponse {
    return new DummyMethodResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DummyMethodResponse | PlainMessage<DummyMethodResponse> | undefined, b: DummyMethodResponse | PlainMessage<DummyMethodResponse> | undefined): boolean {
    return proto3.util.equals(DummyMethodResponse, a, b);
  }
}

