export default function authReducer(state, action) {
  switch (action.type) {
    case `LOG_IN`:
      return { isAuth: true, token: action.payload };
    case "LOG_OUT":
      return { isAuth: false, token: null };
    default:
      return state;
  }
}