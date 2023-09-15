import { confirmModal } from "./formFunctions/ConfirmForm.js";
import { compareDates } from "./formFunctions/checkDates.js";
import { destinyValue, originValue } from "./formFunctions/checkSelect.js";
import { validateEmail } from "./formFunctions/emailValidate.js";
import { departureDate, form, returnDate, userInputs } from "./formFunctions/getElements.js";
import { validateName } from "./formFunctions/nameValidate.js";


form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  try {
    validateName(userInputs.name.value, userInputs.name)
      userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value, userInputs.email)
      userInputs.email.classList.add("success");
    if (
      validateEmail(userInputs.email.value) &&
      validateName(userInputs.name.value) &&
      originValue(userInputs.origin.value) &&
      destinyValue(userInputs.destiny.value) &&
      compareDates(departureDate.value, returnDate.value)
    ) {
      confirmModal()
    }
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});
