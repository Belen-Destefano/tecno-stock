import React from "react";
import '../materialize/css/materialize.css';
import '../materialize/js/materialize';
import logo from'../assets/logo.jpg';



const NavBar = () =>{
    return(
        <>                      
            <nav>       
                <div class="nav-wrapper blue-grey darken-3">                
                    
                    <a href="#!" class="brand-logo"><img src={logo} alt="Tecno-Stock" /></a>                   
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger">  <i class="material-icons">menu</i> </a>
                   
                    <ul class="right hide-on-med-and-down">
                        <li><a href="sass.html">Televisores</a></li>
                        <li><a href="badges.html">Audio</a></li>
                        <li><a href="collapsible.html">Camaras</a></li>     
                                           
                      
                    </ul>               

                    <ul class="right ">                     
                        <li><a href="#"><i class="material-icons">shopping_cart</i></a></li>     
                                    
                    </ul>                       
                </div>                  
                     
            </nav>
          
                              

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Televisores</a></li>
                <li><a href="badges.html">Audio</a></li>
                <li><a href="collapsible.html">Camaras</a></li>
                             
            </ul>
           
                        
        </>    
            
    )
    

}



export default NavBar