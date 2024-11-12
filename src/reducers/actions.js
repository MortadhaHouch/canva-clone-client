import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    isLoggedIn:false,
    data:{
        email:"",
        firstName:"",
        lastName:"",
        avatar:""
    }
}
export const slice = createSlice({
    initialState,
    name:"auth",
    reducers:{
        setIsLoggedIn(state,action){
            state.isLoggedIn = action.payload
        },
        setData(state,action){
            state.data = action.payload
        }
    }
})
export const {setData,setIsLoggedIn} = slice.reducer