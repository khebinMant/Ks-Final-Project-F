import { backEndApi } from "../../api/backEndApi";


export const updateUser = async (user) => {
    try {
        let resp;
        
        //llamando el endpoint de customer y admin para crear usuario
        if(user.role=="ADMIN"){
             resp = await backEndApi.put(`admin/update/${user.id}`, user);
        }else{
             resp = await backEndApi.put(`customer/update/${user.id}`, user);
        }
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}