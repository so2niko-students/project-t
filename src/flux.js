export default function createStore(reducer, state) {
    const currentReducer = reducer;
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
  
    function dispatcher(action) {
      currentState = currentReducer(currentState, action);
      listeners.forEach((listener) => listener(currentState));
      return action;
    }
  
    return { dispatcher, subscribe, getState, getListeners };
  }