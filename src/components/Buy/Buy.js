
import './buy.css'

import {Link} from "react-router-dom";

import React, {useContext, useState} from 'react'
import {cartContext} from '../../context/CartContext'

import {db} from '../../firebase/firebase'
import {collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Buy() {
    
    const [changeComponentForm, setChangeComponentForm]= useState(false);
    const [changeOrderNum, setChangeOrderNum]= useState(false);

    
    const {products, addingPrice, clear, deleteProduct} = useContext(cartContext);
    const [idBuy, setIdBuy]= useState("")
    const [userInfo, setUserInfo]= useState({});
    
    const submitForm = (e) => {                
      
        e.preventDefault();     

        products.forEach(element => {
           if (element.qty > element.stock){         
                const notify = () => {      
                    toast.warn("Lo siento. Quitamos el " + element.name +  " del carrito. Seleccionaste mas unidades de las que contamos. Por el momento tenemos " + element.stock + " unidad/es del producto", { autoClose: false 
                });}

                notify()                     
                deleteProduct(element.id)       
            }
        })

        
        if (e.target.parentElement[0].value !== "" && e.target.parentElement[1].value !== ""){
           setUserInfo({ mail: e.target.parentElement[0].value, name: e.target.parentElement[1].value});             
      
            e.target.parentElement[0].value = "";  e.target.parentElement[1].value = "";   
        
            setChangeComponentForm(true)
        }
        
        else {
            
          
            const notify = () => {      
                toast.error("Completar todos los campos",{ autoClose: 2000 });}
            notify()
            
          
        }     
    }
  

    const productsMap =  products.map (product => {
        return {            
            name: product.name,
            price: product.price,
            description: product.description,    
            quantity: product.qty,        
        }
    }) 

    const buyEnd = () => {        
      
        const buyCollection = collection (db, 'ventas');
        addDoc (buyCollection, {
            userInfo,
            products : productsMap ,
            date : serverTimestamp(),
            totalPrice : addingPrice,
        })
        .then ((result)=>{
            setIdBuy (result.id);     
            
            products.forEach(element => {               
                const upDateCollection = doc (db, 'productos', element.id)
                updateDoc(upDateCollection, {stock: element.stock - element.qty})
            })

        })
        setChangeOrderNum(true);     
        
    }
      
    

    function clearCart() {
        clear()
    }

 
    
    if (  !changeComponentForm) {

        return (
        <>
            <br/>
            <br/>
            <br/>
            <div  className='formContainer'>   
                       
                <p className='textInfo'>Datos para realizar la compra</p>
           
                <form >                    
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate"  />
                        <label htmlFor="email">Ingresar Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="name" type="text" className="validate"  />
                        <label htmlFor="name">Ingresar Nombre</label>
                    </div>              
                
                    <input className='btnSubmit' type="submit" value="Enviar información" onClick={submitForm}/> <ToastContainer />                    
                </form>                
            </div>
        
        </>
        )
    }

   

    else if ( changeComponentForm ) {
        return (
            <>
                <br/>
                <br/>
                <br/>
                <div className='finishContainer valign-wrapper'>
                    
                    <h6 className='center-align '>Tus datos fueron ingresados</h6>
                    {changeOrderNum? <> <h6 className='center-align '>Numero de Orden:  {idBuy} </h6> <Link className='btnDetail center-align' to={`/tecno-stock/detalle/${idBuy}`}  onClick={clearCart}>  <p> Ver Detalles de la Compra </p> </Link> </>:  <button className='waves-effect waves-light btn deep-orange accent-4 btnBuy' onClick={buyEnd}>Comprar</button>}
                   

                </div> 
            </>
        )
    }
       
}

export default Buy