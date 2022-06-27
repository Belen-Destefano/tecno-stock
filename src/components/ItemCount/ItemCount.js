import React from 'react'
// import { useState } from 'react'
import useItemCount from './useItemCount'

import './ItemCount.css'
import imagen from '../../assets/imagen.png'


const ItemCount = ({stock, initial, onAdd}) => {

  
    const {count, amount} = useItemCount(stock, initial)

  return (        
       
        <div className='countModifier-container' >

            <span onClick={()=> count(-1)}> - </span>
            <span> {amount} </span>
            <span onClick={()=> count(+1)}> + </span>

            {/* <a className='waves-effect waves-light btn   grey darken-4 btnAdd' onClick={(e)=> onAdd(e)} >Agregar al carrito</a> */}

            <a className='waves-effect waves-light btn   grey darken-4 btnAdd' onClick={()=> onAdd(amount)} >Agregar al carrito</a>


        </div>     
 

        
    )
}
export default ItemCount