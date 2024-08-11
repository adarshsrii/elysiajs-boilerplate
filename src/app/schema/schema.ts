import {t} from "elysia";

const auth_schema= {
    detail: {
        tags: ['auth'],
    },
    body: t.Object({
        username: t.String(),
        password: t.String()
    })
}

const auth_response_schema= {
    detail: {
        tags: ['auth'],
        security: [
            {JwtAuth: []}
        ],
    }
}

export { auth_schema,auth_response_schema };