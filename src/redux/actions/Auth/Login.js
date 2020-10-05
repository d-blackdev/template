import { setAuthToken } from '../../../setAuthToken'
import { load_user, login_failure, login_loading, login_success, auth_error } from '../actionCreators';
import axios from 'axios'


export const loadUser = () => async dispatch => {
    if (localStorage.getItem('token')) {
        setAuthToken(localStorage.getItem('token'))
    }
    try {
        
        const response = await axios.get('http://localhost:3002/user/me')
        dispatch(load_user(response.data))
    } catch (error) {
        dispatch(auth_error(error));
    }
}
export const loginUser = (email, password) => async dispatch => {
    dispatch(login_loading())
    try {
        const body = JSON.stringify({  email, password })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const response = await axios.post('http://localhost:3002/user/login', body, config)
        dispatch(login_success(response.data))
        dispatch(loadUser())
    } catch (error) {
        dispatch(login_failure(error));
    }
 }