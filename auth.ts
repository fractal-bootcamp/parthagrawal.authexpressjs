import express, { Request } from "express";
import cookieParser from 'cookie-parser';

const app = express()
app.use(cookieParser());

export function isAuthed(req: Request) {
    if (req.cookies.isLoggedIn === "true") {
        return true;
    }
    return false;
}