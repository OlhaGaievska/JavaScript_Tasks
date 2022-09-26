/*Создайте функцию функцию getQuadCssProps(props), которая в качестве аргумента принимает значение css свойства и возвращает квадрат этого числа по следующему примеру ниже. Если в результате преобразования числа вычисляется NaN - необходимо вернуть строку ‘none’

Пример:
console.log(getQuadCssProps(‘5px’))
console.log(getQuadCssProps(‘px5’))

Результат: 
‘25px’
‘none’*/

let a = '5px';

function getQuadCssProps(props){
    if (isNaN(parseFloat(props))){
        return 'none';
    } 
    else {
        return (parseFloat(props)**2) +'px';
    }
}

console.log(getQuadCssProps(a));

/* Создайте функцию checkEvenChar(word), которая в качестве аргумента передает строку с произвольной длиной и реализует следующие вычисления:
если из длины переменной word вычисляется квадратный корень (без дробной части) - функция должна возвращать ответ 1, в противном случае - 0 

Пример: 
console.log(checkEvenChar(‘меню’))

Результат: 1 */

let word3 = 'helloween';

function checkEvenChar(word3){
    if (Math.sqrt(word3.length) % 1== 0){
        return 1
    } else {
      return 0
    }
}   

console.log(checkEvenChar(word3));

/*Создайте функцию getRandomChar(word), которая в качестве аргумента передает строку произвольной длины и возвращает случайный символ строки. 

Примечание: 
В коде предусмотреть возможность вывода последнего символа в том числе. 
Убедиться в том, что функция не возвращает undefined (проверить выполнение несколько раз)

Пример: 
console.log(getRandomChar(‘меню’))

Результат: ‘н’
*/

let word = 'меню';

function getRandomChar(word){
    let a = Math.floor(Math.random() * word.length)
    return word[a];
}
console.log(getRandomChar(word));

/*Напишите функцию getRandomChars(word,n), которая в качестве аргумента принимает строку и число. Реализуйте функционал, который вернет в результате выполнения функции n рандомных символом строки word.
	
		Пример: 
console.log(getRandomChars(‘меню’, 3))
console.log(getRandomChars(‘меню’, 5))

Результат: 
‘нме’
‘енюмн’
*/

let word2 = 'меню';
function getRandomChar2(word2,n){    
    let result = '';
    for (let i = 0; i < n; i++){    
    let a = Math.floor(Math.random() * word.length)
    result += word[a]
    }
    return result
}
console.log (getRandomChar2(word2, 3));