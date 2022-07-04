import React from 'react'
import './footer.css'

import 'materialize-css/dist/css/materialize.min.css'
import logo from'../../assets/logo.jpg';
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

function Footer() {
  return (


    <footer class="page-footer blue-grey darken-3">
        <div class="container">
        <div class="row">
            <div class="left-align col l6 s12">
            <h5 class="left-align white-text">  <Link to="/" className="brand-logo"><img src={logo} alt="Tecno-Stock" /></Link>          </h5>
            {/* <p class="grey-text text-lighten-4"> © 2014 Copyright Tecno-Stock.</p> */}
            </div>
            <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Menu</h5>
            <ul>

              {menuItems.map((item)=> (
                  <li className='center-align'>
                      <Link class="white-text text-lighten-3 center-align" to={item.route} key={item.id}> {item.label}</Link>
                  </li>
              ) )}
               
            </ul>
            </div>
        </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          <p class="grey-text text-lighten-4"> © 2014 Copyright Tecno-Stock.</p>
        
          </div>
        </div>
    </footer>





    
  )
}

export default Footer