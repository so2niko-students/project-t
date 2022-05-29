import { authStore } from "../stores/auth_store.js"


// View of authorization

export default function AuthView(container) {
    authStore.subscribe(listener)
    function listener(newState) {
        render(newState)
    }

    function createTemplate(state) {
        return `
            <div class="view-main">
                <h1>Authorization</h1>
                <h2> ${state.token ? state.token : `Token is empty`}</h2>
            </div>
        `
    }

    function render(state) {
        container.innerHTML = createTemplate(state)
    }

    render(authStore.getState())
}
