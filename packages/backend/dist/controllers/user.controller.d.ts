import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
    resetPassword(req: Request, res: Response): Promise<void>;
    changePassword(req: Request, res: Response): Promise<void>;
    verify(req: Request, res: Response): Promise<void>;
}
declare const userController: UserController;
export default userController;
