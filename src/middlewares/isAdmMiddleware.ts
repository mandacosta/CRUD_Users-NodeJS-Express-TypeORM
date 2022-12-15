import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";

const isAdmMiddleware = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  if (req.isAdm) {
    return next();
  }

  throw new AppError("Missing authorization token.", 403);
};

export default isAdmMiddleware;
