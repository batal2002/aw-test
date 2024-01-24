import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../services/fetchUsersData";
import {User} from "../../../../shared/model/type/User";

interface UsersState {
    users: User[];
    isLoading: boolean;
    error: string | undefined;
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: '',
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        hideUser(state, action: PayloadAction<number>) {
            state.users = state.users.filter(user => user.id != action.payload)
        },
        addUser(state, action: PayloadAction<User>) {
            state.users.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.isLoading = false
                state.error = ''
                state.users = action.payload
            })
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchUsers.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false
                state.error = action.payload
            })
    }

})

export const { hideUser, addUser } = usersSlice.actions

export default usersSlice.reducer
