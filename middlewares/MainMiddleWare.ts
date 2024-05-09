import middleWareController from "../interfaces/MiddleWareController";
import express, { NextFunction } from "express";
import date from "../utils/Date";

class MainMiddleWare extends middleWareController {
  globalMiddleWares = [
    {
      handler: this.handler,
    },
  ];
  constructor() {
    super();
  }
  private handler(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    console.log(
      ` [ EXPRESS API ] [ CALL ] [ Client ip: ${req.socket.remoteAddress} ] [ Called API: ${req.path} ] [ DateTime - ${date}  ]  `
    );
    res.json({ content: "Hello, World!" });
    next();
  }
}

export default MainMiddleWare;
