
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList'
// import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import {getData} from '../../mocks/fakeApi'


const ItemListContainer = ({greeting}) =>{ 

    const [productList, setProducList]= useState([])
    const [loading, setLoading]= useState (true)
 

    const getProducts = async () =>{
        try{
            const respuesta = await getData
            setProducList(respuesta)
        } catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect (()=> {
        getProducts()
    },[])

    
    return (
        <>           
            <div>
                <h1 className='greeting'>{greeting}</h1>              
            </div>

            { loading? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="cargando" /> : <ItemList productList = {productList} />}                    
        
        </>
  
    )
}

export default ItemListContainer


