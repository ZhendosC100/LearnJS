let   budgetValue = document.querySelector('.budget-value'),
      daybudgetValue = document.querySelector('.daybudget-value'),
      levelValue = document.querySelector('.level-value'),
      expensesValue = document.querySelector('.expenses-value'),
      optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
      incomeValue = document.querySelector('.income-value'),
      monthsavingsValue = document.querySelector('.monthsavings-value'),
      yearsavingsValue = document.querySelector('.yearsavings-value'),

      expensesItem = document.getElementsByClassName('expenses-item'),//.querySelectorAll('.expenses-item'),   .getElementsByClassName('expenses-item'),
      //expensesItemClass = document.getElementsByClassName('expenses-item'),
    //buttons:
      startBtn = document.getElementById('start'), //Начать расчет
      expensesBtn = document.getElementsByTagName('button')[0], //Утвердить обязательные расходы
      optionalExpensesBtn = document.getElementsByTagName('button')[1], //Утвердить необязательные расходы
      countBtn = document.getElementsByTagName('button')[2], //Рассчитать дневной бюджет
    
      optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), 
      chooseIncome = document.querySelector('.choose-income'),  
      checkSavings = document.querySelector('#savings'),   
      sumValue = document.querySelector('.choose-sum'),  
      percentValue = document.querySelector('.choose-percent'),   
      yearValue = document.querySelector('.year-value'),  
      monthValue = document.querySelector('.month-value'),
      dayValue = document.querySelector('.day-value');

let money, time;


startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц : ", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц : ", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a  = expensesItem[i].value;
            b  = expensesItem[++i].value;
    
        if( (typeof(a))=== 'string' && a != null && b != null
            && a != '' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
        }   else {
                alert("Введите все данные!");
                i = i - 1;
        }
        expensesValue.textContent = sum;
    }
});

optionalExpensesBtn.addEventListener('click', function() {
    for(let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
    
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {

    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a  = expensesItem[i].value;
            b  = expensesItem[++i].value;
    
        if( (typeof(a))=== 'string' && a != null && b != null
            && a != '' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
        }   else {
                alert("Введите все данные!");
                i = i - 1;
        }
    }

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sum)/30).toFixed(2);
    daybudgetValue.textContent += appData.moneyPerDay;

    if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Низкий уровень дохода";
    }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
    }   else if(appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень дохода";
    }   else {
            levelValue.textContent = "Произошла ошибка!";
    }
    } else {
        daybudgetValue.textContent = "Произошла ошибка!";
    }


});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
        appData.income = items.split(', ');
    incomeValue.textContent = appData.income;   
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

function budget(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
    
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
        
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
}

sumValue.addEventListener('input', budget);

percentValue.addEventListener('input', budget);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

expensesBtn.disabled = true;          //Przycisk "Утвердить обязательные расходы" : robimy właściwość "disabled"
optionalExpensesBtn.disabled = true;  //Przycisk "Утвердить необязательные расходы" : robimy właściwość "disabled"
countBtn.disabled = true;             //Przycisk "Рассчитать дневной бюджет" : robimy właściwość "disabled"

//Włączamy przyciski, w razie spełnionych warunków uzupełnioności input

/*
    for(let i = 0; i < expensesItem.length; i++) {

    expensesItem[i].addEventListener('input', function(){
        if( expensesItem[i].value.trim() != '' || !!appData.budget ){

            expensesBtn.removeAttribute('disabled');
            countBtn.removeAttribute('disabled');
        }

    });
}
 */

 //Teraz trochę zmodyfikowany niż mieliśmy powyżej)) : 
for(let i = 0; i < expensesItem.length; i++) {

    expensesItem[i].addEventListener('input', function(){
        if( expensesItem[i].value.trim() != '' ){

            expensesBtn.removeAttribute('disabled');
        }

        if( appData.budget != '' ){

        countBtn.removeAttribute('disabled');
        }

    });
}

for(let i = 0; i < optionalExpensesItem.length; i++) {

    optionalExpensesItem[i].addEventListener('input', function() {
        if( optionalExpensesItem[i].value.trim() != '' ){

            optionalExpensesBtn.removeAttribute('disabled');
        }
    });
}

function outputOfObject () {
    for (let key in appData){
        console.log("Наша программа включает в себя данные: " + key);
    }
}