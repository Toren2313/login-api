import express, { Application } from "express";
import ErrorMiddleware from "./middlewares/ErrorMiddleWare";
import Controller from "./interfaces/Controller";

import config from "./utils/Constants";

class App {
  private express: Application;
  private port: number = config.port;

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.initializeErrorHandling();
    this.initializeControllers(controllers);
  }

  public getApp(): [Application, number] {
    return [this.express, this.port];
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.express.use("/api/", controller.setRoutes());
    });
  }
  private initializeGlobalMiddleWare(middleWares: string): void {
    middleWares.trim();
  }

  private initializeErrorHandling(): void {
    this.express.use(ErrorMiddleware);
  }

  public listen(): void {
    this.express.listen(config.port, () => {
      console.log(`Listening on port ${config.port}`);
    });
  }
}

export default App;
