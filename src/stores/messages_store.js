//https://api.telegram.org/bot5380832524:AAGllo9zZHV2jE1viG6HjFOR1g9tBGza0ys/sendMessage?chat_id=520728880&text=Hello

// chat_id=520728880
// const apiToken = "5380832524:AAGllo9zZHV2jE1viG6HjFOR1g9tBGza0ys";
// const apiToken = localStorage.getItem("apiToken");
// const urlBase = "https://api.telegram.org/bot";

import createStore from "../../flux.js";

const initState = [
  //? может не оборачивать в массив
  {
    time: null,
    userName: null,
    text: "",
  },
];

const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    case "update_message":
      return (state = [
        {
          //?может не массив должен быть?
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
