import React, { useState } from 'react'
import {Link} from "react-router-dom";
import './foundOrder.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            const notify = () => {      
                toast.error("Ingresar Orden de compra",{ autoClose: 2000 });}
            notify()
        }     
                
    }

  return (
    <div  className='foundOrderForm'>   
            <form className='FoundOrderForm'>                   

                <div className="row">
                    <div className="input-field ">
                        <input placeholder="Ingresar Numero" id="text" type="text" className="validate"/>
                       
                    </div>
                </div>
                            
                {changeBtn?<>  <input className='btnSubmitFound' type="submit" value="Buscar Compra Realizada" onClick={FoundOrderBtn}/> <ToastContainer /> </>  :   <Link className='btnDetailFound center-align' to={`/tecno-stock/detalle/${idCheck}`}> Continuar busqueda </Link>}
                        
            </form>
    </div>
  )
}

export default FoundOrder