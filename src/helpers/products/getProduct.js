import { backEndApi } from "../../api/backEndApi"

export const getProduct= async (id)=>{
    try{

        const resp = await backEndApi.get(`/products/${id}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}