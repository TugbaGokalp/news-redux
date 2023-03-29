import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,  //we can write just initialState because they are same
    reducers: { // we write action creators -dispatch functions
        setUser: (state, action)=> {
            state.user = action.payload

        },

        clearUser: (state) => {
            state.user = ""
            
        }


    }

})

export const {setUser,clearUser} = authSlice.actions
export default authSlice.reducer