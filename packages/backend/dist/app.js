"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const passport_jwt_1 = require("passport-jwt");
const passport_1 = __importDefault(require("passport"));
const routes_1 = __importDefault(require("./routes"));
const user_service_1 = __importDefault(require("./services/user.service"));
const port = 3030;
const app = (0, express_1.default)();
const router = new routes_1.default(app);
exports.prisma = new client_1.PrismaClient();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
const opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
};
const jwtStrategy = new passport_jwt_1.Strategy(opts, async (payload, done) => {
    try {
        const user = await user_service_1.default.findUser(payload.email);
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
    catch (err) {
        return done(err, false);
    }
});
passport_1.default.use('jwt', jwtStrategy);
app.use(passport_1.default.initialize());
router.init();
app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
});
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
//# sourceMappingURL=app.js.map