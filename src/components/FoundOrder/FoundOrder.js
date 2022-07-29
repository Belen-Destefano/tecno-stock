import React, { useState } from 'react'
import {Link} from "react-router-dom";
import './foundOrder.css'

function FoundOrder() {

    const [changeBtn, setChangeBtn]= useState(true)
    const [idCheck, setIdCheck]= useState("")


    const FoundOrderBtn = (e) => {
        e.preventDefault();          
        if (e.target.parentElement[0].value !== "" ){
            setIdCheck ( e.target.parentElement[0].value)      
            setChangeBtn(false);     
        }
         
        else {
            alert("faltan datos");
        }     
                
    }
        
  



  return (
    <div  className='foundOrderForm'>   
            <form className='FoundOrderForm'>                   

                <div className="row">
                    <div className="input-field ">
                        <input placeholder="Ingresar Numero" id="text" type="text" className="validate"/>
                        {/* <label htmlFor="first_name">Buscar Detalle de compra</label> */}
                    </div>
                </div>
                            
                {changeBtn?  <input className='btnSubmitFound' type="submit" value="Buscar Compra Realizada" onClick={FoundOrderBtn}></input>  :   <Link className='btnDetailFound center-align' to={`/tecno-stock/detalle/${idCheck}`}> Continuar busqueda </Link>}
                        
            </form>
    </div>
  )
}

export default FoundOrder