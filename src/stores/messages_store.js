import createStore from "../flux.js";

const initState = {
  time: null,
  userName: null,
  text: "",
};
const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case "update_message":
      return (state = [
        {
          time: action.payload.time,
          userName: action.payload.userName,
          text: action.payload.text,
        },
      ]);
    default:
      return state;
  }
};

export const messagesStore = createStore(messagesReducer, initState);
