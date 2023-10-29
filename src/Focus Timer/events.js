import { controls } from "./elements.js";
import * as actions from './actions.js';
import * as element from './elements.js';
import state from "./state.js";
import { updateDisplay } from "./timer.js";

// *Registra se o botão que foi clicado existe no data-action
export function registerControls() {
    controls.addEventListener('click', event => {
        const action = event.target.dataset.action;
        if (typeof actions[action] !== 'function') {
            return;
        }

        actions[action]()
    })
}

// *Função para os minutos poderem ser alterados até 60 minutos
export function setMinutes() {
    element.minutes.addEventListener('focus', () => element.minutes.textContent = '');
    element.minutes.onkeypress = event => /\d/.test(event.key);

    element.minutes.addEventListener('blur', event => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;

        updateDisplay();
        element.minutes.removeAttribute('contenteditable');
    })
}
