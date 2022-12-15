import AppDataSource from "../data-source";
import user from "../entities/user.entity";
import { IUser, IUserRequest } from "../interfaces/users";
import { returnUserSchema } from "../schemas/userSchemas";

const editUserService = async (
  body: IUserRequest,
  foundUser: user
): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(user);

  await userRepo.save({ id: foundUser.id, ...body });

  const userData = await userRepo.find({
    where: { id: foundUser.id },
    withDeleted: true,
  });

  const validateUserReturn = await returnUserSchema.validate(userData[0], {
    abortEarly: false,
    stripUnknown: true,
  });

  return validateUserReturn;
};

export default editUserService;
