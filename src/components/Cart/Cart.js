import React, { useContext } from 'react'
import {cartContext} from '../../context/CartContext'
import './cart.css'
import {Link} from "react-router-dom";
import Buy from '../Buy/Buy'


function Cart() {

  const {products,deleteProduct, clear, addingPrice }=useContext(cartContext)

  const totalPrice = addingPrice

  if (products.length) {

    return (

      <div className='background'>
        <section className='cartContainer'>
          <i  onClick={()=> clear()} className="material-icons tiny deleteBtn">clear</i>    
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
           <Link className='btnMas center-align' to={`/`}>  <p> Ver mas productos </p> </Link>     
            <br/>
            {/* <hr /> */}
            {/* <br/> */}
            <h5  className='center-align'  >Total: ${ totalPrice} </h5>
            
            <Buy/>
            {/* <Link to="/carrito" className='linkBtnBuy'><button className='waves-effect waves-light btn deep-orange accent-4 btnBuy'>Comprar</button></Link>      */}
          </div>
        </section>
      </div>

    )
  }

  else {
    return (
      <div className='background'>        
        <section className='cartContainer'>
          <h2 className='center-align'>Carrito</h2>
  
         <div > <h4 className='center-align '> No hay productos </h4>
            <Link className='btnCartVolver center-align' to={`/`}>  <p> Volver a Productos </p> </Link>
          </div> 
          
          
        </section>
      </div>
    )
  }
  
}

export default Cart