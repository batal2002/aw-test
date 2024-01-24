import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {User} from "../../../../shared/model/type/User";

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string}>(
    'users/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                params: {
                    _limit: 6
                }
            })

            return response.data
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.message)
            }
            return rejectWithValue('Error')
        }
    }
)

