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
          setUser : (state, {payload})=>{
            state.user = payload
          },
    }



})

export const {
    setCurrentUser,
    setUser
}= userSlice.actions;