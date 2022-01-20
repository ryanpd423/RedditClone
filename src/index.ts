import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import mikroOrmConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig); // connect to the database
    await orm.getMigrator().up(); // runs the migration

    const app = express(); // creates web server

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false,
        }),
        context: () =>  ({ em: orm.em }) // context is a special object that can be accessed by all Resolvers
    });

    apolloServer.applyMiddleware({ app }); // creates GraphQL endpoint in our Express Server

    app.listen(4000, () => {
        console.log("server started on localhost:4000");
    });
};

main().catch((err) => {
    console.error(err);
});