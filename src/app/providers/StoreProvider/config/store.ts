import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appReducer from '../../../model/slice/AppSlice'
import {usersReducer} from "../../../../entities/Users";
import {archiveUsersReducer} from "../../../../entities/ArchiveUsers";
import {userReducer} from "../../../../entities/User";

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    users: usersReducer,
    archiveUser: archiveUsersReducer,
})

export const store = configureStore({
    reducer: rootReducer
})
