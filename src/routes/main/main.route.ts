import Controller from "../../controllers/controller";
import { Request, Response } from "express";
import methods from "../../utils/methods";
import HTTPStatusCode from "../../utils/httpStatusCode";

class MainController extends Controller {
  path = "/";
  constructor() {
    super();
    this.routes = [
      {
        path: this.path,
        router: this.router,
        Method: methods.GET,
        handler: this.handler.bind(this),
        localMiddleware: [],
      },
    ];
  }
  private handler(req: Request, res: Response): Response {
    return res.status(HTTPStatusCode.Ok).json({ content: "Hello, World!" });
  }
}

export default MainController;
