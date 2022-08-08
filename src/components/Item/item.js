import React from 'react'
import './item.css';
import { Link } from 'react-router-dom';


const item = ({product}) => {

    const {name, price, description, img}= product

  return (
        <div className='itemContainer'>       
            
            <div className='img-Container'> 
               
                <Link to={`/tecno-stock/producto/${product.id}`}> <img className='responsive-img' src={img} alt="{name}" /></Link>
            </div>

            <div className='descriptionContainer'>
                
                <h4 className='tittleProducts'>{name} </h4>
                <h5 className='priceHome'>${price} - Precio en un pago</h5>
                <img className='star' src="https://i.postimg.cc/QCpgX1Nm/estrellas.jpg" alt="" />
                <p className='textHeight'>{description}</p>
                 <Link to={`/tecno-stock/producto/${product.id}`} className='waves-effect waves-light btn   grey darken-4 btnVerMas' >Ver detalles</Link>
            </div>       

        </div>        
    )
}

export default item