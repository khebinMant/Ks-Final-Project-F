import { backEndApi } from "../../api/backEndApi";


export const signUp = async (user) => {
    try {
        let resp;
        
        //llamando el endpoint de customer y admin para crear usuario
        if(user.role=="ADMIN"){
             resp = await backEndApi.post("admin", user);
        }else{
             resp = await backEndApi.post("customer", user);
        }
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}