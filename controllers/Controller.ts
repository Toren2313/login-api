import { Router } from "express";
import { IController } from "../interfaces/IController";

abstract class Controller {
  public router: Router = Router();
  public abstract path: string;
  protected routes: Array<IController> = [];

  public setRoutes(): Router {
    for (const route of this.routes) {
      console.log(route.localMiddleware?.length);
      if (route.localMiddleware != undefined || route?.localMiddleware != undefined) {
        for (const mw of route.localMiddleware) {
          this.router.use(route.path, mw);
        }
      }
      switch (route.Method) {
        case "get":
          this.router.get(route.path, route.handler);
          break;
        case "post":
          this.router.post(route.path, route.handler);
          break;
        case "put":
          this.router.put(route.path, route.handler);
          break;
        case "patch":
          this.router.patch(route.path, route.handler);
          break;
        case "delete":
          this.router.delete(route.path, route.handler);
          break;
      }

    }
    return this.router;
  }
}

export default Controller;
