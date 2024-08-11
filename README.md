# Shree Ganesh - Elysia JS Boilerplate
# $$ IN DEVELOPMENT.

## Getting Started
#Shree Ganesh, BoilerPlate for ElysiaJS, with Prisma for ORM

This Boiler Plate is really simple, All you need to change is to run few command and you will have a working API in no time.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Installing
A step by step series of examples that tell you how to get a development env running.

Change .env-example to .env and change your keys .

# FOLDER STRUCTURE

src/app/common -> They consist of utilities or redactor js files for common usage.

src/app/constants -> This folder will have all the constants for the app , application.js is for app wide response code messages, informational.js is for general errors, messages.js is for all the Response strings.

src/app/controllers -> Like the name says this will be root for all your controllers.

src/app/middlewares -> for all the middleware you want to create.

src/app/models -> This will have all the models for your controllers, ideally do not try to touch the core repository which acts as the main datasource entry point, yourmodel.model.js is what you should use to initialize the core repo.

src/app/routes -> This will have all the routes for you, schema/common is the common repo of all the error, success and header schema which you will use in your routes. I've created a sample user folder in route with its own route and schema files.

src/app/routes/routes.ts will have all the routes, specify the routes specially here with all the schema you make.

src/services will have all the library or third party service api and they all can be kept here.

src/plugins is for plugins and it houses the authorization jwt verify method to be able to put in onRequest method.

index.ts is the main entry point and server.ts accompanies all the work within index.

Happy Coding!

