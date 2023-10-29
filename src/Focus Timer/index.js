import state from "./state.js";
import * as events from './events.js';
import * as timer from './timer.js';

// *Função para chamar as funções e fazer o timer funcionar
export function start(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay();

    events.registerControls();
    events.setMinutes();
}
