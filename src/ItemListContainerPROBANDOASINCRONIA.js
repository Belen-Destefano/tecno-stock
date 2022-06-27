// import React, { useEffect, useState } from 'react'
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
// import Json from '../../datos.json';

// esto es para los productos la caaaaaaaaard. acordarme del css que esta en carpeta equivocada ahroa

 // <section className='itemCount-container'>       
        
        //     <img className='responsive-img' src={imagen} alt="" />
        //     <div className='countModifier-container' >
        
        //         <span onClick={()=> count(-1)}> - </span>
        //         <span> {amount} / {stock}</span>
        //         <span onClick={()=> count(+1)}> + </span>

        //     </div>       
        //     <h4>Producto</h4>
        //     <h5>Precio: $<span className='ItemCount-price'>500</span></h5>    
        //     <ul>
        //         <li>- Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        //         <li>- Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        //         <li>- Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        //         <li>- Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        //     </ul>

        //     {/* <button className='addProducts' onClick={(e)=> onAdd(e)}>Agregar al carrito</button> */}
        //     <a className='waves-effect waves-light btn   grey darken-4 btnAdd' onClick={(e)=> onAdd(e)} >Agregar al carrito</a>

        // </section>    



const ItemListContainer = ({greeting}) =>{

    // INTENTO CON ASYNC
    // pedirProductos()
    // const pedirProductos = async ()=>{
    //     const respuestaProductos = await fetch ({Json})
    //     const info = await respuestaProductos.json()

    //     const [productos, setProductos] = useState([])

    //     useEffect(()=>{
    //         setProductos(info)
    //     })

    //     console.log(productos);
    // }


    //    INTENTO CON FETCH
    //    const promesa =  fetch (Json)
    //    const [productos, setProductos] = useState([])
    //    useEffect(()=>{
    //     promesa.then ((res) => res.json())
    //     promesa.then (data)
    //     setProductos(data);
    //    })


    // INTENTO CON ASYNC  PERO EN VEZ DE LA RES ESTAR EN DOS CONST CON AWAIT, SOLO UNA ASI Y LA OTRA CON THEN. ADEMAS EL SET PRODUCTO ESTA DENTRO DE LA PROMESA, Y METE EN EL USE EFFECT LA PROMESA. EN LAS DEMAS EL SET PRODUCTO LO PONE FUERA DE LA PROMESA Y DENTRO DE USE EFFECT. 
    // const [productos, setProductos] = useState([]);

    // const getApiData = async () => {
    //     const response = await fetch({Json}
    //     ).then((response) => response.json());
      
    //     // update the state
    //     setProductos(response);
    // };

    // useEffect(() => {
    //     getApiData();
    // }, []);
  
 

    function onAdd(cantidad) {      
        console.log(cantidad);     
    }

    // function onAdd(e) {              
    //     console.log((e.target.parentElement.childNodes[1]).textContent); 
    // }
    
    return (
        <>
            {/* {productos.map((producto)=>{
                return  <h1 key={producto.id}>{producto.producto}</h1>  
            })} */}
            <div>
                <h1 className='greeting'>{greeting}</h1>              
            </div>
            <div>           
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        
        </>
  
    )
}

export default ItemListContainer


