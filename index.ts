import App from "./Client";
import MainController from "./routes/MainRouter/MainController";
import AuthenticationController from "./routes/Authentication/AuthenticationController";
import Controller from "./controllers/Controller";

import MiddleWareController from "./controllers/MiddleWareController";
import mainMiddleWare from "./middlewares/global/MainMiddleWare";

const controllers: Array<Controller> = [new MainController(), new AuthenticationController()];

const globalMiddleWares: Array<MiddleWareController> = [new mainMiddleWare()];

const app: App = new App(controllers, globalMiddleWares, 1337);

app.listen();
