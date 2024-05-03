import express, { Router } from "express";
import Methods from "../utils/Methods";

interface IController {
  path: string;
  router: Router;
  Method: Methods;
  handler(
    req: express.Request,
    res: express.Response,
    next?: express.NextFunction
  ): void;
  localMiddleware?: ((
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => void)[];
}

abstract class Controller {
  public router: Router = Router();
  public abstract path: string;
  protected routes: Array<IController> = [];

  public setRoutes(): Router {
    for (const route of this.routes) {
      if (route.localMiddleware != undefined) {
        for (const mw of route.localMiddleware) {
          this.router.use(route.path, mw);
        }
      }
      switch (route.Method) {
        case "GET": {
          this.router.get(route.path, route.handler);
          break;
        }
        case "POST": {
          this.router.post(route.path, route.handler);
          break;
        }
        case "PUT": {
          this.router.put(route.path, route.handler);
          break;
        }
        case "PATCH": {
          this.router.patch(route.path, route.handler);
          break;
        }
        case "DELETE": {
          this.router.delete(route.path, route.handler);
          break;
        }
      }
    }
    return this.router;
  }
}

export default Controller;
