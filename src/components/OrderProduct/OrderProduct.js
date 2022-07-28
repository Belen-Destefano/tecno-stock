import React from 'react'

function OrderProduct({products}) {   

    console.log(products);

  return (
        // <div>
        //     {products.map((product)=> <h1 key={product.id}> {product.name}  </h1>)}     
        // </div>


        <ul className="right hide-on-med-and-down">

            {products.map((product)=> (
                <li  key={product.id}>  {product.name}</li>                                
            ))}            

        </ul>  
    )
}

export default OrderProduct

