"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const dotenvPath = path_1.default.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv_1.default.config({ path: dotenvPath });
/**
 * UPLOAD
 */
exports.upload = (event, context) => {
    return Promise.resolve({ statusCode: 200, message: 'OK', data: { o: 'my' } });
};
//# sourceMappingURL=handler.js.map