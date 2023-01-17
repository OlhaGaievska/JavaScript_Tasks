import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Stars from '../Stars/Stars';
import './List_of_all_products.css';

function List_of_all_products(){
        
    const [products, setProducts] = useState([])    

    useEffect(()=>{
        let url = 'https://fakestoreapi.com/products'
        fetch(url)
            .then(res=> res.json())
            .then(data => setProducts(data))
    },[])

    return(       
        <div className='List_of_all_box'>
            {products.map(elem => 
                <Link to={`/product/${elem.id}`}>
                    <div className='List_of_all_products'>
                        <h2 className='title'>{elem.title}</h2>                                                                                                               
                        <img
                            src={elem.image}
                            className="product_photo"
                            alt="product_photo"/>
                        <h3 className='price'>{elem.price} €</h3>
                        
                            <Stars rating = {Math.round(elem.rating.rate)}/>
                        
                    </div>                    
                </Link>
            )}
        </div>          
    )
}

export default List_of_all_products