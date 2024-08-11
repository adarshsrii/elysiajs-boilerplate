// authController.ts
import { prismaDb } from '../../../prisma-db';
import { Response } from '../common/response';

class AuthController {
    async registerUser(body: any) {
        return prismaDb.user.create({ data: body });
    }

    async loginUser(body: any, jwt:any) {
        const user = await prismaDb.user.findFirst({ where: { username: body.username } });

        if (!user) {
            throw new Error('User not found');
        }
        const accessJWTToken = await jwt.sign({
            sub: user.id,
            iat: Math.floor( Date.now()/ 1000),
            user:user
        });

        const payload = {
            token: accessJWTToken,
            user: user,
        };

        return new Response(payload);
    }

    async getUserProfile(user: any) {
        console.log(user);
        const { password, ...result } = user;
        return new Response(result);
    }
}

export default AuthController;
