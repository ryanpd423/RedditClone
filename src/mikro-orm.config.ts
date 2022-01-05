import { Options } from '@mikro-orm/core';
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const config: Options = {
    dbName: 'lireddit',
    debug: !__prod__,
    entities: [Post],
    user: '',
    password: '',
    type: 'postgresql'
};
// 'Options' makes the MikroORM.init(...) function happy :)

export default config;