import { productsApi } from "../../api/productsApi"

export const getAllProducts= async ()=>{
    try{

        const resp = await productsApi.get(`/products`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}