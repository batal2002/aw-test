import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {UserForUpdate} from "../../../../shared/model/type/UserForUpdate";

export const updateUser = createAsyncThunk<number, UserForUpdate, { rejectValue: string }>(
    'users/updateUser',
    async (yourData, {rejectWithValue}) => {
        const {id, username, name, company, phone, email, address} = yourData;

        try {
            const response = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                name: name,
                username: username,
                company: {
                    name: company?.name
                },
                phone,
                email,
                address: {
                    city: address?.city
                }
            })

            return response.status
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.message)
            }
            return rejectWithValue('Error')
        }
    }
)
