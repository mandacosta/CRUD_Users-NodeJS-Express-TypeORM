import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";
import "dotenv/config";

const isTokenValidMiddleware = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError("Missing authorization token.", 401);
  }

  const token = authToken.split(" ")[1];

  const key = process.env.SECRET_KEY;

  const decoded = jwt.verify(token, key!, (error, decoded) => {
    if (error) {
      throw new AppError("Missing authorization token.", 401);
    }
    return decoded;
  }) as any;

  req.isAdm = decoded.isAdm;
  req.userId = decoded.sub;

  return next();
};

export default isTokenValidMiddleware;
