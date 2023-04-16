import { api } from "../helpers"


const login = (email: string, password: string) => {
    const body = { email, password }
    return api.post("/login", body)
}

export const userService = {
    login
}
