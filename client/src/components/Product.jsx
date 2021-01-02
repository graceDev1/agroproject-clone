import React from 'react'
import '../style/Product.css';

function Product({img,title}) {
    return (
       
            <div class="card">
                    <img src={img} 
                    class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">{title}</p>
                    </div>
            </div>
           
       
    )
}

export default Product
