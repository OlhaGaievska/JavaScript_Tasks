/*Напишите fetch запрос, который последовательно определит для каждого пользователя div элемент внутри body и будет содержать информацию сотрудника:
Имя и фамилия 
Номер телефона
Почта
Имя компании, где работает пользователь

Для каждого DIV элемента предусмотрите 4 параграфа.
Пример стилизации DIV элемента:
Можно учесть стилизацию на ваш выбор (grid). 
Главное условие выполнения: описать весь процесс внутри функции (async function….)
Для демонстрации необходимо будет ее вызвать и отправить архив (гит) на проверку. 
Если остались вопросы - обязательно пишите в слак чат */

let m_div = document.createElement('div');
m_div.setAttribute('style', 'display: grid; grid-template-columns: repeat(4, 1fr);');    
document.body.prepend(m_div);
    
let url = "https://jsonplaceholder.typicode.com/users"

async function visitka(){
    
    let res =  await fetch(url);
    let users = await res.json();
    
    for (let i of users){
        let div = document.createElement('div');
        let p_name = document.createElement('p');
        let p_mail = document.createElement('p');
        let p_phone = document.createElement('p');
        let p_company = document.createElement('p');

        p_name.innerText = 'Имя и фамилия: ' + i.name;        
        p_mail.innerText = 'Почта: ' + i.email;
        p_phone.innerText = 'Телефон: ' + i.phone;
        p_company.innerText = 'Компания: ' + i.company.name;
            
        div.setAttribute('style', 'display: flex; flex-direction:column; border: 1px solid; font-weight: 800; padding-left: 1em; margin: 1em; line-height: 3px;');

        m_div.prepend(div);    
        div.append(p_name, p_mail, p_phone, p_company);
    }
} 
visitka();
