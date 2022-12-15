import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import user from "../entities/user.entity";

const doesUserExistsMidlleware = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<void> => {
  const idWanted = req.params.id;

  const userRepo = AppDataSource.getRepository(user);
  const foundUser = await userRepo.find({
    where: { id: idWanted },
    withDeleted: true,
  });

  if (!foundUser[0]) {
    throw new AppError("User does not exists", 404);
  }

  req.foundUser = foundUser[0];
  return next();
};

export default doesUserExistsMidlleware;
