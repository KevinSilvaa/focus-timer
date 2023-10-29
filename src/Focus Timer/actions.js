import state from "./state.js"
import * as timer from "./timer.js";
import * as element from './elements.js';
import * as sounds from './sounds.js';
import { Modal } from "./modal.js";

// *Função para ligar/desligar o timer
export function toggleTimer() {
    if (state.minutes <= 0) {
        Modal.open();
        return;
    }
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();

    sounds.buttonPressAudio.play();
}

// *Função para alterar o tempo do timer
export function set() {
    element.minutes.setAttribute('contenteditable', true);
    element.minutes.focus()
}

// *Função para reinicar o timer
export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
}

// *Função para ligar/desligar a música
export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on');
    
    if (state.isMute) {
        sounds.bgAudio.play()
        return;
    }
    sounds.bgAudio.pause();
}
