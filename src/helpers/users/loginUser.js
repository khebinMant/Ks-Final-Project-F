import { backEndApi } from "../../api/backEndApi";


export const loginUser = async (email, password) => {
    try {
        const loginReq = {
            "email": email,
            "password": password
        }
        //llamando el endpoint de customer y admin para logear el usuario
        let resp = await backEndApi.post("customer/login", loginReq);
        if (!resp.data || resp.data == "") {
            resp = await backEndApi.post("admin/login", loginReq);
        }
        return resp.data;

    } catch (error) {
        return null;
        
    }
}