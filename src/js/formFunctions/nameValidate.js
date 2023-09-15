export const validateName = (nameValue, inputName) => {
    if (!nameValue.match(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/)) {
        const err = new Error('Nome Invalido Ou Campo Vazio!')
        err.input = 'name'
        if (inputName && inputName.classList.contains('success')) {
            inputName.classList.remove('success')
        }
        throw err
    } else {
        const err = document.querySelector(`#name-error`)
        err.textContent = ''
        err.style.display = 'none'
        return true
    }
}