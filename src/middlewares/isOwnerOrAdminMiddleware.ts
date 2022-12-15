import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";

const isOwnerOrAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm, userId } = req;

  const isOwner = req.params.id === userId;

  if (isOwner || isAdm) {
    return next();
  }

  throw new AppError("missing admin permissions", 401);
};

export default isOwnerOrAdmMiddleware;
