import { Request, Response } from "express";
import createUserService from "../services/createUserService";

export const createUserControler = async (req: Request, resp: Response) => {
  const returnedUser = await createUserService(req.validatedBody);
  return resp.status(201).json(returnedUser);
};
