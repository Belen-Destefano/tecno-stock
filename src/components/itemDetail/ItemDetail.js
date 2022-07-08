import React, {useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css'
import {Link} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'


// PROBANDO ITEM COUNT ACA


function ItemDetail({productDetail}) {

  const {id, category, name, price, description, img,stock, title, extendedName, extendedDescription, another: {anotherDescription, anotherImage}} = productDetail
  
  
  const [quantityProduct, setQuantityProduct]= useState(0)
  const [changeBoton, setChangeBoton]= useState(true)

  // ITEM COUNT FUNCTION


  function onAdd(quantity) {          
    
    setQuantityProduct(quantity)     
  
    setChangeBoton(false)
  }
 
  console.log('probando si se guardo '+ quantityProduct);

   
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
         


          { changeBoton? <ItemCount stock={stock} initial={1}  onAdd={onAdd}/> : <Link to="/carrito"><button className='waves-effect waves-light btn deep-orange accent-4 btngocart'>Ir al carrito</button></Link>   }            
         
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