// authRoutes.ts
import { Elysia, t } from 'elysia';
import isAuthenticated from './../middleware/isAuthenticated';
import { auth_schema, auth_response_schema } from '../schema/schema';
import AuthController from '../controllers/auth.controller';

const authController = new AuthController();

const authRoutes = new Elysia()
    .group('/auth', (group) =>
        group
            .post('/register', async ({ body }) => {
                return authController.registerUser(body);
            }, auth_schema)

            .post('/login', async ({ userService, body, jwt }: any) => {
                return authController.loginUser(body,jwt);
            }, auth_schema)

            .derive(isAuthenticated())

            .get('/me', async ({ user }) => {
                return authController.getUserProfile(user);
            }, auth_response_schema)
    );

export default authRoutes;
