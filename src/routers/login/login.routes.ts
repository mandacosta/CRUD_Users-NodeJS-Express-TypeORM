import { Router } from "express";
import { loginUserController } from "../../controllers/loginUserController";
import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware";
import { loginUserSchema } from "../../schemas/userSchemas";

const loginRoute = Router();

loginRoute.post(
  "",
  validateSchemaMiddleware(loginUserSchema),
  loginUserController
);

export default loginRoute;
