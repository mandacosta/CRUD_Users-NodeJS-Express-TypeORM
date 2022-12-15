import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserLogin,
  IUserRequest,
  IUserReturn,
  IUserUpdate,
} from "../interfaces/users";

export const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().max(200).required(),
  email: yup.string().email().max(200).required(),
  password: yup.string().max(50).required(),
  isAdm: yup.boolean().required(),
});

export const returnUserSchema: SchemaOf<IUserReturn> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  isAdm: yup.boolean().required(),
  isActive: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

export const returnUsersListSchema: SchemaOf<IUserReturn[]> =
  yup.array(returnUserSchema);

export const loginUserSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const editUserSchema: SchemaOf<IUserUpdate> = yup
  .object()
  .shape({
    name: yup.string(),
    email: yup.string(),
    password: yup.string().max(50),
  })
  .noUnknown(true)
  .strict();
