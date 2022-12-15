import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppDataSource from "../data-source";
import user from "../entities/user.entity";
import { AppError } from "../errors";
import { IUserLogin } from "../interfaces/users";

const loginUserService = async (body: IUserLogin): Promise<string> => {
  const userRepo = AppDataSource.getRepository(user);
  const foundUser = await userRepo.findOneBy({ email: body.email });
  if (!foundUser) {
    throw new AppError("Wrong email/password", 403);
  }

  const passwordMatch = await compare(body.password, foundUser.password);

  if (!passwordMatch) {
    throw new AppError("Wrong email/password", 403);
  }

  const { isAdm } = foundUser;

  const key = process.env.SECRET_KEY;

  const token = jwt.sign({ isAdm }, key!, {
    expiresIn: "24h",
    subject: foundUser.id,
  });

  return token;
};

export default loginUserService;
