import { confirmModal } from "./ConfirmForm.js";
import { destinyValue, originValue } from "./checkSelect.js";
import { validateEmail } from "./emailValidate.js";
import { form, userInputs } from "./getElements.js";
import { validateName } from "./nameValidate.js";


form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  try {
    if (validateName(userInputs.name.value)) {
      userInputs.name.classList.add("success");
    }
    if (validateEmail(userInputs.email.value)) {
      userInputs.email.classList.add("success");
    }
    originValue(userInputs.origin.value);
    destinyValue(userInputs.destiny.value);
    if (
      validateEmail(userInputs.email.value) &&
      validateName(userInputs.name.value) &&
      originValue(userInputs.origin.value) &&
      destinyValue(userInputs.destiny.value)
    ) {
      confirmModal()
    }
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});
