
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList'
// import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import {getData} from '../../mocks/fakeApi'


const ItemListContainer = ({greeting}) =>{ 

    const [productList, setProducList]= useState([])
    const [loading, setLoading]= useState (true)

    // useEffect (()=>{
    //     getData
    //     .them ((result)=> setProducList(result))
    //     .catch ((error) => console.log(error))
    //     .finally (()=>setLoading(false))
    // }, [])

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

  

    // function onAdd(cantidad) {      
    //     alert("Seleccionaste " + cantidad + " producto/s");   
        
    // }

    // function onAdd(e) {              
    //     console.log((e.target.parentElement.childNodes[1]).textContent); 
    // }
    
    return (
        <>           
            <div>
                <h1 className='greeting'>{greeting}</h1>              
            </div>

            { loading? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="cargando" /> : <ItemList productList = {productList} />}           

            {/* <div>           
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div> */}
        
        </>
  
    )
}

export default ItemListContainer


