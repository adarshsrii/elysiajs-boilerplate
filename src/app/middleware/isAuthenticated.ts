import {AppRole} from "../../roles/index";

const isAuthenticated = (roles: AppRole[] = []) => {
    return async ({headers, jwt}: any) => {
        //get headers
        const {authorization} = headers;
        if (!authorization) {
            throw new Error("Authorization header not found");
        }
        //get token
        const token = authorization.split(" ")[1];
        if (!token) {
            throw new Error("Token not found");
        }
        //verify token
        const user = await jwt.verify(token);
        if (!user) {
            throw new Error("Token is invalid");
        }
        //add user to request
        return {user};
    }
}

export default isAuthenticated