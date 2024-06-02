import { UserType } from '../types/user.type';
export default class AuthService {
    findUser(email: string): Promise<UserType | null>;
    registerUser(newUser: UserType): Promise<UserType>;
    updateUser(id: string | undefined, newUser: UserType): Promise<UserType>;
}
export default ;
: AuthService;
export default authService;
