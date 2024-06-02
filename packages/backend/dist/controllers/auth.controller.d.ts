import { Request, Response } from 'express';
import authService from '../services/auth.service';
export declare class UserController {
    private userService;
    constructor(userService: typeof authService);
    register(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
    resetPassword(req: Request, res: Response): Promise<void>;
    changePassword(req: Request, res: Response): Promise<void>;
    verify(req: Request, res: Response): Promise<void>;
}
declare const authController: UserController;
export default authController;
