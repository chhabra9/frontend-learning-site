export interface User{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address?: {
        street?: string,
        city?: string,
        state?: string
    }
}
