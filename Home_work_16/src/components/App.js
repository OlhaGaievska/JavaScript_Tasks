
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Not_Found from "./Not_Found";
import List_of_all_products from "./List_of_all_products/List_of_all_products";
import Product_description from "./Product_description";
import Header from './Header/Header';

/*<Route path="/post/:id/review" element = {<Rewiew/>}/>*/ 

function App(){
    return(
        <div> 
        <Header/>         
            <Router>
                <Routes>
                <Route path="/" element = {<List_of_all_products/>}/>
                    <Route path="/List_of_all_products" element = {<List_of_all_products/>}/>
                    <Route path="/product/:id" element = {<Product_description/>}/>                  
                    <Route path="*" element = {<Not_Found/>}/>                
                </Routes>
            </Router>
        </div>
    )
}

export default App