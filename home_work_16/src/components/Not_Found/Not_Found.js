import oops from "./oops.png"
import {useNavigate} from 'react-router-dom'
import './Not_Found.css';

function Not_Found(){
    let navigate = useNavigate()
    let backsite = () => navigate(-1)

    return(
        <div>
            <div className='button_back'>
                    <button onClick={() => backsite()}>Back</button>
                </div>
            <div className="not_found_box"> 
                <p className='not_found'>Not found<br/>Please, go "Back"!</p>          
                <img
                    src={oops}
                    className="ooops_photo"
                    alt="ooops_photo"
                />
            </div>
        </div>
    )
}

export default Not_Found