'use strict';

// var number=5;
// var string = "word";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

let money = +prompt("Ваш бюджет на месяц?", ''),//Первый вопрос
time = prompt('Введите дату в формате YYYY-MM-DD', ''),//Второй вопрос
 appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};// Создаем объект для данных

    // for (let i = 0; i < 2; i++ ){
    //     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),//Третий вопрос
    //         b = prompt('Во сколько обойдется ?', '');

    //     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    //         && a != '' && b != '' && a.length < 50) {
    //         console.log("done");
    //         appData.expenses[a] = b;
    //     }
    //     else {
    //         alert("Вы не ответили на вопросы", ''),
    //         i--;
    //     }
    // };//Создаем вопросы и цикл с условиями певрое
    
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
             
    // }; //Второй цикл

    let s=0;
    do{       
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),//Третий вопрос
            b = prompt('Во сколько обойдется ?', '');

        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50){ 
            console.log("done");
            appData.expenses[a] = b;
        }

        else{
            alert('Вы не ответили на вопросы', '');
            d--;

        }

    d++;
    }
    while(d < 2);//Третий цикл
     

    appData.moneyPerDay = appData.budget / 30;

    alert ('Ежедневный бюджет: ' + appData.moneyPerDay);// Бюджет на 1 день.

    if(appData.moneyPerDay < 100){
        alert("Минимальный размер оплаты труда", '');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        alert("Средний размер оплаты труда", '')
    }else if(appData.moneyPerDay > 2000){
        alert('Высокий размер оплаты труда', '');
    }else{
        alert('Произошла ошибка');
    }//Расчет и выводы оплаты труда в день

