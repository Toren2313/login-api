import { Router } from "express";
import { IController } from "../interfaces/IController";
import Methods from "../utils/Methods";

abstract class Controller {
  public router: Router = Router();
  public abstract path: string;
  protected routes: IController[] = [];

  public setRoutes(): Router {
    for (const route of this.routes) {
      if (route.localMiddleware !== undefined) {
        for (const mw of route.localMiddleware) {
          this.router.use(route.path, mw);
        }
      }
      const checkRoute: Record<Methods, () => void> = {
        get: () => {
          this.router.get(route.path, route.handler);
        },
        post: () => {
          this.router.post(route.path, route.handler);
        },
        patch: () => {
          this.router.patch(route.path, route.handler);
        },
        put: () => {
          this.router.put(route.path, route.handler);
        },
        delete: () => {
          this.router.delete(route.path, route.handler);
        },
      };
      checkRoute[route.Method]();
    }
    return this.router;
  }
}

export default Controller;
