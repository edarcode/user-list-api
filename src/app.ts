import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Res } from "../types/types";
import { usersRouter } from "./routes/users";

dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (_req, res: Res) => res.json("asdfasdf"));
app.use("/api/users", usersRouter);
