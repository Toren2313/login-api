import express, { Router } from "express";
import Methods from "../utils/Methods";

interface IController {
  path: string;
  router: Router;
  Method: Methods;
  handler(req: express.Request, res: express.Response, next?: express.NextFunction): void;
  localMiddleware?: ((
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void)[];
}

export { IController };
