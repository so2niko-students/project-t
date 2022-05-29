export default function authReducer(state, action) {
    switch (action.type) {
        case `AUTH_IN`:
             return {isAuth: true, token: action.payload }

        default:
            return state;
    }
}