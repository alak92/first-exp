'use strict';

// var number=5;
// var string = "word";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};


let money, time;


function start(){
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == '' || money == null){
        money = +prompt ("Ваш бюджет на месяц?", "");
        alert('Введите данные по бюджету', '');

    }
}

start();
//Первая функция


appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
// Создаем объект для данных


function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    
    };
}
chooseExpenses();
//Создаем вопросы и цикл с условиями в функции


    
// let d = 0
// while (d < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),//Третий вопрос
//         b = prompt('Во сколько обойдется ?', '');

//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50){ 
//             console.log("done");
//             appData.expenses[a] = b;
//     }

//     else{
//         alert('Вы не ответили на вопросы', '');
//         d--;

//     }

//     d++;
             
// }; 
//Второй цикл



// let s=0;
// do{       
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),//Третий вопрос
//         b = prompt('Во сколько обойдется ?', '');
           

//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50){ 
//         console.log("done");
//         appData.expenses[a] = b;
//     }

//     else{
//         alert('Вы не ответили на вопросы', '');
//         d--;

//     }

//     d++;
    
// }
// while(d < 2);

//Третий цикл

     
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();
// Бюджет на 1 день



function checkSavings(){
    if(appData.savings == true){
        let save = +prompt('Какова сумма накомплений?'),
            percent = +prompt('Под какой процент?');
            appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();
//Расчет депозита в год

function delectLevel(){
    if(appData.moneyPerDay < 100){
        alert("Минимальный размер оплаты труда", '');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        alert("Средний размер оплаты труда", '')
    }else if(appData.moneyPerDay > 2000){
        alert('Высокий размер оплаты труда', '');
    }else{
        alert('Произошла ошибка');
    }

}
delectLevel();
//Расчет и выводы оплаты труда в день в функции

function chooseOptExpenses(){
    for(let r = 1; r <= 3; r++){
        let questionOptExpenses = prompt('Статья необязательных расходов ?', '');
        appData.optionalExpenses[r] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
//Функция вызова вопроса с записью ответов
