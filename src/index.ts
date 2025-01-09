import App from "./Client";
import MainController from "./routes/Main/Main.route";
import AuthenticationController from "./routes/Authentication/Authentication.route";
import Controller from "./controllers/Controller";

import MiddleWareController from "./controllers/MiddleWareController";
import mainMiddleWare from "./middlewares/global/MainMiddleWare";

const controllers: Controller[] = [new MainController(), new AuthenticationController()];

const globalMiddleWares: MiddleWareController[] = [new mainMiddleWare()];

const app: App = new App(controllers, globalMiddleWares, 1337);

app.listen();
