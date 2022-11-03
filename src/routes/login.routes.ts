import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
};

class ErrorWithStatus extends Error {
    constructor(public message: string, public status: number) {super()};
};

const router = Router();

router.get('/', (req: Request, res: Response): void => {res.sendFile(process.cwd() + '/views/login.html')});

router.post('/', (req: RequestWithBody, res: Response): void => {
    const { email, password } = req.body;

    if (!email) throw new ErrorWithStatus('You must provide an email!', 422);
    if (!password) throw new ErrorWithStatus('You must provide an password!', 422);
    if (email !== 'adm@mhc.com' || password !== 'password') throw new ErrorWithStatus('Invalid email or password!', 401);

    req.session = { loggedIn: true };
    res.redirect('/');
});

export { router };