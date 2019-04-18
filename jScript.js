'use strict';

// var number=5;
// var string = "word";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

let money = +prompt("Ваш бюджет в месяц?", ''),
time = prompt("Введите дату в формате YYYY-MM-DD", ''),
appData = {
    budget: money,
    timeData:{},
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('Ваш бюджет на один день составляет: ' + (appData.budget / 30).toFixed(2));

