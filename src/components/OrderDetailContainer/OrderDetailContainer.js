import React, {  useEffect, useState} from 'react'
import './orderDetailContainer.css'

import {db} from "../../firebase/firebase";
import {getDoc, doc, collection} from 'firebase/firestore'
import { useParams } from 'react-router-dom';




function OrderDetail() {
    
  const {idBuy}= useParams();
  const [order, setOrder]= useState([])
  const [orderProducts, setOrderProducts]= useState([])
  
  
  useEffect (()=> {   

    const productsCollection = collection (db, 'ventas');    
    const refDoc = doc(productsCollection, idBuy )

    getDoc ( refDoc )  

    .then((res) => {
      
      setOrder( {id: res.id, ...res.data()}); 
      setOrderProducts ( res.data().products);            
    })
    .catch((error) => {
      console.log(error)      
    })    

    
  },[idBuy]);
  
  const {id,totalPrice} = order    




  return (
  
  <div className='orderDetailContainer'>  
    <h4 >GRACIAS POR TU COMPRA!!</h4>
    <h6>Orden de compra {id}</h6>
    <br />

    {  orderProducts.map(item=>{
      return <div className='productContainer' key={item.price}> 
        <h6 className='productName'> Producto: {item.name} </h6> 
        <h6> Precio por unidad: {item.price} </h6> 
        <h6> Cantidad {item.quantity} </h6> 
      
      </div>
    })} 
      
    <h4>Total ${totalPrice}</h4>
  </div>

  )
}

export default OrderDetail

