import Menu from "./Menu";
import Avatar from './Avatar.png';
import Avatar_media from './Avatar_media.png';
import './Header.css';
import './HeaderMedia.css';
import Hamburger from "./Hamburger";
import { useState } from "react"




function Header(){
const [hamburgerOpen, sethamburgerOpen] = useState(false);
const toggleHamburger = () =>{
    sethamburgerOpen(!hamburgerOpen)
}

    return(
        <header className="header_wrapper margin_width">                 
            <nav className="header_nav">
                <ul className="header_ul">                               
                    {menu.map((elem)=><Menu list ={elem.list} color = {elem.color}/>)}
                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>                                                             
            </nav>                
            <style jsx>{`@media (max-width: 425px) {
            .header_ul{display: ${hamburgerOpen ? 'inlane':'none'};}}
            `}
            </style>            
            <hr className="header_hr"/>
            <div className="header_bottom">
                <div className="profole_info">
                  <h1 className="profole_info_name">Inants <br/> Hayk</h1>
                    <h2 className="profole_info_about">web developer <br/> 28 years old, Yerevan</h2>
                      <div>
                        <p className="profole_info_ru_eng"> ENG</p>
                        <hr className="profole_hr"/>
                        <p className="profole_info_ru_eng ru"> RU</p>
                    </div>
                </div>               
                <div class="header_bottom_img">                
                    <img className="profole_img" alt="profole_img" src={Avatar} width={950} height={380}/>
                    <img className="profole_img_media" alt="profole_img_media" src={Avatar_media} width={316} height={478}/>                
                </div>                 
            </div>            
        </header>        
    )
}

let menu = [
    {list:'Home', color:'rgb(0,0,0)'},
    {list:'About me', color:'rgb(128,128,128)'},
    {list:'Skills', color:'rgb(128,128,128)'},
    {list:'About me', color:'rgb(128,128,128)'},
    {list:'Portfolio', color:'rgb(128,128,128)'},
    {list:'Contacts', color:'rgb(128,128,128)'}
]


export default Header