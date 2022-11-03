import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response): void => {
    if (req.session && req.session.loggedIn) {
        res.sendFile(process.cwd() + '/views/logged.html');
    } else {
        res.sendFile(process.cwd() + '/views/notLogged.html');
    };
});

export { router };