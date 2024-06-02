import { UserType } from '../types/user.type';
export declare class UserService {
    findUser(email: string): Promise<UserType | null>;
    registerUser(newUser: UserType): Promise<UserType>;
    updateUser(id: string | undefined, newUser: UserType): Promise<UserType>;
}
declare const userService: UserService;
export default userService;
