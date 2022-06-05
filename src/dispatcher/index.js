const urlBase = "https://api.telegram.org/bot";
let updates = null;

export function getUpdates() {
  const apiToken = localStorage.getItem("apiToken");
  return fetch(urlUpd(apiToken))
    .then((d) => d.json())
    .then((data) => {
      updates = data;
      updates.result.forEach((upd) => {
        upd.message = upd.message || upd.edited_message;
      });
      saveUsers(); //? add it only in Store and run there
    });
}

export function urlUpd(apiToken) {
  return `${urlBase}${apiToken}/getUpdates`;
}

export const saveUsers = () => {
  this.updates.result.forEach((upd) => {
    if (!this.users.hasOwnProperty(upd.message.chat.id)) {
      this.users[upd.message.chat.id] =
        upd.message.chat.id > 0
          ? upd.message.chat.first_name
          : upd.message.chat.title;
    }
  });
  localStorage.setItem("users", JSON.stringify(this.users));
};
