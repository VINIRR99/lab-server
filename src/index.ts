import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();
app.use(express.static('public'));

app.get('/', (req: Request, res: Response): void => {res.sendFile(process.cwd() + '/views/home.html')});

app.listen(process.env.PORT, (): void => {console.log(`App is listening on port ${process.env.PORT}`)});