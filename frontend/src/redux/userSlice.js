import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: "",
    lastName: "",
    image: "",
    email: "",
    _id: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action.payload.data)
            // state.user = action.payload.data
            state.firstName = action.payload.data.firstName
            state.lastName = action.payload.data.lastName
            state.image = action.payload.data.image
            state.email = action.payload.data.email
            state._id = action.payload.data._id
        }
    }
})

export const { loginRedux } = userSlice.actions
export default userSlice.reducer