/* 1. Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру:
Пример:
let someObj = {
key1: 'value1',
key2: 'value2',
key3: 'value3',
key4: 'value4',
}

Результат: ['key1','key2','key3','key4']*/

let someObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
}

let getKeys = function (someObj){
    return console.log(Object.keys(someObj));
}

getKeys(someObj);

/*Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. 
Примечание: гарантируется, что все элементы передают числовое значение
Пример: [1,2,3,4,5]*/

let array = [1,2,3,4,5];
let sum = 0;
let getAvg = function (array){
    for (let i in array){
       sum += array[i];        
    }    
    return console.log(sum/array.length);
}
getAvg(array);

/* Создайте функцию countString(), которая получает массив в качестве аргумента.
Реализуйте функционал, который посчитает количество элементов, чей тип равен ‘string’
Пример: [1,true,'3','value1',9,'key']
Результат: 3
*/

let array2 = [1,true,'3','value1',9,'key']
let result = 0;

let countString = function (array2){
    for (let i =0; i<array2.length; i++){
        if ( typeof array2[i] == 'string'){
        result++;        
        }
    }console.log(result);
    
}
countString(array2);

/*Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.entries() согласно примеру:
Пример:
let someObj = {
key1: 'value1',
key2: 'value2',
key3: 'value3',
key4: 'value4',
}

Результат: [['key1': 'value1'],['key2': 'value2'],['key3': 'value3'],['key4': 'value4']]*/

let someObj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
}

let getEntries = function (someObj2){
    return console.log (Object.entries(someObj2));
}

getEntries(someObj2);

/*Задан массив array, передающий произвольное количество элементов. 
реализуйте функционал, который преобразует его в объект по следующему правилу:
Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
Количество сво-тв должно быть равным количеству элементов массива

	
Пример: [1,true,'3','value1',9,'key']



	Результат: 
	{
key1: 1,
key2: true,
key3: ‘3’,
key4: ‘value1’
key5: 9,
key6: ‘key’
}*/

let array3 = [1,true,'3','value1',9,'key']

let Obj3 ={}
let a = 'keyN';

let keyArrow = function (array3){
    for (let i =1; i<array3.length; i++){
       return Obj3 = Object.assign ({},array3); 
    }
    
}
console.log (keyArrow(array3));

// P.S: Последняя задача недоработана, знаю((. Но я так и не придумала как сделать 'keyN'.