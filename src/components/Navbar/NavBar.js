import React, { useEffect, useState } from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

import logo from'../../assets/logo.jpg';
import CartWidget from "../CartWidget/CartWidget";

import {db} from "../../firebase/firebase";
import { getDocs, collection } from 'firebase/firestore';


import {Link, NavLink} from "react-router-dom";


const NavBar = () =>{
    
    const [categories, setCategories]= useState([])
    useEffect (()=> {

        //Mobile Collapse Materialize
        var elems = document.querySelectorAll(".sidenav");    
        M.Sidenav.init(elems);
        //

        getDocs ( collection(db, 'categorias') )

            .then (result =>{
                const lista = result.docs.map (category => {
                    return {  
                        id: category.id,
                        ...category.data()               
                    }
                }) 
                setCategories( lista);
            })

        
        .catch((error) => {
            console.log(error)      
        });
    },[]);
   
  
    return(
        <>         
            <div className="navbar-fixed">
                <nav>       
                    <div className="nav-wrapper blue-grey darken-3">                
                        
                        <Link to="/tecno-stock" className="brand-logo"><img src={logo} alt="Tecno-Stock" /></Link>                   
                        <Link to="#" data-target="mobile-demo" className="sidenav-trigger">  <i className="material-icons">menu</i> </Link>
                    
                        <ul className="right hide-on-med-and-down">

                            {categories.map((item)=> (
                                <li  key={item.id}> <NavLink to={item.route} className="nav-item" > {item.label}</NavLink></li>                                
                            ))}            

                        </ul>                               

                        <Link to="/tecno-stock/carrito"  style= {styles.cartContainer}  className="right ">
                            <CartWidget/>     
                        </Link>          

                    </div>    
                </nav>
            </div>                    
                              

            <ul className="sidenav" id="mobile-demo">
                
                {categories.map((item)=> (
                    <li key={item.id}>
                        <NavLink to={item.route}> {item.label}</NavLink>
                    </li>
                ) )}

            </ul>              
               
        </>               
    )
}

const styles = {
    cartContainer: {
        cursor: 'pointer',
        marginRight: 10 
    }

   
}


export default NavBar