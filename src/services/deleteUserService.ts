import AppDataSource from "../data-source";
import user from "../entities/user.entity";
import { AppError } from "../errors";
import { IUser, IUserRequest } from "../interfaces/users";
import { returnUserSchema } from "../schemas/userSchemas";

const deleteUserService = async (foundUser: user): Promise<void> => {
  const userRepo = AppDataSource.getRepository(user);

  const userUpdate = await userRepo.save({
    id: foundUser.id,
    isActive: false,
  });
  await userRepo.softRemove({ id: foundUser.id });
};

export default deleteUserService;
