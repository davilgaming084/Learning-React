import { configureStore } from '@reduxjs/toolkit';
import TodoReduer from "../Features/Todo/TodoSlice"
export const Store = configureStore({
    reducer:TodoReduer
})