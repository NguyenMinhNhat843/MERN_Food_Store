import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    isLoaded: false
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
            state.productList = [...action.payload]
            state.isLoaded = true          
        }
    }
})

export const { setDataProduct } = productSlice.actions
export default productSlice.reducer 