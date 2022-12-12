function Logos(props){
    const {url} = props
    return(        
        <img src={url} className="footer_logos" alt='footer_logos'  width={40} height={40}/>       
    )
}

export default Logos