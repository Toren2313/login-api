import middleWareController from "../../controllers/MiddleWareController";
import express, { NextFunction } from "express";
import date from "../../utils/Date";

class MainMiddleWare extends middleWareController {
  constructor() {
    super();
    this.globalMiddleWares = [
      {
        handler: this.handler,
      },
    ];
  }
  private handler(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    console.log(
      ` [ EXPRESS API ] [ CALL ${req.method} ] [ Client ip: ${req.socket.remoteAddress} ] [ Called API: ${req.path} ] [ DateTime - ${date}  ]  `
    );
    next();
  }
}

export default MainMiddleWare;
