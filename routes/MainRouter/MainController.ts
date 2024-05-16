import Controller from "../../controllers/Controller";
import express from "express";
import methods from "../../utils/Methods";

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
  public handler(req: express.Request, res: express.Response) {
    return res.json({ content: "Hello, World!" });
  }
}

export default MainController;
