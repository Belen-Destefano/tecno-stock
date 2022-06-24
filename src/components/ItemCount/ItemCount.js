import React from 'react'
// import { useState } from 'react'
import useItemCount from './useItemCount'

import './ItemCount.css'
import imagen from '../../assets/imagen.png'


const ItemCount = ({stock, initial, onAdd}) => {

  
    const {count, amount} = useItemCount(stock, initial)

  return (  
        <section className='itemCount-container'>       
        
            <img className='responsive-img' src={imagen} alt="" />
            <div className='countModifier-container' >
        
                <span onClick={()=> count(-1)}> - </span>
                <span> {amount} / {stock}</span>
                <span onClick={()=> count(+1)}> + </span>

            </div>       
            <h4>Producto</h4>
            <h5>Precio: $<span className='ItemCount-price'>500</span></h5>    
            <ul>
                <li>- Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>- Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>- Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                <li>- Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
            </ul>

            {/* <button className='addProducts' onClick={(e)=> onAdd(e)}>Agregar al carrito</button> */}
            <a className='waves-effect waves-light btn   grey darken-4 btnAdd' onClick={(e)=> onAdd(e)} >Agregar al carrito</a>

        </section>    
    )
}
export default ItemCount