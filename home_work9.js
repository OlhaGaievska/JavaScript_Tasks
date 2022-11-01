/*Задан массив elems, передающий элемент HTML разметки. 
Реализуйте очистку данных по примеру ниже:
let elems = [
'<div><p class="text">Home</p></div>', 
'<div><p class="text">About</p></div>', 
'<div><p class="text">FAQ</p></div>', 
'<div><p class="text">Contacts</p></div>' 
] 
Результат: ['Home','About','FAQ','Contacts']*/

let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p class="text">About</p></div>', 
    '<div><p class="text">FAQ</p></div>', 
    '<div><p class="text">Contacts</p></div>' 
]

for (let i of elems){
    let result =i.split(/>|</).slice(4,5)
   console.log(result)    
}

/*Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 
let words = ['стакан','молоко','табуретка','вода'] 

Результат: ['Cтакан','Молоко','Табуретка','Вода']*/

let words = ['стакан','молоко','табуретка','вода'] 

function initCap(array){    
    return array.map(elem => elem[0].toUpperCase() + elem.slice(1));    
}
console.log(initCap(words))


/*Задан массив names. 
Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 

Пример: let names = [ 
'Steven King', 
'Jonh Snow', 
'Oliver', 
'Neena Stich',
 'Grant Laster', 
'Persius Master', 
'Lest' 
] 

Результат: [ 
['Steven','King'], 
['Jonh','Snow'], 
['Oliver', undefined], 
['Neena','Stich'], 
['Grant','Laster'], 
['Persius','Master'],
['Lest', undefined] ]
]*/

let nam = [ 
    'Steven King', 
    'Jonh Snow', 
    'Oliver', 
    'Neena Stich',
     'Grant Laster', 
    'Persius Master', 
    'Lest' 
]

/*Решение 1*/
let full_names = [];

for (let i of nam){
    if ((i.includes(' '))){
        full_names.push(i);
    }
    else {
        full_names.push(i + ' ' + 'undefined');
    }
}
console.log(full_names);

/*Решение 2*/

let full_names2 = [];
let result = nam.map(elem => elem.includes(' ') ? full_names2.push(elem) : full_names2.push(elem + ' ' + 'undefined'))
console.log(full_names2);