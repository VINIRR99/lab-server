import { Request, Response, NextFunction } from "express";
import { ErrorWithStatus } from "../utils/ErrorWithStatus";

export const middleware = (req: Request, res: Response, next: NextFunction): void => {
    if (!req.session || !req.session.loggedIn) throw ErrorWithStatus.sendHtmlAndReturnError('Not permitted', 403, res);

    next();
};