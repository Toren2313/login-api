import express from "express";

interface IMiddleWareController {
  handler(req: express.Request, res: express.Response, next?: express.NextFunction): void;
}

export { IMiddleWareController };
