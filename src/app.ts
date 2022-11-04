import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import * as home from "./routes/home.routes";
import * as login from "./routes/login.routes";
import * as logout from "./routes/logout.routes";
import * as auth from "./middlewares/auth.middlewares";
import * as exclusive from "./routes/exclusive.routes";

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sfgf'] }));

app.use('/', home.router);
app.use('/login', login.router);
app.use('/logout', logout.router);

app.use(auth.middleware);

app.use('/protected', exclusive.router);

app.listen(process.env.PORT, (): void => {console.log(`App is listening on port ${process.env.PORT}`)});