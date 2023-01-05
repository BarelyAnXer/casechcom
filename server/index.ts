import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import pool from "./db";
import cors from "cors";
import bcrypt, {hash} from "bcrypt"
import {FieldPacket, RowDataPacket} from "mysql2";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors())


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post("/register", async (req: Request, res: Response) => {
  const {firstname, password} = req.body
  await bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        res.json({err})
      }
      const [rows, fields] = await pool.execute('insert into student (firstname,lastname, password) VALUES (?, ?, ?)', [firstname,
        "test",
        hash])
      res.json({rows});
    }
  );

});

interface IUser extends RowDataPacket {
  password: string
}

app.post("/login", async (req: Request, res: Response) => {
  const {username, password} = req.body
  const [rows, fields]: [IUser[], FieldPacket[]] = await pool.execute<IUser[]>("select * from student where firstname = ?", [username])

  if (rows.length > 0) {
    bcrypt.compare(password, rows[0].password, (error, result) => {
      if (result) {
        res.json({rows});
      } else {
        res.json({err: "wrong credentials"})
      }
    })
  } else {
    res.json({err: "wrong credentials"})
  }
});

app.get("/test", async (req: Request, res: Response) => {
  const [rows, fields] = await pool.execute("select * from student");
  res.json({rows});
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});