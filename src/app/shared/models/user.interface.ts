export type Roles ="admin"|"doctor"|"pacieente"|null;

export interface User {
    user: string,
    password:string
}

export interface UserResponse{
    message: string,
    token: string,
    idUser:string,
    user: string,
    idRol: number,
    rol: Roles
}