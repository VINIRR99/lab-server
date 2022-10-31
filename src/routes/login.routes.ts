import { Router, Request, Response } from "express";

const loginRouter = Router();

loginRouter.get('/', (req: Request, res: Response): void => {res.sendFile(process.cwd() + '/views/login.html')});

export { loginRouter };