import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
    windowWidth: number
    isMobile: boolean
}

const initialState: AppState = {
    windowWidth: window.innerWidth,
    isMobile:  window.innerWidth <= 768
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setWindowWidth(state, action: PayloadAction<number>) {
            state.windowWidth = action.payload
            state.isMobile = action.payload <=768
        }
    },

})
export const {
    setWindowWidth
} = appSlice.actions
export default appSlice.reducer
