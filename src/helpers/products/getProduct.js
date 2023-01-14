import { productsApi } from "../../api/productsApi"

export const getProduct= async (id)=>{
    try{

        const resp = await productsApi.get(`/products/${id}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}