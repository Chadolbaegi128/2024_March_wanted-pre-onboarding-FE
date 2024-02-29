import {  configureStore, createSlice } from "@reduxjs/toolkit";

let nextId = 1;

const todos = createSlice({
    
})

export const store = configureStore({
    reducer: {

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch