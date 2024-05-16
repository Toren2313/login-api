import express, { Application } from "express";
import cors from "cors";
import bodyParser, { json } from "body-parser";

import Controller from "./controllers/Controller";

import config from "./utils/Constants";
import MiddleWareController from "./controllers/MiddleWareController";
import Methods from "./utils/Methods";

class App {
  private readonly express: Application;
  private readonly port: number = config.port;

  constructor(
    controllers: Controller[],
    globalMiddleWares: MiddleWareController[],
    port: number
  ) {
    this.express = express();
    this.port = port;

    this.initializeApp();
    this.initializeControllers(controllers);
    this.initializeGlobalMiddleWare(globalMiddleWares);
  }

  public getApp(): [Application, number] {
    return [this.express, this.port];
  }
  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.express.use(controller.path, controller.setRoutes());
    });
    console.log("Controllers initialized");
  }
  private initializeGlobalMiddleWare(
    middleWares: MiddleWareController[]
  ): void {
    middleWares.forEach((middleWare: MiddleWareController) => {
      this.express.use(middleWare.setGlobalMiddleWares());
    });
    console.log("Middlewares initialized");
  }
  private initializeApp(): void {
    this.express.use(
      cors({
        origin: "http://localhost:1337",
        credentials: true,
        methods: [
          Methods.GET,
          Methods.POST,
          Methods.PUT,
          Methods.PATCH,
          Methods.DELETE,
        ],
      })
    );
    this.express.use(express.static("main"));
    this.express.use(bodyParser.json());
    this.express.use(express.json());
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}

export default App;
