import Logos from './Logos';
import './Footer.css';
import './FooterMedia.css';

import b_b from './Img/b_b.png';
import be from './Img/Be.png';
import inn from './Img/in.png';
import instagram from './Img/instagram.png';


function Footer(){
    return(
        <div className="footer_main">
            <div className="footer_main_block margin_width">
                <h2 className="footer_h2">Contacts</h2>
                <p className="footer_text">Want to know more or just chat?<br/>You are welcome!</p> 
                <div className="footer_button">
                   <button>Send message</button> 
                </div>
                <div className="footer_logos_block">
                    {logos.map((elem)=><Logos url ={elem.url}/>)}
                </div>
                <p className="footer_text_small">Like me on<br/>LinkedIn, Instagram, Behance, Dribble</p>
            </div>
        </div>
    )

}

let logos = [
    {url:inn},
    {url:instagram},
    {url:be},
    {url:b_b}
]

export default Footer