let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц : ", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц : ", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    incom: [],
    savings: true,
    chooseExpenses: function() {
        for (let i=0; i<2; i++) {
            let a  = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b  = prompt('Во сколько обойдется?', '');
        
            if( (typeof(a))=== 'string' && a != null && b != null
                && a != '' && b != '' && a.length < 50 ) {
                    console.log("done");
                    appData.expenses[a] = b;
            }   else {
                    alert("Введите все данные!");
                    i--;
            }
            
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed(4);
        alert("Ежедневный бюджет : " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            alert("Низкий уровень дохода");
        }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                alert("Средний уровень достатка");
        }   else if(appData.moneyPerDay > 2000) {
                alert("Высокий уровень дохода");
        }   else {
                alert("Что-то пошло не так");
        }
    }
};

function cooseOptExpenses() {
    for(let i = 1; i < 4; i++){
        let a = +prompt("Статья необязательных расходов?", "");
     if( a != null && a != "" && isNaN(a) == false ){
        console.log("chooseOpt done!");
        appData.optionalExpenses[i] = a;
    } else {
        alert("Введите корректные данные!!!");
        i--;
        }
    }
}

cooseOptExpenses();

function checkSavings() {
    if (appData.savings == true ) {
        let save = +prompt("Какова сумма накоплений ?", ""),
            percent = +prompt("Под какой процент?", "");
            appData.mounthIncome = save/100/12*percent;
            alert("Доход в месяц от депозита: " + appData.mounthIncome);
    }
}

checkSavings();