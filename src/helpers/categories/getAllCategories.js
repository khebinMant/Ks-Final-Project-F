import { backEndApi } from "../../api/backEndApi"

export const getAllCategories= async ()=>{
    try{

        const resp = await backEndApi.get(`/categories`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}