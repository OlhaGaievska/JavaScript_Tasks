import Programs from './Programs';
import './Skills.css';
import './SkillsMedia.css';

import css from './Img/css.png';
import html from './Img/html.png';
import js from './Img/js.png';
import react from './Img/react.png';
import four_stars from './Img/four_stars.png';
import three_stars from './Img/three_stars.png';


function Skills(){
    return(
        <div className="skills margin_width">
            <h2 className="skills_h2">Skills</h2>
            <p className="skills_p">I work in such technologies as</p>
            <div className="skills_program_block">
                {programs.map((elem)=><Programs url_program ={elem.url_program} program_name = {elem.program_name} url_stars ={elem.url_stars}/>)}
            </div>
        </div>
    )

}

let programs = [
    {url_program:html, program_name:'HTML5', url_stars:four_stars},
    {url_program:css, program_name:'CSS3', url_stars:three_stars},
    {url_program:js, program_name:'Javascript', url_stars:four_stars},
    {url_program:react, program_name:'React', url_stars:four_stars}
]
export default Skills