import React from 'react'
import Item from '../Item/item'
import './itemList.css'

const itemList = ({productList}) => {
  return (
    <div>
        <h3>ULTIMA TECNOLOGIA</h3>
       
        <section className='productList'>
          {productList.map((product)=> <Item key={product.id} product={product}/>)}     
        </section>
          

    </div>
  )
}

export default itemList