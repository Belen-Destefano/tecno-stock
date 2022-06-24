import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) =>{
   
    function onAdd(e) {      
        
        console.log((e.target.parentElement.childNodes[1]).textContent); 

    }
    
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


