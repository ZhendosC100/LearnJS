let   budgetValue = document.getElementsByClassName('budget-value')[0],
      daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
      levelValue = document.getElementsByClassName('level-value')[0],
      expensesValue = document.getElementsByClassName('expenses-value')[0],
      optiexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
      incomeValue = document.getElementsByClassName('income-value')[0],
      monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
      yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

      expensesItem = document.getElementsByClassName('expenses-item'),
      btn = document.getElementsByTagName('button');

    //buttons:
let   btn_start = document.getElementById('start'), //Начать расчет  
      select = btn[0], //Утвердить обязательные расходы
      select_opt = btn[1], //Утвердить необязательные расходы
      square = btn[2]; //Рассчитать дневной бюджет
    
let   optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), 
      chooseIncome = document.querySelector('.choose-income'),  
      checkSavings = document.querySelector('#savings'),   
      sumValue = document.querySelector('.choose-sum'),  
      percentValue = document.querySelector('.choose-percent'),   
      yearValue = document.querySelector('.year-value'),  
      monthValue = document.querySelector('.month-value'),
      dayValue = document.querySelector('.day-value');
    
console.log(budgetValue);