export default function createStore(reducer, state) {
  let currentState = state;
  const listeners = [];

  function getState() {
    return currentState;
  }

  function getListeners() {
    return listeners;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      listeners.splice(listeners.indexOf(listener), 1);
    };
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener(currentState));
  }

  return { dispatch, subscribe, getState, getListeners };
}
