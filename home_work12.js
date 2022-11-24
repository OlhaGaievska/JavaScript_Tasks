let m_div = document.createElement('div'); 
    m_div.setAttribute('style', 'display: grid; grid-template-columns: repeat(4, 1fr);');
    document.body.prepend(m_div);
    
let url = 'https://jsonplaceholder.typicode.com/photos'
fetch(url)
.then(res => res.json())
.then(users => {    
    for (let i of users.filter(elem => elem.albumId == 20)){
        let div = document.createElement('div');
        let img = document.createElement('img'); 
        let h2 = document.createElement('h2');    
        img.src = i.thumbnailUrl;
        h2.innerText = i.title;    
        img.setAttribute('style', 'height: 200px; width: 200px;');
        div.prepend(img);       
        m_div.prepend(div);    
        div.append(h2);
    }
}
)
