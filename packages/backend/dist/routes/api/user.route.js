"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const auth_middleware_1 = __importDefault(require("../../middlewares/auth.middleware"));
const ctrlWrapper_middleware_1 = __importDefault(require("../../middlewares/ctrlWrapper.middleware"));
const validateBody_middleware_1 = __importDefault(require("../../middlewares/validateBody.middleware"));
const auth_schema_1 = __importDefault(require("../../schemas/auth.schema"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/register', (0, validateBody_middleware_1.default)(auth_schema_1.default.register), (0, ctrlWrapper_middleware_1.default)(user_controller_1.default.register.bind(user_controller_1.default)));
router.post('/login', (0, validateBody_middleware_1.default)(auth_schema_1.default.login), (0, ctrlWrapper_middleware_1.default)(user_controller_1.default.login.bind(user_controller_1.default)));
router.post('/logout', auth_middleware_1.default, (0, ctrlWrapper_middleware_1.default)(user_controller_1.default.logout.bind(user_controller_1.default)));
router.post('/reset-password', (0, validateBody_middleware_1.default)(auth_schema_1.default.resetPassword), (0, ctrlWrapper_middleware_1.default)(user_controller_1.default.resetPassword.bind(user_controller_1.default)));
router.put('/password', (0, validateBody_middleware_1.default)(auth_schema_1.default.newPassword), (0, ctrlWrapper_middleware_1.default)(user_controller_1.default.changePassword.bind(user_controller_1.default)));
router.get('/verify/:token', (0, ctrlWrapper_middleware_1.default)(user_controller_1.default.verify.bind(user_controller_1.default)));
exports.default = router;
//# sourceMappingURL=user.route.js.map