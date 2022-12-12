function Programs(props){
    const {url_program, program_name, url_stars} = props
    return(
        <div className="skills_program">
            <img src={url_program} className="skills_img_program" alt='skills_img_program' width={88} height={88}/>         
            <p className="skills_program_name">{program_name}</p>
            <img src={url_stars} className="skills_img_stars" alt='skills_img_stars' width={166} height={26}/> 
        </div>         
    )
}

export default Programs