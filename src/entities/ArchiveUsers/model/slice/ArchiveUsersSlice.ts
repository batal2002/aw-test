import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../../../shared/model/type/User";

interface ArchiveUsersState {
    users: User[];
}

const initialState: ArchiveUsersState = {
    users: [],
}

export const archiveUsersSlice = createSlice({
    name: 'archiveUsers',
    initialState,
    reducers: {
        archiveUser(state, action: PayloadAction<User>) {
            state.users.push(action.payload)
        },
        activateUser(state, action: PayloadAction<number>) {
            state.users = state.users.filter(user => user.id != action.payload)
        },
    },
})

export const { archiveUser, activateUser } = archiveUsersSlice.actions

export default archiveUsersSlice.reducer
