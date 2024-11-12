import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./actions"
export const store = configureStore({
    reducer:{
        authReducer
    }
})