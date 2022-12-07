import Content from "./Content";

const title_url = [
    {title:'reprehenderit est deserunt velit ipsam', url:'https://via.placeholder.com/600/771796'},
    {title:'accusamus beatae ad facilis cum similique qui sunt', url:'https://via.placeholder.com/600/24f355'},
    {title:'officia porro iure quia iusto qui ipsa ut modi', url:'https://via.placeholder.com/600/d32776'},
    {title:'culpa odio esse rerum omnis laboriosam voluptate repudiandae', url:'https://via.placeholder.com/600/f66b97'},
    {title:'natus nisi omnis corporis facere molestiae rerum in', url:'https://via.placeholder.com/600/56a8c2.'}
]

function App(){
    return(
        <div>
        {title_url.map((elem)=><Content title ={elem.title} url ={elem.url}/>)}
        </div>
    )
}

export default App