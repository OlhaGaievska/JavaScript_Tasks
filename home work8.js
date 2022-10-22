/*Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
Примечание: инициализация дат должна быть внутри функции*/

function checkDate(){
    let currentDate = new Date();
    let nexDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+1);
    let result = Math.round((nexDate - currentDate )/ 1000 / 3600 / 24)    ;
    console.log(result);
}

checkDate();

/*Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
Если пятница была вчера - “Пятница была вчера”
Если пятница будет завтра - “Завтра пятница!”
Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

Предусмотрите вывод 4 пункта (дня, день)*/

function isItFridayToday(){
    let date = new Date();
    let arr = ['Пятница будет через дней.', 'Пятница будет через 4 дня.', 'Пятница будет через 3 дня.', 'Пятница будет через 2 дня.', 'Завтра пятница!', 'Сегодня пятница', 'Пятница была вчера.'];    
    let result = date.getDay();
    console.log(arr[result]);
}
isItFridayToday();

/*Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), 
которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, 
которые заканчиваются на “$” в виде объекта.

Пример:
let prices = [ 
'Цена товара - 1200$', 
'Стоимость - 500$', 
'Цена не определена', '9999',
 'Ценовая категория - больше 300$',
 'Цена за услугу 500 EUR'
 ]

console.log(getInfo(prices))

Результат: {
type1: 3,
type2: 3
}*/

let prices = [ 
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR'
]

let type1 = 0;
let type2 = 0;
function getInfo(prices){
    for (i in prices){
    if (prices[i].startsWith('Цена') && prices[i].endsWith('$')){
        type1++;
        type2++;
    }    
    else if (prices[i].startsWith('Цена')){
        type1++;
    }
    else if (prices[i].endsWith('$')){
        type2++;
    }        
}
let result = {type1: type1, type2: type2}
console.log(result);    
}

getInfo(prices);