import templateMessages from "./MsgsTemplate.js";
import updateMsgAction from "../actions/messages_actions.js";
import { messagesStore } from "../stores/messages_store.js";

const apiToken = "5380832524:AAGllo9zZHV2jE1viG6HjFOR1g9tBGza0ys";
const urlBase = "https://api.telegram.org/bot";
// const CHAT_ID = 520728880;

export function MessagesView(MAIN) {
  // const template = templateMessages;
  // const users = JSON.parse(localStorage.getItem("users") || "{}");
  const url = `${urlBase}${apiToken}/getUpdates`;
  console.log(url);

  function render(messages) {
    console.log(messages);
    const messagesStr = messages.map((m) => console.log(m));
    //   templateMessages(m))
    // .join("");

    const result = `<table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Time</th>
            <th scope="col">Author</th>
            <th scope="col">Message</th>
            </tr>
        </thead>
        <tbody>
        ${messagesStr}
        </tbody></table>`;

    return (MAIN.innerHTML = result);
  }

  render(messagesStore.getState());
  let updates = [];
  function getUpdate() {
    return fetch(url)
      .then((d) => d.json())
      .then((data) => {
        updates.push(data.result[0].message);

        console.log(updates);
        console.log(updates.length);

        // messagesStore.getState.result.forEach((upd) => {
        //   upd.message = upd.message || upd.edited_message;
        // });
      });
  }

  console.log(updates);
  console.log(updates.length);
  // messagesStore.dispatch(updateMsgAction(updates[0]));
  getUpdate();
}
