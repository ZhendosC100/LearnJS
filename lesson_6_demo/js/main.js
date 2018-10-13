let   budgetValue = document.querySelector('.budget-value'),
      daybudgetValue = document.querySelector('.daybudget-value'),
      levelValue = document.querySelector('.level-value'),
      expensesValue = document.querySelector('.expenses-value'),
      optiexpensesValue = document.querySelector('.optionalexpenses-value'),
      incomeValue = document.querySelector('.income-value'),
      monthsavingsValue = document.querySelector('.monthsavings-value'),
      yearsavingsValue = document.querySelector('.yearsavings-value'),

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
    
