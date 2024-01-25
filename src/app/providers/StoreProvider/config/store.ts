import {combineReducers, configureStore} from "@reduxjs/toolkit";
import appReducer from '../../../model/slice/AppSlice'
import {usersReducer} from "../../../../entities/Users";
import {archiveUsersReducer} from "../../../../entities/ArchiveUsers";
import {userReducer} from "../../../../entities/User";
import profileFormReducer from "../../../../entities/ProfileForm/model/slice/ProfileFormSlice";

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    users: usersReducer,
    archiveUser: archiveUsersReducer,
    profileForm: profileFormReducer
})

export const store = configureStore({
    reducer: rootReducer
})
