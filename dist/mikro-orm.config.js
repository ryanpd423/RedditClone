"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const config = {
    dbName: 'lireddit',
    debug: !constants_1.__prod__,
    entities: [Post_1.Post],
    user: '',
    password: '',
    type: 'postgresql'
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map