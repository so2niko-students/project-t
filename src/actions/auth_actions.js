// actions for authorization and (probably) dispatcher

export function authIn(token) {
  return {
    type: `AUTH_IN`,
    payload: token,
  };
}
