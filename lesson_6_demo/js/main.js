let   budgetValue = document.querySelector('.budget-value')[0],
      daybudgetValue = document.querySelector('.daybudget-value')[0],
      levelValue = document.querySelector('.level-value')[0],
      expensesValue = document.querySelector('.expenses-value')[0],
      optionalexpensesValue = document.querySelector('.optionalexpenses-value')[0],
      incomeValue = document.querySelector('.income-value')[0],
      monthsavingsValue = document.querySelector('.monthsavings-value')[0],
      yearsavingsValue = document.querySelector('.yearsavings-value')[0],

      expensesItem = document.getElementsByClassName('expenses-item'),   

    //buttons:
      btn_start = document.getElementById('start'), //Начать расчет
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
    
