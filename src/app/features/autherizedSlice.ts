import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const autherizedSlice = createSlice({
    name:'isOnline',
    initialState,
    reducers:{
        onLine: (state) => {
            state.value = true;
        },
        offLine: (state) => {
            state.value = false;
        }
    }
})

export const {onLine, offLine} = autherizedSlice.actions
export default autherizedSlice.reducer;