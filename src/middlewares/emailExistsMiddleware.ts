import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import user from "../entities/user.entity";

const emailAlreadyExistsMiddleware = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const emailBody = req.body.email;

  const userRepo = AppDataSource.getRepository(user);
  const foundEmail = await userRepo.findOneBy({ email: emailBody });

  if (foundEmail) {
    throw new AppError("User already exists", 400);
  }
  return next();
};

export default emailAlreadyExistsMiddleware;
