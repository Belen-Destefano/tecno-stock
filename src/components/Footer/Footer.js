import React from 'react'
import './footer.css'

import 'materialize-css/dist/css/materialize.min.css'
import logo from'../../assets/logo.jpg';
import {Link} from "react-router-dom";

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


    <footer className="page-footer blue-grey darken-3">
        <div className="container">
        <div className="row">
            <div className="left-align col l6 s12">
            <h5 className="left-align white-text">  <Link to="/" className="brand-logo"><img src={logo} alt="Tecno-Stock" /></Link>          </h5>
            {/* <p class="grey-text text-lighten-4"> © 2014 Copyright Tecno-Stock.</p> */}
            </div>
            <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Menu</h5>
            <ul>

              {menuItems.map((item)=> (
                  <li className='center-align' key={item.id}>
                      <Link className="white-text text-lighten-3 center-align" to={item.route} > {item.label}</Link>
                  </li>
              ) )}
               
            </ul>
            </div>
        </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          <p className="grey-text text-lighten-4"> © 2014 Copyright Tecno-Stock.</p>
        
          </div>
        </div>
    </footer>





    
  )
}

export default Footer