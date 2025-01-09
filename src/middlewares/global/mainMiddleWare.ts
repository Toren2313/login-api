import middleWareController from "../../controllers/middleWareController";
import express, { NextFunction } from "express";
import date from "../../utils/date";

class MainMiddleWare extends middleWareController {
  constructor() {
    super();
    this.globalMiddleWares = [
      {
        handler: this.handler,
      },
    ];
  }
  private handler(req: express.Request, res: express.Response, next: NextFunction): void {
    // eslint-disable-next-line max-len
    console.log(
      // eslint-disable-next-line max-len
      ` [ EXPRESS API ] [ CALL ${req.method} ] [ Client ip: ${req.socket.remoteAddress} ] [ Called API: ${req.path} ] [ DateTime - ${date}  ]  `,
    );
    next();
  }
}

export default MainMiddleWare;
