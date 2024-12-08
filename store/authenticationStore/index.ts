import { AuthState, User } from '@/types/authType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    isAuthenticated: false,
    authToken: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (
            state,
            action: PayloadAction<{ authToken: string; refreshToken: string; user: User }>
        ) => {
            state.isAuthenticated = true;
            state.authToken = action.payload.refreshToken;
            state.user = action.payload.user;

            localStorage.setItem('refreshToken', action.payload.refreshToken);
        },
        logout: (state,
        ) => {
            state.isAuthenticated = false;
            state.authToken = null;
            state.user = null;

            localStorage.removeItem('refreshToken');
        },
        updateAuthToken: (state, action: PayloadAction<{ authToken: string }>) => {
            state.authToken = action.payload.authToken;
        },
        initApp: (state) => {
            //Everytime app is initialized , use refresh token to request a new auth token 
            const refreshToken = localStorage.getItem('refreshToken');

            if (refreshToken) {
                state.isAuthenticated = true;
            }
        },
    },
});

export const { loginSuccess, logout, updateAuthToken } = authSlice.actions;
export default authSlice.reducer;
