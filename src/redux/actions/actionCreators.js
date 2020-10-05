import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR, AUTH_ERROR, LOAD_USER } from '../actions/actionTypes'
// import { setAuthToken } from '../../setAuthToken';

export const load_user = (user) => {
    return {
        type: LOAD_USER,
        payload: user,
    }
}
export const register_loading = () => {
    return {
        type: REGISTER_LOADING
    }
}
export const login_loading = () => {
    return {
        type: LOGIN_LOADING
    }
}
export const register_success = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload:data
    }
}
export const register_failure = (error) => {
    return {
        type: REGISTER_ERROR,
        payload:error
    }
}
export const login_success = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload:data
    }
}
export const login_failure = (error) => {
    return {
        type: LOGIN_ERROR,
        payload:error
    }
}
// export const logout_loading = () => {
//     return {
//         type: LOGOUT_LOADING,
        
//     }
// }
export const auth_error = (error) => {
    return {
        type: AUTH_ERROR,
        payload:error
    }
}