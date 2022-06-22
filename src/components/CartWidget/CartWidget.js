import React from 'react'
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='containerCarrito'>
            <i className="material-icons carrito" alt="carrito">shopping_cart</i>
            <span className="contadorCarrito">0</span>      
        </div>
 
      

    )        
    
}

export default CartWidget