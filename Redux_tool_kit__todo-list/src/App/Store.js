import { configureStore } from '@reduxjs/toolkit';
import TodoReduer from "../Features/Todo/TodoSlice"
const Store = configureStore({
    reducer: TodoReduer
})

export default Store