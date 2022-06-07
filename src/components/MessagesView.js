import { templateMessages, getTableHead, getTableEnd } from "./MsgsTemplate.js";
import { messagesStore } from "../stores/messages_store.js";
import updateMsgAction from "../actions/messages_actions.js";

const apiToken = "5380832524:AAGllo9zZHV2jE1viG6HjFOR1g9tBGza0ys";
const urlBase = "https://api.telegram.org/bot";

export default function MessagesView(container) {
  const url = `${urlBase}${apiToken}/getUpdates`;

  function render(message) {
    const messagesStr = templateMessages(message);
    const a = `${getTableHead()}${messagesStr}${getTableEnd()}`;
    return (container.innerHTML = a);
  }

  function getUpdate(url) {
    return fetch(url)
      .then((d) => d.json())
      .then((data) => data);
  }

  getUpdate(url).then((r) => {
    r.result.forEach(({ message }) => {
      messagesStore.dispatch(updateMsgAction(message));
    });
    messagesStore.getState();
    const a = messagesStore.getState();
    a.forEach((el) => {
      render(el);
    });
  });
}
