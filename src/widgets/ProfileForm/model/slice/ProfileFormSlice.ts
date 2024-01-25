import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {updateUser} from "../services/updateUser";


interface UserState {
    updateStatus: number | null
    isUpdating: boolean
    updatingError: string | undefined
}

const initialState: UserState = {
    updateStatus: null,
    isUpdating: false,
    updatingError: '',
}

export const profileFormSlice = createSlice({
    name: 'profileForm',
    initialState,
    reducers: {
        resetProfileFormState(state) {
            state.updateStatus = null
            state.updatingError = ''
        }
    },
    extraReducers: (builder) => {
        builder
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

export const {resetProfileFormState} = profileFormSlice.actions

export default profileFormSlice.reducer
