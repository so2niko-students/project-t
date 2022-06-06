const updateMsgAction = (updateMessage) => {

  const time = new Date(updateMessage.date * 1000)
    .toString()
    .match(/\d{2}:\d{2}/)[0];

  return {
    type: "update_message",
    payload: {
      time,
      userName: updateMessage.from.first_name,
      text: updateMessage.text,
    },
  };
};
export default updateMsgAction;
