import Controller from "../../interfaces/Controller";
import express from "express";
import methods from "../../utils/Methods";

class MainController extends Controller {
  path = "/";
  routes = [
    {
      path: this.path,
      router: this.router,
      Method: methods.GET,
      handler: this.mainHandler,
      localMiddleware: [],
    },
  ];
  constructor() {
    super();
  }
  private mainHandler(req: express.Request, res: express.Response) {
    return res.json({ content: "Hello, World!" });
  }
}

export default MainController;
