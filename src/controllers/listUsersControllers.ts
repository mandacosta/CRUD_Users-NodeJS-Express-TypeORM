import { Request, Response } from "express";
import listUsersService from "../services/listUsersService";

export const listUsersController = async (req: Request, resp: Response) => {
  const usersList = await listUsersService();
  return resp.status(200).json(usersList);
};
