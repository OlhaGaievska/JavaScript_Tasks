function Content (p){
    console.log(p)
    return (
        <div>
           <h2>{p.title}</h2>
           <img src={p.url} width={300} height={300}/>
        </div>
    )
}
export default Content