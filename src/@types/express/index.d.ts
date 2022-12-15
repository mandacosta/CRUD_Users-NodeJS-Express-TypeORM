import user from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";

declare global {
  namespace Express {
    interface Request {
      foundUser: user;
      validatedBody: IUserRequest;
      isAdm: boolean;
      userId: string;
    }
  }
}

export {};

//Adicionando propriedades na Request
