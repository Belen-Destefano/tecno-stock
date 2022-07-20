import React from 'react'
// import { useState } from 'react'
import useItemCount from './useItemCount'

import './ItemCount.css'




const ItemCount = ({stock, initial, onAdd}) => {

  
    const {count, quantity} = useItemCount(stock, initial)


  return (        
       
        <div className='countModifier-container' >

            <span onClick={()=> count(-1)}> - </span>
            <span> {quantity} </span>
            <span onClick={()=> count(+1)}> + </span>

            

            {/* <a className='waves-effect waves-light btn   grey darken-4 btnAdd' onClick={()=> onAdd(quantity)} >Agregar al carrito</a> */}
            <button className='waves-effect waves-light btn   grey darken-4 btnAdd' onClick={()=> onAdd(quantity)} >Agregar al carrito</button>


        </div>     
 

        
    )
}
export default ItemCount