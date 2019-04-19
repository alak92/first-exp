'use strict';

// var number=5;
// var string = "word";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

let money = prompt("Ваш бюджет на месяц?", ''),//Первый вопрос
time = prompt('Введите дату в формате YYYY-MM-DD', ''),//Второй вопрос
 appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
},// Создаем объект для данных
 a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),//Третий вопрос
 a2 = prompt('Во сколько обойдется ?', ''),
 a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
 a4 = prompt('Во сколько обойдется ?', '');

 appData.expenses.a1 = a2;
 appData.expenses.a3 = a4;

alert(appData.budget / 30);// Бюджет на 1 день



