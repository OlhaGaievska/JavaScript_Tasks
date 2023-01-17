import './Stars.css';

function Stars(props){
    const {rating} = props
    
    function getStars(number){
        let array = []
        for(let i = 0; i < 5; i++){
           if (number > i){
            array.push('fa fa-star active')
           } else {
            array.push('fa fa-star')
           }
        }
        return array
    }
  
    let stars = getStars(rating)

    return (        
        <div className='stars'>
            {stars.map(elem => <span className={elem}></span>)}
        </div>        
    )
}  

export default Stars