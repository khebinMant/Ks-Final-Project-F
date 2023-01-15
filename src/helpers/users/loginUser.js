import { userApi } from "../../api/userApi"


export const loginUser= async (email,password)=>{
    try{
        const loginReq={
            "email":email,
            "password":password
        }
        //llamando el endpoint de customer y admin para logear el usuario
        const post=await userApi.post("customer/login",loginReq);

      // const resp = await userApi.get("customer/");

        //console.log(resp.data);

    }catch(error){
        throw new Error(error.message)
    }
}