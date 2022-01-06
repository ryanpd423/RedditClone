import { Options } from '@mikro-orm/core';
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from 'path';

const config: Options = {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    dbName: 'lireddit',
    debug: !__prod__,
    entities: [Post],
    user: '',
    password: '',
    type: 'postgresql'
};
// 'Options' makes the MikroORM.init(...) function happy :)

export default config;