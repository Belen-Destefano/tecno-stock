import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'


import {useParams} from 'react-router-dom';
// import { getProduct } from '../../mocks/fakeApi';

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






        // setLoading(true)
        // getProduct(productId)
        // .then((res) => {
        //     setProductDetail(res);            
        // })
        // .catch((error) => {
        //     console.log(error)      
        // })
        // .finally(() => {
        //     setLoading(false)
        // })
    },[productId])
   

    // CON ASYNC AWAIT - TRY CATCH. lo dejo aca por las dudas q lo cambie mas adelante
    // const getProductDetail = async () =>{
    //     try{
    //         const respuesta = await getData
    //         setProductDetail(respuesta)
    //     } catch(error){
    //         console.log(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }
  

    // useEffect (()=> {
    //     getProductDetail()
    // },[])



  return (
    <>                   

        { loading? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="cargando" /> : <ItemDetail productDetail = {productDetail} />}                    

    </>
  )
}

export default ItemDetailContainer