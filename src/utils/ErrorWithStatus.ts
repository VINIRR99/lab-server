import { Response } from "express";

export class ErrorWithStatus extends Error {
    static sendHtmlAndReturnError = (message: string, status: number, res: Response): ErrorWithStatus => {
        const error = new ErrorWithStatus(message, status);
        res.send(error.htmlMessage);
        return error;
    };

    constructor(public message: string, public status: number) {super()};

    get htmlMessage(): string {return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Error</title>
    </head>
    <body>
        <h1>Status: ${this.status}</h1>
        <p>Message: ${this.message}</p>
    </body>
</html>
    `};
};