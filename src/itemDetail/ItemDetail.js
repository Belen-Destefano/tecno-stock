import React from 'react'
import ItemCount from '../components/ItemCount/ItemCount';
import './itemDetail.css'

// PROBANDO ITEM COUNT ACA





function ItemDetail({productDetail}) {

  const {id, category, name, price, description, img, title, extendedName, extendedDescription, another: {anotherDescription, anotherImage}} = productDetail
  

  // ITEM COUNT FUNCTION
  function onAdd(cantidad) {      
    alert("Seleccionaste " + cantidad + " producto/s");         
  }

  return (
    <section>
      
      <div className='mainDetails'>

        <img className='imgProductDetail' src={img} alt={extendedName} />
        <div className='extendedName-text'>
          <h2>{extendedName}</h2>
        </div>
        
        {/* ITEMCOUNT */}   
        <div>

          <h5>Precio: $<span className='ItemCount-price'>{price}</span></h5>            
          <ItemCount stock={5} initial={1} onAdd={onAdd}/>
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