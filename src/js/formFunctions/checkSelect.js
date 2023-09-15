
export const originValue = (origin) => {
    if (origin === 'Partindo de') {
        const err = new Error('Escolha um Ponto de Origem Valido!')
        err.input = 'origin'
        throw err
    } else {
        return true
    }
}

export const destinyValue = (destiny) => {
    if (destiny === 'Indo para') {
        const err = new Error('Escolha um destino Valido!')
        err.input = 'destiny'
        throw err
    } else {
        return true
    }
}