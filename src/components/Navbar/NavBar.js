import React from "react";

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

import logo from'../../assets/logo.jpg';
import CartWidget from "../CartWidget/CartWidget";
// importo esta funcion que se usa para inicializar materialize
import { useEffect } from "react";
import {Link, NavLink} from "react-router-dom";


const menuItems = [
    {
        id: "01", label: "Televisores", route:"/categoria/Televisores",
    },
    {
        id: "02", label: "Sonido", route:"/categoria/Sonido",
    },
    {
        id: "03", label: "Camaras", route:"/categoria/Camaras",
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
                    
                    <Link to="/" className="brand-logo"><img src={logo} alt="Tecno-Stock" /></Link>                   
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger">  <i className="material-icons">menu</i> </Link>
                   
                    <ul className="right hide-on-med-and-down">


                        {menuItems.map((item)=> (
                            <li>
                             <NavLink to={item.route} className="nav-item" key={item.id}> {item.label}</NavLink>
                             
                            </li>
                            
                        ) )}
                      
                    </ul>               

             

                    <Link to="/carrito"  style= {styles.cartContainer}  className="right ">
                            <CartWidget/>     
                    </Link>          

                </div>                  
                     
            </nav>
          
                              

            <ul className="sidenav" id="mobile-demo">

                {menuItems.map((item)=> (
                    <li>
                        <NavLink to={item.route} key={item.id}> {item.label}</NavLink>
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