import React, {createContext, useEffect, useState} from 'react';

export const cartContext = createContext();
const {Provider} = cartContext;

const CustomProvider = ({ children }) => {

    const [products, setProducts] = useState ([]);    
    const [quantityProduct, setQuantityProduct]= useState(0);

    const quantityCart = () => {
        //   para esto foreach o reduce. 1ero ouso qty como const, desp lo cambio a let. antes de guardar esto en un useEffect, mando como value quantity cart. despues lo saco, q sea una funcion interna total paso el state quantityProduct
        let qty = 0;
        products.forEach (product => qty += product.qty);
        setQuantityProduct(qty);    
    }

    useEffect(()=>{
        quantityCart();
    }, [products]);

    const addProduct = (product) => {
    
        if(isInCart (product.id)){
            const found = products.find(p => p.id === product.id);
            const index = products.indexOf(found);
            const copyProducts = [...products];      
            
            copyProducts[index].qty += product.qty;
            setProducts(copyProducts);

        } else{
            setProducts([...products, product]);
        }       
    };

    const deleteProduct = (id) => {
        // slice puede Ser x q entrega otro array, no altera el Array, pero mejor filter invertido
        setProducts (products.filter(product => product.id !== id))
       
    }

    // por buena practica/convencion, si la funcion empieza con is tiene q devolver un booleano
    const isInCart = (id) => {
        // Find asi por que no devuelve booleano. haces que devuelva booleano. en cambio some devuelve booleano
        // const found = products.find (product => product.id === id)
        // return found? true : false;

        return products.some (products => products.id === id)
    }
      

    const  clear = (product) => {
        setProducts ([]);
        setQuantityProduct(0);
    }



    return (
        <Provider value={{products,addProduct, deleteProduct, quantityProduct, clear } }>
            {children}
        </Provider>
    )

}

export default CustomProvider