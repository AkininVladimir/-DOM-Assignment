'use strict';

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: true,
    detectLevel: function() {
        let a = +prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt('Во сколько обойдется');
        for (let i = 0; i < 2; i ++) {
            if((typeof(a)) ==='string' && (typeof(a)) !=null && (typeof(b)) !=null && (typeof(a)) !='' && (typeof(b)) !=''&& a.length < 50){
                console.log('done'); 
                appData.expenses[a] = b;
            } else {
                console.log('incorrectly entered data');
                i --;
                }
            }
    },
    detectDayBudget: function (){
        if (appData.moneyForday <1000 ){
            console.log('Ниже прожиточного минимума');
            } else if (appData.moneyForday>1000 && appData.moneyForday < 2000){
                console.log('У Вас средний доход');
            } else if(appData.moneyForday>2000) {
                console.log('У Вас высокий доход');
            } else{ console.log('Произошла ошибка')};
        appData.moneyForday = appData.budget / 30;
        alert('Ежедневная подтребность составляет: ' + appData.moneyForday);
    },
    monthlySavingsdeposit: function () {
        if (appData.savings === true) {
            let deposit = +prompt ('Какоква сумма Вашего депозита?'),
                prosent = +prompt ('Под какой процент?');
            appData.monthProsentDeposit = (deposit/100/12*prosent);
            alert( 'Ваш ежемесячный доход с депозита:' + appData.monthProsentDeposit);
        }   
    },
    chooseOptExpenses: function() {
        let qustExp;
        qustExp = +prompt('Статья необязательных расходов?');
        let i=0;
        do {
            qustExp = +prompt('Статья необязательных расходов?'); 
        } while (i<3);
        appData.optionalExpenses[i] = qustExp;
    },
    chooseIncome: function() {
        let quesincome = prompt('Что принсет дополнительные доход (ответ записать через запятую)', '');
        appData.income = quesincome.split(', ');
        appData.income.push(prompt ('Может, что-то забыли?', ''));
        appData.income.sort();
        if((typeof(quesincome)) == null || (typeof(quesincome)) == "" || (typeof(quesincome)) == 'string') {
            console.log("Данные не верные, поробуйте еще разок");
        } else{
            quesincome = quesincome -1;
        }
        appData.income.forEach( function(item, i, mass) {
            alert('Способы дополнительного заработка'+ ':' + (+i) + (item) + (mass));
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ':' + appData[key]);
}

// for (let key of appData) {
//     console.log('Наша программа включает в себя данные:' + key + ':' + appData[key]);
// }

function start() {
    money = + prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = + prompt('Ваш бюджет на месяц?', '');  
    }
}
start();

/* цикл FOR */

    /* цикл while */
// let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется');
// let i=0;
// while(i = 0, i<2, i++) {
//     if(typeof(a) === "string" && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '' && a.length < 50 ){
//         console.log ('good');
//     } else {
//         console.log('no good');
//         i--;

//     }
// }
/* Цикл (DO) */
// let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется');
// let i = 0;
// do {
//     if (typeof(a) === 'string' && typeof(b) === 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != '' && typeof(b) != '' && a.length <50){
//         console.log('good');
//     } else {
//         console.log('no good');
//         i--;
//     }
// } while (i = 0);


/* Функция с расчетом уровня достатка */
// let a = +prompt('Введите обязательную статью расходов в этом месяце'),
//     b = prompt('Во сколько обойдется');

// function detectLevel() {
//     for (let i = 0; i < 2; i ++) {
//         if((typeof(a)) ==='string' && (typeof(a)) !=null && (typeof(b)) !=null && (typeof(a)) !='' && (typeof(b)) !=''&& a.length < 50){
//             console.log('done'); 
//             appData.expenses[a] = b;
//         } else {
//             console.log('incorrectly entered data');
//             i --;
//         }
// }
// }

/* Функция  расчет дневного бюджета */
// function detectDayBudget () {
//     if (appData.moneyForday <1000 ){
//         console.log('Ниже прожиточного минимума');
//         } else if (appData.moneyForday>1000 && appData.moneyForday < 2000){
//             console.log('У Вас средний доход');
//         } else if(appData.moneyForday>2000) {
//             console.log('У Вас высокий доход');
//         } else{ console.log('Произошла ошибка')};
//     appData.moneyForday = appData.budget / 30;
//     alert('Ежедневная подтребность составляет: ' + appData.moneyForday);
// }
// detectDayBudget();

/* Функция ежемесячный доход с депозита */
// function monthlySavingsdeposit () {
//     if (appData.savings === true) {
//         let deposit = +prompt ('Какоква сумма Вашего депозита?'),
//             prosent = +prompt ('Под какой процент?');
//         appData.monthProsentDeposit = (deposit/100/12*prosent);
//         alert( 'Ваш ежемесячный доход с депозита:' + appData.monthProsentDeposit);
//     }   
// }
// monthlySavingsdeposit ();

/* Функция для определения необязательных расходов */
// let qustExp;

// function chooseOptExpenses(){
//     qustExp = +prompt('Статья необязательных расходов?');
//     let i=0;
//         do {
//             qustExp = +prompt('Статья необязательных расходов?'); 
//         } while (i<3);
//     appData.optionalExpenses[i] = qustExp;
    
// }
// chooseOptExpenses();