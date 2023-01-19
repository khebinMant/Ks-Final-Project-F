import { backEndApi } from "../../api/backEndApi"

export const putProduct= async (product)=>{
    try{

        const resp = await backEndApi.put(`/products/${product.id}`,product)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}