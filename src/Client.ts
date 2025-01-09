import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Controller from "./controllers/controller";

import config from "./utils/Constants";
import MiddleWareController from "./controllers/middleWareController";
import Methods from "./utils/methods";
import Database from "./utils/database";

class App {
  private readonly db: Database;
  private readonly express: Application;
  private readonly port: number = config.port;

  constructor(controllers: Controller[], globalMiddleWares: MiddleWareController[], port: number) {
    this.express = express();
    this.db = new Database();
    this.port = port;
    this.initialize(controllers, globalMiddleWares);
  }

  public getApp(): [Application, number] {
    return [this.express, this.port];
  }

  private async initialize(controllers: Controller[], globalMiddleWares: MiddleWareController[]): Promise<void> {
    await this.initializePlugins();
    await this.db.connectToDatabase();
    await this.initializeControllers(controllers);
    await this.initializeGlobalMiddleWare(globalMiddleWares);
  }

  private async initializeControllers(controllers: Controller[]): Promise<void> {
    controllers.forEach((controller) => {
      this.express.use(controller.setRoutes());
    });
    console.log("Controllers initialized");
  }
  private async initializeGlobalMiddleWare(middleWares: MiddleWareController[]): Promise<void> {
    middleWares.forEach((middleWare: MiddleWareController) => {
      this.express.use(middleWare.setGlobalMiddleWares());
    });
    console.log("Middlewares initialized");
  }
  private async initializePlugins(): Promise<void> {
    this.express.use(
      cors({
        origin: "http://localhost:1337",
        credentials: true,
        methods: [Methods.GET, Methods.POST, Methods.PUT, Methods.PATCH, Methods.DELETE],
      }),
    );
    this.express.use(express.static("main"));
    this.express.use(bodyParser.json());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}

export default App;
