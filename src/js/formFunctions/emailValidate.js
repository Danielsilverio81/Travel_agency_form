export const validateEmail = (email, inputEmail) => {
    if (!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi)) {
        const err = new Error('Email Invalido Ou Campo Vazio!')
        err.input = 'email'
        if (inputEmail && inputEmail.classList.contains('success')) {
            inputEmail.classList.remove('success')
        }
        throw err
    } else {
        const err = document.querySelector(`#email-error`)
        err.textContent = ''
        err.style.display = 'none'
        return true
    }
}