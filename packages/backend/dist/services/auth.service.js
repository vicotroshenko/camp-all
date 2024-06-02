"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
class AuthService {
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
const authService = new AuthService();
exports.default = authService;
//# sourceMappingURL=auth.service.js.map