import "dotenv/config";
import express from "express";
import { homeRouter } from "./routes/home.routes";
import { loginRouter } from "./routes/login.routes";

const app = express();
app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/login', loginRouter);

app.listen(process.env.PORT, (): void => {console.log(`App is listening on port ${process.env.PORT}`)});