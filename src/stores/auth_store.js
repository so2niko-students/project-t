import createStore from "../flux.js";
import authReducer from "../reducers/authReducer.js";

const initialState = {
    isAuth: false,
    token: null,
}
export const authStore = createStore(authReducer, initialState)