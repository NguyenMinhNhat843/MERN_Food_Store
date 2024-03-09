import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './userSlice'
import productSlice from './productSlice';

export const store = configureStore({
    // reducer: userSliceReducer
    reducer: {
        user: userSliceReducer,
        product: productSlice
    }
});