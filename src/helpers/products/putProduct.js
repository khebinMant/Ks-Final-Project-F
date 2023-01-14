import { productsApi } from "../../api/productsApi"

export const putProduct= async (product)=>{
    try{

        const resp = await productsApi.put(`/products/${product.id}`,product)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}