import * as element from './elements.js';

// *Estrutura de dados do Modal
export const Modal = {
    open() {
        element.modalWrapper.classList.remove('hidden');
        element.modal.classList.add('open');
    },
    close() {
        element.closeButton.addEventListener('click', () => {
            element.modalWrapper.classList.add('hidden');
            element.modal.classList.remove('open');
        })
    }
        
}
