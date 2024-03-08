import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: number;
    text: string;
};

type TodoState = {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos.splice(action.payload, 1);
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;