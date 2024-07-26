import { Router } from "express";
import { BODY, PARAMS, QUERY } from "../constants/typeDataReq";
import { createUser } from "../controllers/users/createUser";
import { deleteUser } from "../controllers/users/deleteUser";
import { getUserById } from "../controllers/users/getUserById";
import { getUsers } from "../controllers/users/getUsers";
import { updateUser } from "../controllers/users/updateUser";
import { validateData } from "../middlewares/validateData";

import { schemaCreateUser } from "../zod-schemas/users/createUser";
import { schemaGetUsers } from "../zod-schemas/users/getUsers";
import { schemaUpdateUser } from "../zod-schemas/users/updateUser";
import { schemaUuid } from "../zod-schemas/uuid";

export const usersRouter = Router();

const validateDataUpdateUser = [
  validateData(schemaUpdateUser, BODY),
  validateData(schemaUuid, PARAMS),
];

usersRouter.get("/api/", validateData(schemaGetUsers, QUERY), getUsers);
usersRouter.get("/api/:id", validateData(schemaUuid, PARAMS), getUserById);
usersRouter.post("/api/", validateData(schemaCreateUser), createUser);
usersRouter.patch("/api/:id", validateDataUpdateUser, updateUser);
usersRouter.delete("/api/:id", validateData(schemaUuid, PARAMS), deleteUser);
