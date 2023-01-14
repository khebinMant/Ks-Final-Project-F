import { productsApi } from "../../api/productsApi"

export const deleteProduct= async (productId)=>{
    try{

        const resp = await productsApi.delete(`/products/${productId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}