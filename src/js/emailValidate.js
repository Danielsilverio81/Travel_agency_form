export const validateEmail = (email) => {
    if (!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi)) {
        const err = new Error('Email Invalido Ou Campo Vazio!')
        err.input = 'email'
        throw err
    } else {
        return true
    }
}