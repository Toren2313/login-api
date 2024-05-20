import Controller from "../../controllers/Controller";
import express from "express";
import methods from "../../utils/Methods";
import HTTPStatusCode from "../../utils/HttpStatusCode";
import User from "../../models/User";
import { Request, Response } from "express";

class AuthenticationController extends Controller {
  path = "/auth";
  constructor() {
    super();
    this.routes = [
      {
        path: this.path,
        router: this.router,
        Method: methods.GET,
        handler: this.registerHandler,
        localMiddleware: [],
      },
    ];
  }
  private async registerHandler(req: Request, res: Response) {
    await User.create({
      username: "przemciu",
      password: "haslo123",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res
      .status(HTTPStatusCode.Created)
      .json({ content: "Successfully created user" });
  }
}

export default AuthenticationController;
