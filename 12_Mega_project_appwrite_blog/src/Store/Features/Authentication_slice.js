import { createSlice } from "@reduxjs/toolkit"

// this slice for track user authenticated or not


const initialState = {
    status: false,
    userdata: null
}
const authentication_Slice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userdata = action.payload.userdata
        },
        logout: (state) => {
            state.status = false;
            state.userdata = null
        }
    }
})
export const { login, logout } = authentication_Slice.actions
export default authentication_Slice.reducer