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
    savings: true,
    chooseExpenses: function(){
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
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    checkSavings: function() {
        if(appData.savings == true){
            let save = +prompt('Какова сумма накомплений?'),
                percent = +prompt('Под какой процент?');
                appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    delectLevel: function(){
        if(appData.moneyPerDay < 100){
            alert("Минимальный размер оплаты труда", '');
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            alert("Средний размер оплаты труда", '')
        }else if(appData.moneyPerDay > 2000){
            alert('Высокий размер оплаты труда', '');
        }else{
            alert('Произошла ошибка');
        }
    },
    chooseOptExpenses: function() {
        for(let r = 1; r <= 3; r++){
            let questionOptExpenses = prompt('Статья необязательных расходов ?', '');
            appData.optionalExpenses[r] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесёт дополнительный доход ? (Перечислите через запятую)', ' ')
        if(typeof(items) != "String" || items == "" || typeof(items) != null){
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
        }else{
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
       appData.income.forEach (function (intermassive, i){
           alert('Способы доп. заработка: ' + (i+1) + " - " + intermassive);
       });
    
    }
};

for(let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
// Создаем объект для данных


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