import {User} from "../../../../shared/model/type/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser} from "../services/fetchUserData";
import {updateUser} from "../services/updateUser";


interface UserState {
    user: User | null
    updateStatus: number | null
    isLoading: boolean
    isUpdating: boolean
    error: string | undefined
    updatingError: string | undefined
}

const initialState: UserState = {
    user: null,
    updateStatus: null,
    isLoading: false,
    isUpdating: false,
    error: '',
    updatingError: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState(state) {
            state.updateStatus = null
            state.error = ''
            state.updatingError = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false
                state.error = ''
                state.user = action.payload
            })
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchUser.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateUser.fulfilled, (state, action: PayloadAction<number>) => {
                state.isUpdating = false
                state.updateStatus = action.payload
            })
            .addCase(updateUser.pending, (state) => {
                state.isUpdating = true
            })
            .addCase(updateUser.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isUpdating = false
                state.updatingError = action.payload
            })
    }

})

export const {resetState} = userSlice.actions

export default userSlice.reducer
