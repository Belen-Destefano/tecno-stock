
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList';
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';

import {db} from "../../firebase/firebase";
import { getDocs, collection, query, where } from 'firebase/firestore';


const ItemListContainer = ({greeting}) =>{ 

    const [productList, setProductList]= useState([])
    const [loading, setLoading]= useState (true)

    const {categoryId} = useParams();   
 

    useEffect (()=> {

        getDocs (categoryId ? query(collection(db, 'productos'), where('category', '==', categoryId)) : collection(db, 'productos') )


            .then (result =>{
                const lista = result.docs.map (product => {
                    return {  
                        id: product.id,
                        ...product.data()                
                    }
                }) 
                setProductList( lista);
            })
            
            
            .catch((error) => {
                console.log(error)      
            })
            .finally(() => {
                setLoading(false)
            })
            
        },[categoryId]);
        
        
        return (
        <>           
            <div className='greetingBackground'>
                <div className='greetingContainer'>
                    <h2 className='greetingTwo'>DISEÑO. INNOVACIÓN.</h2>
                    <h2 className='greetingTwo'>TU LUGAR.</h2>
                    <h1 className='greeting'>{greeting}</h1>  
                    <h3 className='greetingThree'>Promociones todo el mes  hasta agotar stock</h3>
                </div>            
            </div>

            <div className='bannerContainer'>
                <img className="responsive-img imgBannerPago"  src="https://i.postimg.cc/050gSWzY/formasdepago.jpg" alt="Formas de pago" />
                <img className="responsive-img imgBannerPagoTwo"  src="https://i.postimg.cc/P5bhv2d3/formasdepago-Dos.jpg" alt="Formas de pago" />
            </div>

            { loading?<div className='spinnerCenter'> <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="cargando" /></div> : <ItemList productList = {productList} />}                    
        

        </>
  
  )
}

export default ItemListContainer


