import { api } from "../helpers"


const login = (email: string, password: string) => {
    const body = { email, password }
    return api.post("/login", body)
}

const loadUserByID = (userID: string) => {
    return api.get(`/users/${userID}`)
}

const createUser = (email: string, defaultPassword: string, repeatDefaultPassword: string, adminNameBroker: string | undefined) => {
    const body = { email, defaultPassword, repeatDefaultPassword, adminNameBroker }
    return api.post("/users", body)
}

const resetPassword = (oldPassword: string, newPassword: string, repeatNewPassword: string) => {
    const body = { oldPassword, newPassword, repeatNewPassword }
    return api.put("/users", body)
}

const loadUserPagination = (page: number, pageSize: number) => {
    return api.get(`/users?page=${page}&pageSize=${pageSize}`)
}

const loadUserMembership = (userID: string) => {
    return api.get(`/userClientMemberships/users/${userID}/clients`)
}

const addClientMembership = (userID: number, idClient: string) => {
    const body = {userID, idClient}
    return api.post(`/userClientMemberships`, body)
}

export const userService = {
    login,
    createUser,
    loadUserPagination,
    loadUserMembership,
    loadUserByID,
    addClientMembership,
    resetPassword,
}
