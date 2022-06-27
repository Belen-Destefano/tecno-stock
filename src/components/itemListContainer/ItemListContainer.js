// import React, { useEffect, useState } from 'react'
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
// import Json from '../../datos.json';


const ItemListContainer = ({greeting}) =>{ 
  

    function onAdd(cantidad) {      
        alert("Seleccionaste " + cantidad + " producto/s");   
        
    }

    // function onAdd(e) {              
    //     console.log((e.target.parentElement.childNodes[1]).textContent); 
    // }
    
    return (
        <>           
            <div>
                <h1 className='greeting'>{greeting}</h1>              
            </div>
            <div>           
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        
        </>
  
    )
}

export default ItemListContainer


