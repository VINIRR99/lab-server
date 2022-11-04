import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response): void => {
    req.session = undefined;
    res.redirect('/');
});

export { router };