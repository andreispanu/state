import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean;
    user: {
        username: string;
        email: string;
    } | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{username: string; email: string}>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;