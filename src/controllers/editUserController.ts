import { Request, Response } from "express";
import editUserService from "../services/editUserService";

export const editUserController = async (req: Request, resp: Response) => {
  const returnedUser = await editUserService(req.validatedBody, req.foundUser);
  return resp.status(200).json(returnedUser);
};
