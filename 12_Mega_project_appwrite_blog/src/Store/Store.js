import { configureStore } from "@reduxjs/toolkit"
import Authentication_slice from "./Features/Authentication_slice/"
const Store = configureStore({
    reducer: {
        authentication: Authentication_slice
    }
})
export default Store