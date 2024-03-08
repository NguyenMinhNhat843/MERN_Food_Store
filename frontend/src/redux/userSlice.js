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
            // state.user = action.payload.data
            state.firstName = action.payload.data.firstName
            state.lastName = action.payload.data.lastName
            state.image = action.payload.data.image
            state.email = action.payload.data.email
            state._id = action.payload.data._id
        },
        logoutRedux: (state, action) => {
            state.firstName = ""
            state.lastName = ""
            state.image = ""
            state.email = ""
            state._id = ""
        }
    }
})

export const { loginRedux, logoutRedux } = userSlice.actions
export default userSlice.reducer