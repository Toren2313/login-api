import { Router } from "express";
import { IMiddleWareController } from "../interfaces/IMidlleWareController";

abstract class MiddleWareController {
  public router: Router = Router();
  protected globalMiddleWares: IMiddleWareController[] = [];
  public setGlobalMiddleWares(): Router {
    for (const globalMw of this.globalMiddleWares) {
      this.router.use(globalMw.handler);
    }
    return this.router;
  }
}
export default MiddleWareController;
