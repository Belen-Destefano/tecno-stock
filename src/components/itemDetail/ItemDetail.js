import React, {useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css'
import {Link} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'

import {cartContext} from '../../context/CartContext'


function ItemDetail({productDetail}) {

  const {category,price, img,stock, title, extendedName, extendedDescription, anotherDescription, anotherImage} = productDetail    

  const [changeBoton, setChangeBoton]= useState(true)

  const {addProduct}=useContext(cartContext)  


  function onAdd(quantity) {      

    const product = {...productDetail, qty: quantity } 
    addProduct(product)
    setChangeBoton(false)
  } 

  return (
    <section>

      <div className='frontProduct'>
        <h2 className='frontTitle'>{category}</h2>
        <Link to={`/tecno-stock`}> <p> Home </p> </Link>
        <Link to={`/tecno-stock/categoria/${category}`}> <p> / Categoria </p> </Link>       
       
      </div>
      
      <div className='mainDetails'>

        <img className='imgProductDetail' src={img} alt={extendedName} />
        <div className='extendedName-text'>
          <h2>{extendedName}</h2>
        </div>
        

        <div>
          <h5>Precio: $<span className='ItemCount-price'>{price}</span></h5>  
          <Link className='btnMoreItem center-align' to={`/tecno-stock`}>  <p> Ver mas productos </p> </Link>
          <br />
          <br />
          { changeBoton? <ItemCount stock={stock} initial={1}  onAdd={onAdd}/> :  <Link to="/tecno-stock/carrito"><button className='waves-effect waves-light btn deep-orange accent-4 btngocart'>Ir al carrito</button></Link>    }           
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