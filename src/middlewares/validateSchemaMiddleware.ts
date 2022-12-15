import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

interface IError {
  errors: string;
}

export const validateSchemaMiddleware =
  (schema: AnySchema) =>
  async (req: Request, resp: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validatedBody = validatedData;
      return next();
    } catch (error) {
      const err = error as IError;

      throw new AppError(`${err.errors}`, 401);
    }
  };
