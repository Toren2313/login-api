import express, { Router } from "express";

interface IMiddleWareController {
  handler(
    req: express.Request,
    res: express.Response,
    next?: express.NextFunction
  ): void;
}

abstract class MiddleWareController {
  public router: Router = Router();
  protected globalMiddleWares: Array<IMiddleWareController> = [];
  public setGlobalMiddleWares(): Router {
    for (const globalMw of this.globalMiddleWares) {
      this.router.use(globalMw.handler);
    }
    return this.router;
  }
}

export { IMiddleWareController };
export default MiddleWareController;
