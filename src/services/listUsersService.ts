import AppDataSource from "../data-source";
import user from "../entities/user.entity";
import { IUser } from "../interfaces/users";
import { returnUsersListSchema } from "../schemas/userSchemas";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepo = AppDataSource.getRepository(user);
  const userList = await userRepo.find({ withDeleted: true });

  const validateUserList = await returnUsersListSchema.validate(userList, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (validateUserList) {
    return validateUserList;
  }

  return [];
};

export default listUsersService;
