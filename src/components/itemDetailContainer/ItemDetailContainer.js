import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'

import {useParams} from 'react-router-dom';

import {db} from '../../firebase/firebase';
import {getDoc, doc, collection} from 'firebase/firestore'

function ItemDetailContainer() {

    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState (true)

    const {productId}= useParams();

    useEffect (()=> {

        const productsCollection = collection (db, 'productos');      
        const refDoc = doc(productsCollection, productId )
        setLoading(true)

        getDoc(refDoc)
       
        .then((res) => {
            setProductDetail( {id: res.id, ...res.data()});            
        })
        .catch((error) => {
            console.log(error)      
        })
        .finally(() => {
            setLoading(false)
        })

    },[productId])   


  return (
    <>                   

        { loading? <div className='spinnerCenter'> <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="cargando" /></div> : <ItemDetail productDetail = {productDetail} />}                    

    </>
  )
}

export default ItemDetailContainer