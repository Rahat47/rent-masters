
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