import {User} from "../../../../shared/model/type/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser} from "../services/fetchUserData";


interface UserState {
    user: User | null
    isLoading: boolean
    error: string | undefined
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserError(state) {
            state.error = ''
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
    }

})

export const {resetUserError} = userSlice.actions

export default userSlice.reducer
