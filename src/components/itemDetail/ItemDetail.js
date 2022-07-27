import React, {useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css'
import {Link} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'

import {cartContext} from '../../context/CartContext'



// PROBANDO ITEM COUNT ACA


function ItemDetail({productDetail}) {

  const {category,price, img,stock, title, extendedName, extendedDescription, anotherDescription, anotherImage} = productDetail
    

  const [changeBoton, setChangeBoton]= useState(true)

  // ACAAAAAAAAA CONTEXTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  const {addProduct}=useContext(cartContext)
  

  // ITEM COUNT FUNCTION
  function onAdd(quantity) {      

    const product = {...productDetail, qty: quantity } 
    addProduct(product)
    setChangeBoton(false)
  } 


  return (
    <section>

      <div className='frontProduct'>
        <h2 className='frontTitle'>{category}</h2>
        <Link to={`/`}> <p> Home </p> </Link>
        <Link to={`/categoria/${category}`}> <p> / Categoria </p> </Link>
       
       
      </div>
      
      <div className='mainDetails'>

        <img className='imgProductDetail' src={img} alt={extendedName} />
        <div className='extendedName-text'>
          <h2>{extendedName}</h2>
        </div>
        
        {/* ITEMCOUNT */}   
        <div>
          <h5>Precio: $<span className='ItemCount-price'>{price}</span></h5>  
          <Link className='btnMore center-align' to={`/`}>  <p> Ver mas productos </p> </Link>
          <br />
          <br />
          { changeBoton? <ItemCount stock={stock} initial={1}  onAdd={onAdd}/> :  <Link to="/carrito"><button className='waves-effect waves-light btn deep-orange accent-4 btngocart'>Ir al carrito</button></Link>    }           
        </div>         

      </div>

      <div className='extendedDescriptionContainer'>
        <div >
          <h3 className='extendedDescription-text' >{title}</h3>
          <p className='extendedDescription-text'>{extendedDescription}</p>
        </div>
      </div>

      <div className='anotherContainer'>
        <img className='responsive-img'  src={anotherImage} alt="" />
        <div>
          <p>{anotherDescription}</p>
        </div>     
      </div>

    </section>
  )
}

export default ItemDetail