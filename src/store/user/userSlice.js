import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "users",
    initialState:{
        users: [],
        currentUser: null,
    }, reducers:{
        setCurrentUser : (state, {payload})=>{
            state.currentUser = payload
          },
          setUsers : (state, {payload})=>{
            state.users = payload
          },
          addUser : (state, {payload})=>{
            state.users.push(payload)
          }
    }



})

export const {
    setCurrentUser,
    setUsers,
    addUser
}= userSlice.actions;