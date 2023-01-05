import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import pool from "./db";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors())


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get("/test", async (req: Request, res: Response) => {
  const [rows, fields] = await pool.execute("select * from student");
  res.json({rows});
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});