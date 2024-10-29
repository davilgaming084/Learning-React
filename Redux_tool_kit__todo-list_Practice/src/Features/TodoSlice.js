import { createSlice, nanoid } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "Todos",
    initialState: { Todos: [] },
    reducers: {
        addtodo: (state, action) => {
            state.Todos.push({ id: nanoid(), text: action.payload })
        },
        removetodo: (state, action) => {
            state.Todos = state.Todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export default TodoSlice.reducer
export const { addtodo, removetodo } = TodoSlice.actions
