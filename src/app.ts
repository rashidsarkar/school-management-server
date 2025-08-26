import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("School Management Server is running");
});

app.use("/api/v1", router);

export default app;
