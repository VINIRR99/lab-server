import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response): void => {
    res.sendFile(process.cwd() + '/views/exclusive.html');
});

export { router };