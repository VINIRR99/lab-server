import { Router, Request, Response } from "express";

const homeRouter = Router();

homeRouter.get('/', (req: Request, res: Response): void => {res.sendFile(process.cwd() + '/views/home.html')});

export { homeRouter };