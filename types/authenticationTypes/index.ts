
export interface User {
    name: string;
    phone: string;
    email: string;
    password: string;
}
export interface LoginInput {
    email: string;
    password: string;
}

export interface LoginResponse {
    id: string;
    phone: string;
    name: string;
    email: string;
}
export interface RegisterInput {
    name: string;
    phone: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    id: string;
    phone: string;
    name: string;
    email: string;
}