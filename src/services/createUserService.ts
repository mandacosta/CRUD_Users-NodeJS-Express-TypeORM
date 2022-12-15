import AppDataSource from "../data-source";
import user from "../entities/user.entity";
import { IUser, IUserRequest } from "../interfaces/users";
import { returnUserSchema } from "../schemas/userSchemas";

const createUserService = async (body: IUserRequest): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(user);
  const userCreation = userRepo.create(body);

  await userRepo.save(userCreation);

  const validateUserReturn = await returnUserSchema.validate(userCreation, {
    abortEarly: false,
    stripUnknown: true,
  });

  return validateUserReturn;
};

export default createUserService;
