import Controller from "../../controllers/Controller";
import methods from "../../utils/Methods";
import HTTPStatusCode from "../../utils/HttpStatusCode";
import User from "../../models/User";
import { Request, Response } from "express";
import ArgonService from "../../services/argonService";

class AuthenticationController extends Controller {
  path = "/auth";
  private aService: ArgonService;
  constructor() {
    super();

    this.aService = new ArgonService();
    this.routes = [
      {
        path: this.path + "/register",
        router: this.router,
        Method: methods.POST,
        handler: this.registerHandler.bind(this),
        localMiddleware: [],
      },
      {
        path: this.path + "/login",
        router: this.router,
        Method: methods.POST,
        handler: this.loginHander.bind(this),
        localMiddleware: [],
      },
    ];
  }
  private async registerHandler(req: Request, res: Response) {
    //const aService = new ArgonService();

    // dla mnie przyszlego mnie | to jest regex sprawdzajacy czy nie ma znakow ktorych nie mozna kliknac na standardowej klawiaturze
    const normalChars = /^[a-zA-Z0-9\s.,!?@#%&*()\-+=/\\:;"'<>{}\[\]|_~]*$/;

    const { username, password } = req.body;

    const boolUsername = !normalChars.test(username) ? true : false;
    const boolPassword = !normalChars.test(password) ? true : false;

    if (boolUsername == true || boolPassword == true)
      return res
        .status(HTTPStatusCode.BadRequest)
        .json({ content: "In username you can use only standard keyboard characters" });

    if (password.length < 5 || username.length < 5 || password.length > 32 || username.length > 32)
      return res
        .status(HTTPStatusCode.BadRequest)
        .json({ content: `min password & username length - 5 max length - 32` });

    const hashPass = await this.aService.hash(password);

    await User.create({
      username: username,
      password: hashPass,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then(() => {
        return res.status(HTTPStatusCode.Created).json({ content: "Successfully created user" });
      })
      .catch((error) => {
        return res
          .status(HTTPStatusCode.InternalServerError)
          .json({ content: `Internal Server Error: ${error}` });
      });
  }
  private async loginHander(req: Request, res: Response) {
    const { username, password } = req.body;

    const foundedUser = await User.findOne({ where: { username: username } });

    if (!username || !password)
      return res.status(HTTPStatusCode.BadRequest).json({ content: "invalid data" });

    if (!foundedUser)
      return res.status(HTTPStatusCode.NotFound).json({ content: "user not found" });

    let logged = await this.aService
      .validate(foundedUser.get().password, password)
      .catch((error) => {
        return res
          .status(HTTPStatusCode.InternalServerError)
          .json({ content: `Internal Server Error: ${error}` });
      });

    if (!logged)
      return res.status(HTTPStatusCode.Unauthorized).json({
        content: `login failed`,
      });

    return res.status(HTTPStatusCode.Accepted).json({
      content: `Succesffuly logged into acount: ${foundedUser?.get().username}`,
      jwt: "json web token",
    });
  }
}

export default AuthenticationController;
