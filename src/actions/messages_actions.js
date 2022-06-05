// actions for messages and (probably) dispatcher
function MessagesAction(newMessage) {
  type: "message/send";
  payload: {
    time: new Date(newMessage.date * 1000).toString().match(/\d{2}:\d{2}/)[0];
    userName: newMessage.from.first_name;
    text: newMessage.text;
  }
  // sendNewMessage(text) {
  //   actionType: "new message";
  //   payload: text;
  // }
}

export default MessagesAction;

//вызываем экшен, передаещь ему данные, он что-то делает с полученными данными и обновляет стор
