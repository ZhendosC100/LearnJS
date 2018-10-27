function calc(){
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

function replace() {
    this.value = this.value.replace(/[^\d]/ig, '');
}

    persons.oninput = replace;
    restDays.oninput = replace;

const totalFunc = () => {
    daysSum = +restDays.value;
    personSum = +persons.value;
    total = (daysSum + personSum) * 4000;

    if (restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0) {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total * place.options[place.selectedIndex].value;
    }
};

persons.addEventListener('input', totalFunc);
restDays.addEventListener('input', totalFunc);
place.addEventListener('change', totalFunc);

}

module.exports = calc;