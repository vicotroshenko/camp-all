"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ctrlWrapper = (ctrl) => async (req, res, next) => {
    try {
        await ctrl(req, res, next);
    }
    catch (error) {
        next(error);
    }
};
exports.default = ctrlWrapper;
//# sourceMappingURL=cntrlWrapper.middleware.js.map