import { Request, Response } from "express";
import { AppError } from "../errors";
import deleteUserService from "../services/deleteUserService";

export const softDeleteUserController = async (
  req: Request,
  resp: Response
) => {
  if (req.foundUser.isActive) {
    await deleteUserService(req.foundUser);
    return resp.status(204).send();
  }

  throw new AppError("Can not delete an inactive User", 400);
};
