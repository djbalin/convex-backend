/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as actions_longRunning from "../actions/longRunning.js";
import type * as checkUrl from "../checkUrl.js";
import type * as getMessagesByAuthor from "../getMessagesByAuthor.js";
import type * as http from "../http.js";
import type * as listMessages from "../listMessages.js";
import type * as sendMessage from "../sendMessage.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "actions/longRunning": typeof actions_longRunning;
  checkUrl: typeof checkUrl;
  getMessagesByAuthor: typeof getMessagesByAuthor;
  http: typeof http;
  listMessages: typeof listMessages;
  sendMessage: typeof sendMessage;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
