/*Задание 1.

В программе объявлены три переменные a, b и c, в которые записаны числовые значения. Определите максимальное значение и выведите его в консоль.
Методом max пользоваться нельзя.*/

let a = 32
let b = 5
let c = 14

if (a>b && a>c){
  console.log(a)
}
else if (b>c && b>a){
  console.log(b)
}
else if (c>a && c>b){
  console.log(c)
} 
else (console.log('arror'))

let result = (a>b && a>c)? a : (b>c && b>a)? b:(c>a && c>b)? c:'arror'
console.log(result)

/*Задание 2.

В программе определены две переменные со строковым значением word_1 и word_2. Напишите программу таким образом, чтобы в консоль выводилась строка наибольшей длины. (свойство length)*/

let word_1 = "hello"
let word_2 = "sea"

if (word_1.length > word_2.length){
  console.log (word_1)
}
else if (word_2.length > word_1.length){
  console.log (word_2)
}
else if (word_2.length = word_1.length) {
  console.log (word_1 + " " + word_2)
} 
else (console.log('arror'))

let result_string = (word_1.length > word_2.length) ? word_1 : (word_2.length > word_1.length) ? word_2:(word_2.length = word_1.length)? word_1 + " " + word_2 : 'arror'
console.log(result_string)