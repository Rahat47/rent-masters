export const login = (payload) => {
    return {
        type: "AUTH",
        data: payload
    }
}

export const getUser = () => {
    return {
        type: "CURRENT_USER"
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}