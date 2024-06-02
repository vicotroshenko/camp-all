"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const app_1 = require("../app");
class UserService {
    async findUser(email) {
        return await app_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }
    async registerUser(newUser) {
        return await app_1.prisma.user.create({
            data: newUser,
        });
    }
    async updateUser(id, newUser) {
        return await app_1.prisma.user.update({
            where: {
                id,
            },
            data: newUser,
        });
    }
}
exports.UserService = UserService;
const userService = new UserService();
exports.default = userService;
//# sourceMappingURL=user.service.js.map