# Fullstack React GraphQL Typescript Tutorial

* Continue @ `38:00`

* Author: `Ben Awad`
* Source: `YouTube`

## STACK

* React
* TypeScript
* Node
* Yarn (npm replacement)
* Visual Studio Code (see Extensions)
* MikroORM
* PostgreSQL

### NPM / YARN / NPX / NODE / NODEMON
* `yarn dev` - The ts-node package allows you to run your TypeScript code directly without compiling it to JavaScript. It’s like the node executable but for .ts files.
* * Run in a separate node terminal
* `yarn watch` creates the `dist\` dir when it compiles your typescript into javascript
* * Run in a separate node terminal
* * * `MikroORM` will not delete old migration files from here so you will want to delete the `dist` dir then run `yarn watch` from another node terminal so that a fresh one is created

### MikroORM
* Migrations Cmd via CLI: `npx mikro-orm migration:create` 
  * Creates new migration with current schema dif
  * Successful Cmd Output From Node-1 (`yarn dev`): ![Migration-Run1](README_IMGS/MikroORM-MigrationCMD_Success.png)
  * Successful Cmd Output From Node-2 (`yarn dev`) ![Migration-Run2](README_IMGS/MikroORM-Successful_CMD-YARN_DEV.png)
  * Confirm in PGAdmin4 (`postgresql`) ![Confirm-SQL-Worked](README_IMGS/MikroORM-PostgreSUCCESS-Confirm.png)