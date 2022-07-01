import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import {getData} from '../mocks/fakeApiDetails'

function ItemDetailContainer() {

    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState (true)
   

    const getProductDetail = async () =>{
        try{
            const respuesta = await getData
            setProductDetail(respuesta)
        } catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
  

    useEffect (()=> {
        getProductDetail()
    },[])



  return (
    <>                   

        { loading? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="cargando" /> : <ItemDetail productDetail = {productDetail} />}                    

    </>
  )
}

export default ItemDetailContainer