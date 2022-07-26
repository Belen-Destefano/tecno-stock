// recibe un producto por props y muestra sus caracteristicas

import React from 'react'
import './item.css';
import { Link } from 'react-router-dom';


const item = ({product}) => {

    const {id, category, name, price, description, img}= product


  return (
    
        <div className='itemContainer'>       
            
            <div className='img-Container'> 
               
                <Link to={`/producto/${product.id}`}> <img className='responsive-img' src={img} alt="{name}" /></Link>
            </div>

            <div className='descriptionContainer'>
                
                <h4>{name} </h4>
                <h5 className='priceHome'>${price} - Precio en un pago</h5>
                <img className='estrellas' src="https://i.postimg.cc/QCpgX1Nm/estrellas.jpg" alt="" />
                <p className='textHeight'>{description}</p>
                 <Link to={`/producto/${product.id}`} className='waves-effect waves-light btn   grey darken-4 btnVerMas' >Ver detalles</Link>
            </div>
            


        </div>    
    
  )
}

export default item