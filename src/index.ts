import App from "./Client";
import MainController from "./routes/main/Main.route";
import AuthenticationController from "./routes/auth/Authentication.route";
import Controller from "./controllers/controller";

import MiddleWareController from "./controllers/middleWareController";
import mainMiddleWare from "./middlewares/global/mainMiddleWare";

const controllers: Controller[] = [new MainController(), new AuthenticationController()];

const globalMiddleWares: MiddleWareController[] = [new mainMiddleWare()];

const app: App = new App(controllers, globalMiddleWares, 1337);

app.listen();
