import { logOut } from '../actions/auth_actions.js';
import { authStore } from '../stores/auth_store.js';

// View of authorization
export default function MenuView(container) {
  const eventListeners = [
    {
      event: 'click',
      selector: '.logout-btn',
      callback: signOut,
    },
  ];

  render(authStore.getState());

  authStore.subscribe(render);

  function signOut() {
    authStore.dispatch(logOut());
  }

  function createTemplate(state) {
    return `
                <header>TELEbot ${
                  state.isAuth
                    ? `<button class="logout-btn">LogOut</button>`
                    : ''
                }</header>
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