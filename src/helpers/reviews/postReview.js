import { productsApi } from "../../api/productsApi"

export const postReview= async (review)=>{
    try{

        const resp = await productsApi.post(`/reviews`,review)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}