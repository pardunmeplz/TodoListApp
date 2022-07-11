import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './Slices/TodoSlice'
import UserSlice from './Slices/UserSlice'
const store = configureStore(
    {reducer:{
        todo: TodoSlice,
        user: UserSlice
    }})

export type RootState = ReturnType<typeof store.getState>
// since get state returns same object type as a reducer

export default store