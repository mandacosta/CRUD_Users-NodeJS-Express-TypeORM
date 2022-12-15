import { Router } from "express";
import { createUserControler } from "../../controllers/createUserController";
import { editUserController } from "../../controllers/editUserController";
import { listUsersController } from "../../controllers/listUsersControllers";
import { softDeleteUserController } from "../../controllers/softDeleteUserController";
import doesUserExistsMidlleware from "../../middlewares/doesUserExistsMiddleware";
import emailAlreadyExistsMiddleware from "../../middlewares/emailExistsMiddleware";
import isAdmMiddleware from "../../middlewares/isAdmMiddleware";
import isOwnerOrAdmMiddleware from "../../middlewares/isOwnerOrAdminMiddleware";
import isTokenValidMiddleware from "../../middlewares/isTokenValidMiddleware";
import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware";
import { createUserSchema, editUserSchema } from "../../schemas/userSchemas";

const userRouter = Router();

userRouter.post(
  "",
  emailAlreadyExistsMiddleware,
  validateSchemaMiddleware(createUserSchema),
  createUserControler
);
userRouter.get(
  "",
  isTokenValidMiddleware,
  isAdmMiddleware,
  listUsersController
);

userRouter.patch(
  "/:id",
  isTokenValidMiddleware,
  doesUserExistsMidlleware,
  isOwnerOrAdmMiddleware,
  validateSchemaMiddleware(editUserSchema),
  editUserController
);

userRouter.delete(
  "/:id",
  isTokenValidMiddleware,
  isAdmMiddleware,
  doesUserExistsMidlleware,
  softDeleteUserController
);

export default userRouter;
