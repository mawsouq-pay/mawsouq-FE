//Used in the authSlice
export interface AuthState {
    isAuthenticated: boolean;
    authToken: string | null;
    user: User | null;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
}
