import { backEndApi } from "../../api/backEndApi"

export const postReview= async (review)=>{
    try{

        const resp = await backEndApi.post(`/reviews`,review)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}