// actions for authorization and (probably) dispatcher

export function logIn({ token, stayOnline }) {
  if (stayOnline) {
    localStorage.setItem('token', token);
  }
  return {
    type: 'LOG_IN',
    payload: token,
  };
}
export function logOut() {
  localStorage.removeItem('token');
  return {
    type: 'LOG_OUT',
  };
}
