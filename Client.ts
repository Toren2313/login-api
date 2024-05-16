import express, { Application } from "express";

import Controller from "./controllers/Controller";

import config from "./utils/Constants";
import MiddleWareController from "./controllers/MiddleWareController";

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

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}

export default App;
