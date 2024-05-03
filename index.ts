import App from "./Client";
import MainController from "./routes/MainRouter/MainController";
import Controller from "./interfaces/Controller";

const controllers: Array<Controller> = [
    new MainController(),
]
const app: App = new App(controllers,1337);

app.listen();