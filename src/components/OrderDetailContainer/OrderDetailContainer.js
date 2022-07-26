import React, { useContext} from 'react'
import './orderDetailContainer.css'

import {cartContext} from '../../context/CartContext'
import { useParams } from 'react-router-dom';


function OrderDetail() {
    
    
  const {idBuy}= useParams();
  const {products, addingPrice}=useContext(cartContext)   


  return (
    <div>  
        <h2>GRACIAS POR TU COMPRA!</h2>
        <br />
        <section>            
            {products.map((product)=> <h2 className='productListt H2orderDetail' key={product.id}>  Producto: {product.name} / Cantidad: {product.qty} / Precio: {product.price}</h2> )}  
        </section>             
        <section className='detailContainer'>         
            <h2 className='H2orderDetail'>Precio Total: {addingPrice}</h2>
            <h2 className='H2orderDetail'>Orden de compra: {idBuy}</h2>
           
        </section>


        
  </div>

  )
}

export default OrderDetail

