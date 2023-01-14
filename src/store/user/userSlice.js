import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "users",
    initialState:{
        users: [],
        currentUser: null,
    }, reducers:{
        setCurrentUser : (state, action)=>{
            state.currentUser = action.payload
          },
          setUsers : (state, action)=>{
            state.users = action.payload
          },
          addUser : (state, action)=>{
            state.users =state.users.push(action.payload)
          }
    }



})

export const {
    setCurrentUser,
    setUsers,
    addUser
}= userSlice.actions;