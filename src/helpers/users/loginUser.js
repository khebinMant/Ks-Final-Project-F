import { userApi } from "../../api/userApi"


export const loginUser = async (email, password) => {
    try {
        const loginReq = {
            "email": email,
            "password": password
        }
        //llamando el endpoint de customer y admin para logear el usuario
        let resp = await userApi.post("customer/login", loginReq);
        if (!resp.data || resp.data == "") {
            resp = await userApi.post("admin/login", loginReq);
        }
        return resp.data;

    } catch (error) {
        throw new Error(error.message)
    }
}