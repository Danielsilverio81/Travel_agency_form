export const compareDates = (departureDate, returnDate) => {
    const departureDay = new Date(departureDate);
    const returnDay = new Date(returnDate);
    return checkValidityDates(departureDay, returnDay);
}

function checkValidityDates(date, otherDate) {
    const departureErrElement = document.querySelector('.departure-err');
    const returnDayErrElement = document.querySelector('.returnDay-err');
    if (date <= new Date()) {
        departureErrElement.textContent = 'O dia escolhido Passou!';
        return false;
    }
    if (otherDate <= new Date()) {
        returnDayErrElement.textContent = 'O dia escolhido Passou!';
        return false;
    }
    if (date > otherDate) {
        departureErrElement.textContent = 'A data de ida não pode ser maior que a de volta!';
        return false;
    }
    if (date.getTime() == otherDate.getTime()) {
        departureErrElement.textContent = 'A data de ida não pode ser a mesma que a de volta!';
        return false;
    }
    return true;
}