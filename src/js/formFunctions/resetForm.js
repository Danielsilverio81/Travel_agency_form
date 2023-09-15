export const resetFormStyles = (userInputs) => {
    Object.entries(userInputs).forEach(([key, value]) =>{
        value.classList.remove('error', 'success')
        value.value = ''
        document.querySelector(`#${key}-error`).textContent = ''
    })
}