import App from "./client";
import MainController from "./routes/main/main.route";
import AuthenticationController from "./routes/auth/auth.route";
import Controller from "./controllers/controller";

import dotenv from "dotenv";

import MiddleWareController from "./controllers/middleWareController";
import mainMiddleWare from "./middlewares/global/mainMiddleWare";

dotenv.config();

const controllers: Controller[] = [new MainController(), new AuthenticationController()];
const globalMiddleWares: MiddleWareController[] = [new mainMiddleWare()];

const app: App = new App(controllers, globalMiddleWares, 1337);

app.listen();
