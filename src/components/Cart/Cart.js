import React, { useContext } from 'react'
import {cartContext} from '../../context/CartContext'
import './cart.css'
import {Link} from "react-router-dom";
import Buy from '../Buy/Buy'
import FoundOrder from '../FoundOrder/FoundOrder'


function Cart() {

  const {products,deleteProduct, clear, addingPrice }=useContext(cartContext)
  const totalPrice = addingPrice
 
  if (products.length) {

    return (

      <div className='background'>

        <section className='cartContainer'>
          <i  onClick={()=> clear()} className="material-icons tiny deleteBtn">clear</i>    
          <FoundOrder/>

          <h2 className='center-align'>Carrito</h2>
            
          {
            products.map((product)=> {
              
              return <section key={product.id} className='productCartContainer ' > 
        
                <img className='imgCart' src={product.img} alt="" />
                <div className='textCart' >
                  <h6>{product.name}</h6>
                  <p>Cantidad: {product.qty}</p>
                  <p>Precio: {product.price}</p>
                </div>
                
                <i  onClick={()=> deleteProduct(product.id)} className="material-icons Small deleteBtn">clear</i> 
                               
              </section> 
            }) 
          }   

          <div>     
            <Link className='btnMore center-align' to={`/tecno-stock`}>  <p> Ver mas productos </p> </Link>     
            <br/>         
            <h5  className='center-align'  >Total: ${ totalPrice} </h5> 

            <Buy/>
          </div>

        </section>

      </div>
    )
  }

  else {
    return (
      <div className='background'>        
        <section className='cartContainer'>
          <FoundOrder/>
          <h2 className='center-align'>Carrito</h2>
  
         <div > <h4 className='center-align '> No hay productos </h4>          
            <Link className='btnMore center-align' to={`/tecno-stock`}>  <p> Volver a Productos </p> </Link>     
          </div> 
     
        </section>
        
      </div>
    )
  }
  
}

export default Cart