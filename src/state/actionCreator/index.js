export const setUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: "set_user",
            payload: user
        });
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: "logout_user",
            payload: null
        });
    }
}