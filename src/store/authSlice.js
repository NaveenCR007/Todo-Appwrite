import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    taskId: null,
    editTaskTitle: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload
        },

        logout: (state, action) => {
            state.status = false
            state.userData = null
        },

        editableTask: (state, action) => {
            state.taskId = action.payload.taskId
            state.editTaskTitle = action.payload.taskTitle
        }
    }
})

export const { login, logout, editableTask } = authSlice.actions;
export default authSlice.reducer;