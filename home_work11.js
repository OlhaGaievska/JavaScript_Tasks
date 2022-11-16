for (let i=0;i<6;i++){
    let div = document.createElement('div');
    div.innerText = 'Блок '+ (i+1);
    div.className = 'block';
    div.setAttribute('style', 'height: 100px; width: 100px; background-color: gray;');    
    document.body.append(div);
}

//Выполните следующие задания: 
// 1.По клику на определенный блок необходимо заменить его цвет на красный. 

let new_color = document.querySelectorAll('.block');

for (let elem of new_color){
   elem.addEventListener('click', () =>  {elem.setAttribute('style', 'height: 100px; width: 100px; background-color: red;')});
}

//По двойному клику на определенный блок необходимо его удалить из разметки (остальные трогать не нужно)

for(let elem of new_color){
    elem.addEventListener('dblclick', () => {elem.remove()});
}