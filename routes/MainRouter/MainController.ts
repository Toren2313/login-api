import Controller from "../../controllers/Controller";
import express from "express";
import methods from "../../utils/Methods";
import HTTPStatusCode from "../../utils/HttpStatusCode";

class MainController extends Controller {
  path = "/";
  constructor() {
    super();
    this.routes = [
      {
        path: this.path,
        router: this.router,
        Method: methods.GET,
        handler: this.handler,
        localMiddleware: [],
      },
    ];
  }
  private handler(req: express.Request, res: express.Response) {
    return res.json({ content: "Hello, World!" }).status(HTTPStatusCode.Ok);
  }
}

export default MainController;
