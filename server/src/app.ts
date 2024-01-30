import "dotenv/config";
import express, { Application, Request, Response } from "express";

export const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});
