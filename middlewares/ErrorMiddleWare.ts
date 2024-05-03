import { Request, Response, NextFunction } from "express";

function ErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let status = 500;
  if (error && (error as any).status) {
    status = (error as any).status;
  }
  const message = error.message || "Something went wrong";

  res.status(status).send({
    status,
    message,
  });
}
export default ErrorMiddleware;
