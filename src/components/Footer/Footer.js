
import React, { useEffect, useState } from 'react';
import './footer.css'

import 'materialize-css/dist/css/materialize.min.css'
import logo from'../../assets/logo.jpg';
import {Link} from "react-router-dom";

import {db} from "../../firebase/firebase";
import { getDocs, collection } from 'firebase/firestore';


function Footer() {

  const [categories, setCategories]= useState([])

  useEffect (()=> {      

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
    })
  
  },[]);



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

              {categories.map((item)=> (
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