import { json } from "react-router-dom";
import { userApi } from "../../api/userApi"


export const updateUser = async (user) => {
    try {
        let resp;
        
        //llamando el endpoint de customer y admin para crear usuario
        if(user.role=="ADMIN"){
             resp = await userApi.put(`admin/update/${user.id}`, user);
        }else{
             resp = await userApi.put(`customer/update/${user.id}`, user);
        }
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}