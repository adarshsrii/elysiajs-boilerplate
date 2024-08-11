import {Elysia} from 'elysia'
import {swagger} from '@elysiajs/swagger'
import {cors} from "@elysiajs/cors";
import {jwt} from '@elysiajs/jwt'
import errorMiddleware from "./app/middleware/errorMiddleware";
import authRoutes from "./app/routes/auth";
const init = () => {
    const jwtConfig: any = {
        name: 'jwt',
        //when run test the env is not loaded
        iss: process.env.HOST,
        aud:process.env.APP_DOMAIN,
        secret: process.env.APP_SECRET_KEY,
        exp: process.env.JWT_TOKEN_VALIDITY,
    }
    return new Elysia()
        .use(cors())
        .use(swagger({
            path: '/api-docs',
            version: process.env.APP_VERSION,
            documentation: {
                info: {
                    title: 'Elysia template',
                    description: 'Elysia template API Documentation',
                    version: '1.0.0',
                },
                components: {
                    securitySchemes: {
                        JwtAuth: {
                            type: 'http',
                            scheme: 'bearer',
                            bearerFormat: 'JWT',
                            description: 'Enter JWT Bearer token **_only_**'
                        }
                    }
                },
            },
            swaggerOptions: {
                persistAuthorization: true,
            }
        }))
        .trace(async ({onHandle}) => {
            onHandle(({begin, onStop}) => {
                onStop(({end}) => {
                    console.log('handle took', end - begin, 'ms')
                })
            })
        })
        .get('/', () => 'Hi')
        .onError(errorMiddleware)
        .use(jwt(jwtConfig))
        .group("/api", (group) =>
            group
                .use(authRoutes));

};

const run = (app: Elysia, port: string): void => {
    app.listen(port)
    // global app for fastify
    console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
    console.log(`🚀 Swagger UI is running at http://${app.server?.hostname}:${app.server?.port}/api-docs`)
};

export {init, run};