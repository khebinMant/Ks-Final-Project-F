import { backEndApi } from "../../api/backEndApi"

export const deleteProduct= async (productId)=>{
    try{

        const resp = await backEndApi.delete(`/products/${productId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}