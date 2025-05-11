import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { validate } from '../middlewares/validate.middleware';
import { createUserSchema } from '../validators/user.validator';

export const userRouter = Router();

userRouter.get('/', userController.getAll);
userRouter.post('/', validate(createUserSchema), userController.create);
