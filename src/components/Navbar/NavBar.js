import React from "react";

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

import logo from'../../assets/logo.jpg';
import CartWidget from "../CartWidget/CartWidget";
// importo esta funcion que se usa para inicializar materialize
import { useEffect } from "react";


const menuItems = [
    {
        id: "01", label: "Televisores", href:"/televisores",
    },
    {
        id: "02", label: "Sonido", href:"/sonido",
    },
    {
        id: "03", label: "Camaras", href:"/camaras",
    },

]

const NavBar = () =>{
  
    // para inicializar menu hamburguesa de materialize
    useEffect(() => {

        var elems = document.querySelectorAll(".sidenav");    
        M.Sidenav.init(elems);
    
    }, []);
  
    return(
        <>         
             
            <nav>       
                <div className="nav-wrapper blue-grey darken-3">                
                    
                    <a href="#" className="brand-logo"><img src={logo} alt="Tecno-Stock" /></a>                   
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">  <i className="material-icons">menu</i> </a>
                   
                    <ul className="right hide-on-med-and-down">


                        {menuItems.map((item)=> (
                            <li>
                             <a href={item.href} className="nav-item" key={item.id}> {item.label}</a>
                             
                            </li>
                            
                        ) )}
                      
                    </ul>               

                    <ul style= {styles.cartContainer}  className="right ">                   
                      <CartWidget/>             
                    </ul>                       
                </div>                  
                     
            </nav>
          
                              

            <ul className="sidenav" id="mobile-demo">

                {menuItems.map((item)=> (
                    <li>
                        <a href={item.href} key={item.id}> {item.label}</a>
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