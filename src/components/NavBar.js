import React from "react";
// import '../materialize/css/materialize.css';
// import '../materialize/js/materialize';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// import M from '../materialize/css/materialize.css'
import logo from'../assets/logo.jpg';
import CartWidget from "./CartWidget";



const NavBar = () =>{

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
         M.Sidenav.init(elems);
    });
  
    return(
        <>                      
            <nav>       
                <div className="nav-wrapper blue-grey darken-3">                
                    
                    <a href="#" className="brand-logo"><img src={logo} alt="Tecno-Stock" /></a>                   
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">  <i className="material-icons">menu</i> </a>
                   
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Televisores</a></li>
                        <li><a href="badges.html">Audio</a></li>
                        <li><a href="collapsible.html">Camaras</a></li>                
                      
                    </ul>               

                    <ul style= {styles.cartContainer}  className="right ">                   
                      <CartWidget/>             
                    </ul>                       
                </div>                  
                     
            </nav>
          
                              

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Televisores</a></li>
                <li><a href="badges.html">Audio</a></li>
                <li><a href="collapsible.html">Camaras</a></li>
                             
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