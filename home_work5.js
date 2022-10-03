/*First level: Необходимо реализовать функционал по добавлению и удалению пользователей.
Задан массив users, элементы которого передают свойства объекта
Пример:
let users = [
{id: 1, name: 'Alex', lastname: 'Folon', age: 24},
{id: 1, name: 'Willyam', lastname: 'Maxwell', age: 31},
]


Реализуйте следующие функции:


1) Добавление пользователей в массив, используя аргументы (id,name,lastname,age)
2) Изменение данных пользователей. Функция должна также передавать все аргументы (Подсказка: реализовать поиск через id)
3) Удаление пользователей. Функция должна получить только id. В функции необходимо предусмотреть случай, когда переданный аргумент не будет найден среди users.


Продемонстрируйте функционал на примере добавления, изменения и удаления данных пользователей вызывая функции с произвольными данными


(Если есть вопросы по заданию - обязательно пишите в чат)


Second level: (Сложный вариант)
Предусмотрите процесс, который будет автоматически заполнять атрибут id, не используя его в качестве аргумента при добавлении очередного пользователя.*/

let users = [
    {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
    {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 31},
]

function add_users(id,name,lastname,age){
    users.push({id,name,lastname,age});
}

add_users(3,'Jon','Snow',25);
console.log(users)

function changes_users(id,name){
    newName = users.findIndex((elem => elem.id == id));
    users[newName].name = name;
    return users;
}

console.log (changes_users(1,'Max'))

function delet_users (id){
    for(i=0;i<users.length;i++)
        if (users.id == id){
        users.splice(i+1,1);        
        }  return users;
    } 

console.log (delet_users(1))


//Second level:
function add_users(id,name,lastname,age){
    let min = Math.floor (1);
    let max = Math.floor (100);
    id = Math.floor (Math.random() * (max - min) + min);
    users.push({id,name,lastname,age});
}