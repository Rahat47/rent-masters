const authReducer = (state = { authData: JSON.parse(localStorage.getItem("user")) }, action) => {
    switch (action.type) {
        case "LOGOUT":
            localStorage.clear()
            return { ...state, authData: null }
        case "AUTH":
            localStorage.setItem('user', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data }
        default:
            return state
    }
}

export default authReducer