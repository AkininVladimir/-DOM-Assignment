'use strict';

// - Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById ('start');
// - Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div> )
let budgetValue = document.getElementsByClassName ('budget-value')[0],
    daybudgetValue = document.getElementsByClassName ('daybudget-value')[0],
    levelValue = document.getElementsByClassName ('level-value')[0],
    expensesValue = document.getElementsByClassName ('expenses-value')[0],
    optionalExpensesvalue = document.getElementsByClassName ('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName ('income-value')[0],
    monthsavingsValue = document.getElementsByClassName ('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName ('yearsavings-value')[0];
// - Получить поля (input) c обязательными расходами через класс (class=”expenses-item”)
let expensesItem = document.getElementsByTagName ('input');
// - Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
let expensesItemBtn = document.getElementsByTagName ('button')[0],
    optionalExpensesBtn = document.getElementsByTagName ('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2];
// - Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalExpensesItem = document.getElementsByClassName ('optionalexpenses-item'),
    expenseItem = document.getElementsByClassName ('expenses-item');
// - Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncome = document.querySelector('.choose-income'),
    checkBox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');
  
let time, money;

startBtn.addEventListener ('click', function (){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = + prompt('Ваш бюджет на месяц?', '');
        while (isNaN(money) || money == "" || money == null) {
             money = + prompt('Ваш бюджет на месяц?', '');
        }
appData.timeData = time;
yearValue.value = new Date(Date.parse(time)).getFullYear();
monthValue.value = new Date(Date.parse(time)).getMonth() +1;
dayValue.value = new Date(Date.parse(time)).getDate();
appData.budget = money;
budgetValue.textContent = money.toFixed(2);

});

expensesItemBtn.addEventListener ('click', function(){
    let sum = 0;
    for (let i = 0; i < expenseItem.length; i++) {
        let a = expenseItem[i].value;
        let b = expenseItem[++i].value;
        if((typeof(a)) ==='string' && (typeof(a)) !=null && (typeof(b)) !=null && (typeof(a)) !='' && (typeof(b)) !=''&& a.length < 50){
            console.log('Верно!');
        appData.expenses[a] = b;
        sum += Number(b);

        }else {
            i--;
        }

    }

    expensesValue.textContent = sum;
});

optionalExpensesBtn. addEventListener ('click', function (){
    for (let i = 0; i < optionalExpensesItem.length; i++){
    let qustExp = optionalExpensesItem[i].value;
    appData.optionalExpenses = qustExp;
    optionalExpensesvalue.textContent += appData.optionalExpenses + ',';
    }
    
});

countBudgetBtn.addEventListener ('click', function(){
    if (appData.budget != undefined) {
        appData.moneyForday = appData.budget / 30;
        daybudgetValue.textContent = appData.moneyForday.toFixed(2);
        if (appData.moneyForday <1000 ){
            levelValue.textContent = 'Ниже прожиточного минимума';
            } else if (appData.moneyForday>1000 && appData.moneyForday < 2000){
                levelValue.textContent = 'У Вас средний доход';
            } else if(appData.moneyForday>2000) {
                levelValue.textContent = 'У Вас высокий доход';
            } else{ levelValue.textContent = 'Произошла ошибка';
            }

    } else { levelValue.textContent = 'Произошла ошибка'} 
});

chooseIncome.addEventListener('input', function() {
    let quesincome = chooseIncome.value;
        appData.income = quesincome.split(', ');
        incomeValue.textContent = appData.income;

});

checkBox.addEventListener ('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    }else {
        appData.savings = true;
    }
});

chooseSum.addEventListener ('input', function(){
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100*12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
    
});

choosePercent.addEventListener ('input', function(){
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100*12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});


const appData = {
     budget: money,
     expenses: {},
     optionalExpenses: {},
     income: [],
     timeData: time,
     savings: false,

};

