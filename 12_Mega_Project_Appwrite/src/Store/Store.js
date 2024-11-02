import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../Store/authslice"
const Store = configureStore(
    {
        reducer: authReducer
    }
)

export default Store