import { Router, Request, Response } from "express";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
};

const router = Router();

router.get('/', (req: Request, res: Response): void => {res.sendFile(process.cwd() + '/views/login.html')});

router.post('/', (req: RequestWithBody, res: Response): void => {
    const { email, password } = req.body;

    if (!email) throw ErrorWithStatus.sendHtmlAndReturnError('You must provide and email!', 422, res);
    if (!password) throw ErrorWithStatus.sendHtmlAndReturnError('You must provide an password', 422, res);
    if (email !== 'adm@mhc.com' || password !== 'password') {
        throw ErrorWithStatus.sendHtmlAndReturnError('Invalid email or password!', 401, res);
    };

    req.session = { loggedIn: true };
    res.redirect('/');
});

export { router };