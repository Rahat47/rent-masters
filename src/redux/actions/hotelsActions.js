
export const getAll = () => {
    return {
        type: "FETCH_ALL"
    }
}

export const add = (payload) => {
    return {
        type: "ADD",
        payload
    }
}

export const remove = (payload) => {
    return {
        type: "DELETE",
        payload
    }
}