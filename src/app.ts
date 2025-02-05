import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { usersRouter } from "./routes/users";

dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
