import React, {  useEffect, useState} from 'react'
import './orderDetailContainer.css'

import {db} from "../../firebase/firebase";
import {getDoc, doc, collection} from 'firebase/firestore'
import { useParams } from 'react-router-dom';




function OrderDetail() {
    
  const {idBuy}= useParams();
  const [order, setOrder]= useState([])
  
  
  useEffect (()=> {   

    const productsCollection = collection (db, 'ventas');    
    const refDoc = doc(productsCollection, idBuy )

    getDoc ( refDoc )  

    .then((res) => {
      setOrder( {id: res.id, ...res.data()});             
    })
    .catch((error) => {
      console.log(error)      
    })    
    // .finally(() => {
    //   console.log(order);
    // })    
    
  },[idBuy]);
  
  const {id,totalPrice, products} = order    
  console.log(products);
  

  


  return (
  <div>  
    <h5>GRACIAS POR TU COMPRA!!</h5>

    <h5>Orden de compra {id}</h5>

    {/* {  products.map(item=>{
      return <h1 key={item.id}> {item.name} </h1>
    })} */}


    {/* <ul className="right hide-on-med-and-down">

      {products.map((product)=> (
          <li  key={product.id}>  {product.name}</li>                            
      ))}            

    </ul>   */}
   
      
    <h5>Total ${totalPrice}</h5>
       


        
  </div>

  )
}

export default OrderDetail

