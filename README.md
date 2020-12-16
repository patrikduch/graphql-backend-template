# DEBUGGER

https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a

# Server framework

## KOA

https://raygun.com/blog/koa-vs-express/
https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/
https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/

### Promise

https://github.com/koajs/koa/issues/1305
https://github.com/koajs/koa/issues/1305
https://github.com/ZijianHe/koa-router/issues/257

### KOA CORS

https://github.com/koajs/cors

# Sequelize ORM

## Querying

https://stackoverflow.com/questions/35445849/sequelize-findone-latest-entry\
https://github.com/sequelize/sequelize/issues/7840

## Models

### WORKING WITH MODELS

https://sequelize.org/master/manual/typescript.html
https://sequelize.org/master/manual/typescript.html
https://github.com/RobinBuschmann/sequelize-typescript-example

### Max string data type

https://stackoverflow.com/questions/45937174/how-to-define-an-nvarcharmax-field-with-sequelize/45945889

## Migrations

Must be runned from src directory.

## Migrations initialization

sequelize init

## Model creation

sequelize model:create --name ProjectDetail --attributes name:string

### Create a new migration

sequelize migration:generate --name project-detail-add-domain-url-attribute

### Apply new migration

sequelize db:migrate

### Revert last migration

sequelize db:migrate:undo

### Revert all migrations

sequelize db:migrate:undo:all

https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

### Add column with Foreign key

"use strict";

module.exports = {
up: (queryInterface, Sequelize) => {
return Promise.all([
queryInterface.addColumn(
{ tableName: "Feature" },

        "moduleId",
        {
          type: Sequelize.INTEGER,
          references: {
            model: "Module",
            key: "id"
          }
        }
      )
    ]);

},

down: (queryInterface, Sequelize) => {
/_ Reverting commands _/

    return Promise.all([
      queryInterface.removeColumn(
        "Feature", // name of Source model
        "moduleId" // key we want to remove
      )
    ]);

}
};

### Delete data from entity

http://www.innovaedge.com/2015/11/04/bulk-insertbulk-delete-in-sequelize-migrations/

## Quering

### Order by attribute

https://github.com/sequelize/sequelize/issues/4553

Joiny
https://stackoverflow.com/questions/30052254/sequelize-include-where-filtering-by-a-parent-model-attribute

Mazání / Přidávání attributů
https://stackoverflow.com/questions/46357533/how-to-add-delete-new-columns-in-sequelize-cli

# GENERIC REPOSITORY

https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/

# Issues

## SEQUELIZE CLI

'sequelize' is not recognized as an internal or external command,

npm install -g sequelize
npm i -g sequelize-cli
npm install -g mysql2
