export const resetFormStyles = (userInputs) => {
  Object.entries(userInputs).forEach(([key, value]) => {
    value.classList.remove("error", "success");
    value.value = "";
    document.querySelector(`#${key}-error`).textContent = "";
  });
  resetCheckbox()
};

function resetCheckbox() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        checkboxes[i].checked = false
    }
  }
}
