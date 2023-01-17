import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import './Product_description.css';
import Stars from './Stars/Stars';


function Product_description(){

    

    const [products, setProducts] = useState({})
    
    let {id} = useParams()

    
    let navigate = useNavigate()
    let backsite = () => navigate(-1)
  

    useEffect(()=>{
        let url = 'https://fakestoreapi.com/products'
        fetch(url)
            .then(res=> res.json())
            .then(data => setProducts(data.find(elem => elem.id == id)))
    },[])

    return (
        <div>
            <div className='button_back'>
                <button onClick={() => backsite()}>Back</button>
            </div>               
            {(products) ? 
            <div className='Product_description'>
                <h2>{products.title}</h2>
                <h3>{products.price} €</h3>                                
                <img
                    src={products.image}
                    className="product_photo"
                    alt="product_photo"/>
                <p>{products.category}</p>    
                <h4>{products.description}</h4>
                
            </div> : 
            <p>Товар не найден</p>
            }


        </div>
    )
}
export default Product_description