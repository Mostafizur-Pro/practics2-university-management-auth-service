import { Application, Response, Request } from "express";
import express from "express";
import cors from "cors";

const app: Application = express();

// middleware
app.use(cors());

// perser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
