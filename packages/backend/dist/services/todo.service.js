"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const query_constant_1 = require("../constants/query.constant");
class TodoService {
    queryHandler(query) {
        const status = query === null || query === void 0 ? void 0 : query.status;
        const statusIsCorrect = Object.values(query_constant_1.QUERY).includes(status);
        return status && statusIsCorrect
            ? status === query_constant_1.QUERY.PUBLIC
                ? { private: false }
                : { [status]: true }
            : {};
    }
    async findAll(id, query) {
        const search = query === null || query === void 0 ? void 0 : query.search;
        const skip = Number(query === null || query === void 0 ? void 0 : query.skip) || 0;
        const take = Number(query === null || query === void 0 ? void 0 : query.take) || 5;
        const filterByCondition = this.queryHandler(query);
        return await app_1.prisma.todo.findMany({
            skip,
            take,
            orderBy: {
                createdAt: 'asc',
            },
            where: {
                OR: [{ owner: id }, { private: false }],
                title: {
                    contains: search,
                    mode: 'insensitive',
                },
                ...filterByCondition,
            },
        });
    }
    async findOne(id) {
        return await app_1.prisma.todo.findUnique({
            where: {
                id,
            },
        });
    }
    async createOne(newTodo) {
        return await app_1.prisma.todo.create({
            data: newTodo,
        });
    }
    async updateOne(id, newTodo) {
        return await app_1.prisma.todo.update({
            where: {
                id,
            },
            data: newTodo,
        });
    }
    async deleteOne(id) {
        return await app_1.prisma.todo.delete({
            where: {
                id,
            },
        });
    }
    async statistic(id, query) {
        const search = query === null || query === void 0 ? void 0 : query.search;
        const filterByCondition = this.queryHandler(query);
        return await app_1.prisma.todo.aggregate({
            _count: {
                id: true,
            },
            where: {
                OR: [{ owner: id }, { private: false }],
                title: {
                    contains: search,
                    mode: 'insensitive',
                },
                ...filterByCondition,
            },
        });
    }
}
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map