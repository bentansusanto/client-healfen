export type InitialLoginValues = {
    email: string;
    password: string;
}

export type InitialRegisterValues = {
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
    isAdmin: boolean;
}