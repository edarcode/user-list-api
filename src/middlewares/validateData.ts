import { ZodSchema } from "zod";
import { Next, ReqQueryUsers, Res, TypeDataReq } from "../../types/types";
import { BODY, QUERY } from "../constants/typeDataReq";

export const validateData = (
  schema: ZodSchema,
  typeDataReq: TypeDataReq = BODY
) => {
  const fn = (req: ReqQueryUsers, res: Res, next: Next) => {
    try {
      const dataParsed = schema.parse(req[typeDataReq]);
      if (typeDataReq === QUERY) {
        req.queryParsed = dataParsed;
      }
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };

  return fn;
};
