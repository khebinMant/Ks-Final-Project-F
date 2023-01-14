import { productsApi } from "../../api/productsApi"

export const postProduct= async (product)=>{
    try{

        const resp = await productsApi.post(`/products`,product)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}