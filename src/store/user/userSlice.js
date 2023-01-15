import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "users",
    initialState:{
        user: {},
        currentUser: null,
    }, reducers:{
        setCurrentUser : (state, {payload})=>{
            state.currentUser = payload
          },
  
    }



})

export const {
    setCurrentUser

}= userSlice.actions;