import { productsApi } from "../../api/productsApi"

export const getAllCategories= async ()=>{
    try{

        const resp = await productsApi.get(`/categories`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}