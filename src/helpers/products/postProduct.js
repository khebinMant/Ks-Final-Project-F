import { backEndApi } from "../../api/backEndApi"

export const postProduct= async (product)=>{
    try{

        const resp = await backEndApi.post(`/products`,product)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}