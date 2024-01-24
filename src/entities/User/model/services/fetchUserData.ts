import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {User} from "../../../../shared/model/type/User";

export const fetchUser = createAsyncThunk<User, string, { rejectValue: string }>(
    'users/fetchById',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

            return response.data
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.message)
            }
            return rejectWithValue('Error')
        }
    }
)

