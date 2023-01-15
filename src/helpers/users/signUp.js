import { json } from "react-router-dom";
import { userApi } from "../../api/userApi"


export const signUp = async (user) => {
    try {
        let resp;
        
        //llamando el endpoint de customer y admin para crear usuario
        if(user.role=="ADMIN"){
             resp = await userApi.post("admin", user);
        }else{
             resp = await userApi.post("customer", user);
        }
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}