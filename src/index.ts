import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);

    const post = orm.em.create(Post, {title: 'my first post'}); // create an instance of a Post entity
    await orm.em.persistAndFlush(post); // insert post instance to db
    console.log('----------------sql 2----------------');
    await orm.em.nativeInsert(Post, {title: 'my first post 2'});
};

main().catch((err) => {
    console.error(err);
});