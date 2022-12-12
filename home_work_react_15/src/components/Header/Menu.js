
function Menu(props){
    const {list, color} = props
    return(          
        <li className="menu_li" style={{color: color}}>{list}</li>        
    )
}

export default Menu