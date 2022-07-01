// recibe un producto por props y muestra sus caracteristicas

import React from 'react'
import './item.css';


const item = ({product}) => {

    const {id, category, name, price, description, img}= product


  return (
    
        <div className='itemContainer'>       
            
            <div className='img-Container'>
                <img className='responsive-img' src={img} alt="{name}" />
            </div>

            <div className='descriptionContainer'>
                
                <h4>{name} </h4>
                <h5 className='priceHome'>${price} - Precio en un pago</h5>
                <p >{description}</p>
                <a className='waves-effect waves-light btn   grey darken-4 btnVerMas' >Ver detalles</a>
            </div>
            


        </div>    
    
  )
}

export default item