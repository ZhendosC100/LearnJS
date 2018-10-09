let money = prompt("Ваш бюджет на месяц : ", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    incom: [],
    savings: false
};

for (let i=0; i<2; i++) {
    let a  = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b  = prompt('Во сколько обойдется?', '');

    if( (typeof(a))=== 'string' && (typeof(a)) != null 
        && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
    }   else {

    }
    
}

appData.moneyPerDay = appData.budget/30;

console.log("Ежедневный бюджет : " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Низкий уровень дохода");
}   else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
        console.log("Средний уровень достатка");
}   else {
    console.log("Высокий уровень дохода");
}