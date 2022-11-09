let div_1 = document.createElement('div');
div_1.className = 'block_1';
document.body.append(div_1);
let div_2 = document.createElement('div');
div_2.className = 'block_2';
document.body.append(div_2);
let div_3 = document.createElement('div');
div_3.className = 'block_3';
document.body.append(div_3);
let div_4 = document.createElement('div');
div_4.className = 'block_4';
document.body.append(div_4);

/*Используя JS, сформируйте внутри первого div элемента новый тег <h1>. 
Задайте для него текстовое сво-во “Заголовок” и присвойте атрибут class с значением first_h1.
*/

let h1 = document.createElement('h1');
h1.innerText = 'Заголовок';
h1.className = 'first_h1';
div_1.append(h1);

/*Используя JS, сформируйте внутри второго div элемента два дочерних тега <h2> и <p>, присвоив текстовые значения “Новый блог” и “Текст нового блока”. 
Для параграфа предусмотрите атрибут hight с значением “low”*/

let h2 = document.createElement('h2');
h2.innerText = 'Новый блог';
let p = document.createElement('p');
p.innerText = 'Текст нового блока';
p.setAttribute('style','height: low')
div_2.append(h2,p);

/*Используя JS, сформируйте вокруг третьего div элемента (сверху и снизу) по 1 элементу кликабельного текста <a>, 
определив ссылку на google.com и github.com соответственно */

let a_1 = document.createElement('a');
a_1.innerText = 'google';
a_1.setAttribute('href','google.com')
let a_2 = document.createElement('a');
a_2.innerText = 'github';
a_2.setAttribute('href','github.com')
div_3.before(a_1);
div_3.after(a_2);

/*Сформируйте внутри 4 div элемента, используя цикл, список заголовков от h1 до h6, 
задав текстовое сво-во “Заголовок 1”, где n - это порядковый номер заголовка*/

for (let i=0;i<6;i++){
    let h = document.createElement('h'+(i+1));
    h.innerText = 'Заголовок '+ (i+1);
    div_4.appendChild(h);
}