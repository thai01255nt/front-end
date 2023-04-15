import { CommonConsts } from "../commons/consts"


const login = (email: string, password: string) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }
    return fetch(`${CommonConsts.REACT_APP_API_URL}/login`, requestOptions)
        .then(handleReponse)
        .then((response) => {
            sessionStorage.setItem("user", JSON.stringify(response))
            return response
        })
}

const logout = () => {
    sessionStorage.removeItem("user")
}

const handleReponse = (response: any) => {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 400) {
                logout()
            }
            const error = (data && data.errors) || response.statusText
            return Promise.reject(error)
        }
        return data
    })
}

export const userService = {
    login,
    logout,
}
