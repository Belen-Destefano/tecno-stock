
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList';
import './ItemListContainer.css';
import {getData} from '../../mocks/fakeApi';

import {useParams} from 'react-router-dom';


const ItemListContainer = ({greeting}) =>{ 

    const [productList, setProducList]= useState([])
    const [loading, setLoading]= useState (true)

    const {categoryId} = useParams();
    // console.log(categoryId);
 
 

    useEffect (()=> {
        setLoading(true)
        getData(categoryId)
        .then((res) => {
            setProducList(res);            
        })
        .catch((error) => {
            console.log(error)      
        })
        .finally(() => {
            setLoading(false)
        })
    },[categoryId])

    
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

            { loading? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="cargando" /> : <ItemList productList = {productList} />}                    
        
        </>
  
    )
}

export default ItemListContainer


