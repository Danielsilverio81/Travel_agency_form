import {
  modal,
  modalContainer,
  response,
  userInputs,
} from "./getElements.js";
import { resetFormStyles } from "./resetForm.js";


export const confirmModal = () => {
    modalContainer.classList.add("open");
    modal.addEventListener("click", (e) => {
        if(e.target.id === 'btnConfirm') {
            confirmAndReset()
        }
        if(e.target.id ==='closeBtn') {
            closeModal()
        }
        if(e.target.id ==='btnCancel') {
            closeModal()
        }
    })
    
};

function confirmAndReset() {
  response.classList.add("confirm");
  resetFormStyles(userInputs);
}

function closeModal() {
  modalContainer.classList.remove('open')
}