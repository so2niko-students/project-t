import { templateMessages, getTableHead, getTableEnd } from "./MsgsTemplate.js";
import { messagesStore } from "../stores/messages_store.js";
import updateMsgAction from "../actions/messages_actions.js";

const apiToken = "5380832524:AAGllo9zZHV2jE1viG6HjFOR1g9tBGza0ys";
const urlBase = "https://api.telegram.org/bot";

export default function MessagesView(MAIN) {
  const url = `${urlBase}${apiToken}/getUpdates`;

  function render(message) {
    console.log(message);
    const messagesStr = templateMessages(message);
    const a = `${getTableHead()}${messagesStr}${getTableEnd()}`;
    return (MAIN.innerHTML = a);
  }

  function getUpdate(url) {
    return fetch(url)
      .then((d) => d.json())
      .then((data) => {
        saveUsers(data);
        return data;
      });
  }

  getUpdate(url).then((r) => {
    // console.log(r.result);
    const renderAll = r.result.map((obj) => obj.message);
    render(renderAll);
    r.result.forEach((allMessages) => {
      messagesStore.dispatch(
        updateMsgAction(allMessages.message || allMessages.edited_message)
      );

      messagesStore.getState();
      const a = messagesStore.getState();
      // console.log(a);

      a.forEach((el) => {
        render(el);
      });
    });
  });

  function saveUsers(userData) {
    localStorage.setItem("users", JSON.stringify(userData));
    //TODO complete with info inside
  }
}
