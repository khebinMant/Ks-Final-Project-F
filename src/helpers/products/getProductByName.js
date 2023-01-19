import { backEndApi } from "../../api/backEndApi"

export const getProductByName= async (name)=>{
    try{

        const resp = await backEndApi.get(`/products/name?name=${name}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}