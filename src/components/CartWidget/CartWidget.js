import React, {useContext} from 'react'
import './CartWidget.css';
import {cartContext} from '../../context/CartContext'

const CartWidget = () => {

    const {quantityProduct, products} = useContext(cartContext);

   
    return (
        <div className='containerCarrito'>
            <i className="material-icons carrito" alt="carrito">shopping_cart</i>
            { products.length > 0 &&  <span className="contadorCarrito">{quantityProduct}</span> }
           
        </div>     

    )        
    
}

export default CartWidget