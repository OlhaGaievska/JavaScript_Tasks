import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './Product_description.css';
import Stars from './Stars/Stars';


function Product_description(){

    

    const [product, setProducts] = useState({})
    
    let {id} = useParams()

    
    let navigate = useNavigate()
    let backsite = () => navigate(-1)
  

    useEffect(()=>{
        let url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
            .then(res=> res.json())
            .then(data => setProducts(data))
    },[])

    return (
        <div>
            <div className='button_back'>
                <button onClick={() => backsite()}>Back</button>
            </div>               
            {(product.id) ? 
            <div className='Product_description'>
                <h2>{product.title}</h2>
                <h3>{product.price} €</h3>                                
                <img
                    src={product.image}
                    className="product_photo"
                    alt="product_photo"/>
                <p>{product.category}</p>    
                <h4>{product.description}</h4>
                <Stars rating = {product?.rating?.rate}/>
            </div> :
            <div className='product_not_found_box'> 
                <p className='product_not_found'>Product not found<br/>Please, go "Back"!</p>
            </div>
            }
        </div>
    )
}
export default Product_description