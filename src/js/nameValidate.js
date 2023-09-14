export const validateName = (nameValue) => {
    if (!nameValue.match(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/)) {
        const err = new Error('Nome Invalido Ou Campo Vazio!')
        err.input = 'name'
        throw err
    } else {
        return true
    }
}