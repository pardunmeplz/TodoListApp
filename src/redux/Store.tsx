import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './Slices/TodoSlice'
const store = configureStore(
    {reducer:{
        todo: TodoSlice
    }})

export type RootState = ReturnType<typeof store.getState>
// since get state returns same object type as a reducer

export default store