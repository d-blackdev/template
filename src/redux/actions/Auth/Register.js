// import { setAuthToken } from '../../../setAuthToken'
// import { load_user, register_success, register_failure,  register_loading,auth_error } from '../actionCreators'
import axios from 'axios'
import { loadUser } from './Login'
// import { loadUser } from './Login'
import {REGISTER_SUCCESS,REGISTER_FAILURE,REGISTER_LOADING, REGISTER_ERROR} from '../../actions/actionTypes'



export const register = (firstName, lastName, email, password) => async dispatch => {
    dispatch({
        type:REGISTER_LOADING
    })
    try {
        const body = JSON.stringify({ firstName, lastName, email, password })
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }
        const response = await axios.post('http://localhost:3002/user/register', body)
        dispatch({
            type: REGISTER_SUCCESS,
            payload:response.data
        })
        dispatch(loadUser())
    } catch (error) {
        dispatch({
            type: REGISTER_ERROR,
            payload:error.response ? error.response.data : "COULD NOT CONNECT",
        });
    }
}