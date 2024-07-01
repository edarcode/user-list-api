import { ReqQueryUsers, Res } from "../../../types/types";
import { getUsersDb } from "../../db/user/getUsersDb";

export const getUsers = async (req: ReqQueryUsers, res: Res) => {
  try {
    const users = await getUsersDb(req.queryParsed);
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};
