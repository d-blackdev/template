import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducers'


const middleware = [thunk]

const store = createStore(userReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store