import { Request, Response } from "express";
import loginUserService from "../services/loginUserService";

export const loginUserController = async (req: Request, resp: Response) => {
  const token = await loginUserService(req.validatedBody);
  return resp.status(200).json({ token: token });
};
