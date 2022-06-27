// recibe un producto por props y muestra sus caracteristicas

import React from 'react'
import './item.css';

// PROBANDO ITEM COUNT ACA
import ItemCount from '../ItemCount/ItemCount';

const item = ({product}) => {

    const {id, category, name, price, description, img}= product


    // PROBANDO ITEM COUNT ACA
    function onAdd(cantidad) {      
        alert("Seleccionaste " + cantidad + " producto/s");   
        
    }

  return (
    
        <div className='itemContainer'>       
            
            <div className='img-Container'>
                <img className='responsive-img' src={img} alt="{name}" />
            </div>
            
            <h4>{name} </h4>
            <h5>Precio: $<span className='ItemCount-price'>{price}</span></h5>    
            <p>{description}</p>

            {/* PROBANDO ITEMCOUNT ACA */}
            <div>           
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
            

        </div>    
    
  )
}

export default item