const messageAction = (messages) => {
  return {
    type: "update_message",
    payload: messages,
  };
};
export default messageAction;
