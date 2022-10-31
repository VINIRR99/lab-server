import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response): void => {res.sendFile(process.cwd() + '/views/login.html')});

router.post('/', (req: Request, res: Response): void => {
    res.send(req.body);
});

export { router };