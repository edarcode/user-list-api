import { NextFunction, Request, Response } from "express";

export type Req = Request;
export type Res = Response;
export type Next = NextFunction;
export type Uuid = `${string}-${string}-${string}-${string}-${string}`;
export type CreateUser = {
  name: string;
  username: string;
  state: boolean;
  role: string;
};
export type UpdateUser = Partial<CreateUser>;

export type OrderUserBy = "name" | "role" | "state";

export interface ReqQueryUsers extends Req {
  queryParsed?: QueryParsedUsers;
}

export type QueryParsedUsers = {
  page?: number;
  take?: number;
  name?: string;
  username?: string;
  state?: boolean;
  role?: string;
  order?: OrderUserBy;
};

export type TypeDataReq = "body" | "query" | "params";

export type ReqQuery = QueryString.ParsedQs;
