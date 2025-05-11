import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user.service';

export const userController = {
  create: (req: Request, res: Response, next: NextFunction): void => {
    try {
      const { name, email } = req.body;
      const user = userService.createUser(name, email);
      res.status(201).json(user);
    } catch (err) {
      next(err); // ✅ propagate error to global handler
    }
  },

  getAll: (_req: Request, res: Response, next: NextFunction): void => {
    try {
      const users = userService.getAllUsers();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },
};
