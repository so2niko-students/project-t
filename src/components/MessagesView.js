import { templateMessages, getTableHead, getTableEnd } from "./MsgsTemplate.js";
import { messagesStore } from "../stores/messages_store.js";
import messageAction from "../actions/messages_actions.js";

const apiToken = "5380832524:AAGllo9zZHV2jE1viG6HjFOR1g9tBGza0ys";
const urlBase = "https://api.telegram.org/bot";

export default function MessagesView(MAIN) {
  const url = `${urlBase}${apiToken}/getUpdates`;

  function render(messages) {
    const messagesStr = messages.map((msgObj) => {
      console.log(msgObj);
      msgObj = msgObj.message || msgObj.edited_message;
      const time = new Date(msgObj.date * 1000)
        .toString()
        .match(/\d{2}:\d{2}/)[0];
      const userName = msgObj.from.first_name;
      const text = msgObj.text;
      return templateMessages(time, userName, text);
    });

    const table = `${getTableHead()}${messagesStr}${getTableEnd()}`;

    MAIN.innerHTML = table;
  }

  function getUpdate(url) {
    return fetch(url)
      .then((d) => d.json())
      .then((data) => {
        if (data) {
          return data.result;
        } else {
          return [];
        }
      });
  }

  getUpdate(url).then((r) => {
    console.log(r);
    messagesStore.dispatch(messageAction(r));
    const dataInStore = messagesStore.getState();
    render(dataInStore);
  });
}
