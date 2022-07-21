import {configureStore} from '@reduxjs/toolkit'
import { chatReducer } from './reducers/Chat';
import { userReducer } from './reducers/User';

const store = configureStore({
    reducer: {
        myweb: userReducer,
        myweb2: chatReducer
    }
});
export default store;