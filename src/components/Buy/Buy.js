
import './buy.css'

import {Link} from "react-router-dom";

import React, {useContext, useState} from 'react'
import {cartContext} from '../../context/CartContext'

import {db} from '../../firebase/firebase'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'

function Buy() {

    const [changeComponentForm, setChangeComponentForm]= useState(false);
    const [changeOrderNum, setChangeOrderNum]= useState(false);

    const {products, addingPrice} = useContext(cartContext);
    const [idBuy, setIdBuy]= useState("")
    const [userInfo, setUserInfo]= useState({});

    const FoundOrderBtn = (e) => {
        e.preventDefault();          

        setIdBuy( e.target.parentElement[0].value)      
        setChangeComponentForm(true);
        setChangeOrderNum(true);       
    }
    

    const submitForm = (e) => {        
      
        e.preventDefault();     
        if (e.target.parentElement[0].value !== "" && e.target.parentElement[1].value !== ""){
           setUserInfo({ mail: e.target.parentElement[0].value, name: e.target.parentElement[1].value});             
      
            e.target.parentElement[0].value = "";  e.target.parentElement[1].value = "";   
        
            setChangeComponentForm(true)
        }
        
        else {
            alert("faltan datos");
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

        })
        setChangeOrderNum(true);
        
        
    }
 
    
    if (  !changeComponentForm ) {

        return (
        <>
            <div  className='foundOrderForm'>   
                <form className='FoundOrderForm'>                   
                 
                    {/* <p className='textInfo'>Buscar compra realizada</p> */}
                        <div className="input-field inline">
                            <input id="email_inline" type="text" className="validate"/>
                            <label htmlFor="email_inline">Ingresar numero de compra</label>
                            <span className="helper-text" data-error="wrong" data-success="right">Buscar detalles de compra realizada</span>
                        </div>
                            
                   
                   
                    <input className='btnSubmit' type="submit" value="Enviar información" onClick={FoundOrderBtn}></input>                  
                </form>
            </div>

            <br />
            
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
                
                    <input className='btnSubmit' type="submit" value="Enviar información" onClick={submitForm}></input>                    
                </form>                
            </div>
        
        </>
        )
    }

    else if ( changeComponentForm ) {
        return (
            <>
                <br/>
                <div className='finishContainer valign-wrapper'>
                    
                    <h6 className='center-align '>Tus datos fueron ingresados</h6>
                    {changeOrderNum? <> <h6 className='center-align '>Numero de Orden: {idBuy} </h6> <Link className='btnDetail center-align' to={`/tecno-stock/detalle/${idBuy}`}>  <p> Ver Detalles de la Compra </p> </Link> </>:  <button className='waves-effect waves-light btn deep-orange accent-4 btnBuy' onClick={buyEnd}>Comprar</button>}
                   

                </div> 
            </>
        )
    }
       
}

export default Buy