import { productsApi } from "../../api/productsApi"

export const getProductByName= async (name)=>{
    try{

        const resp = await productsApi.get(`/products/name?name=${name}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}