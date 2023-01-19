import { backEndApi } from "../../api/backEndApi"

export const getAllProducts= async ()=>{
    try{

        const resp = await backEndApi.get(`/products/all`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}