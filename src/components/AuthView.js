import { logIn } from "../actions/auth_actions.js";
import { authStore } from "../stores/auth_store.js";

// View of authorization

export default function AuthView(container) {
  if (localStorage.getItem("token")) {
    authStore.dispatch(logIn({ token: localStorage.getItem("token") }));
  }

  const eventListeners = [
    {
      event: "submit",
      selector: ".auth-form",
      callback: onSubmit,
    },
  ];

  render(authStore.getState());

  authStore.subscribe(render);

  function onSubmit(event) {
    event.preventDefault();
    const token = event.target.elements.token.value;
    const stayOnline = event.target.elements.stayOnline.checked;
    authStore.dispatch(logIn({ token, stayOnline }));
  }

  function createTemplate(state) {
    return `
                    ${
                      !state.isAuth
                        ? `<h1>Authorization</h1>
                    <form class="auth-form">
                        <input type="text" name="token" placeholder="Token" required>
                        <label>
                          <input type="checkbox" name="stayOnline">
                          <span>Stay online</span>
                        </label>
                        <button type="submit">Sign in</button>
                    </form>`
                        : ""
                    }
            `;
  }

  function removeEventListeners() {
    eventListeners.forEach(({ event, selector, callback }) => {
      const element = container.querySelector(selector);
      element && element.removeEventListener(event, callback);
    });
  }

  function addEventListeners() {
    eventListeners.forEach(({ event, selector, callback }) => {
      const element = container.querySelector(selector);
      element && element.addEventListener(event, callback);
    });
  }

  function render(state) {
    removeEventListeners();
    container.innerHTML = createTemplate(state);
    addEventListeners();
  }
}