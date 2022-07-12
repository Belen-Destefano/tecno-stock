import React, {useContext} from 'react'
import './CartWidget.css';
import {context} from '../../context/CartContext'

const CartWidget = () => {

    const {quantityProduct} = useContext(context);
   
    return (
        <div className='containerCarrito'>
            <i className="material-icons carrito" alt="carrito">shopping_cart</i>
            <span className="contadorCarrito">{quantityProduct}</span>      
        </div>     

    )        
    
}

export default CartWidget