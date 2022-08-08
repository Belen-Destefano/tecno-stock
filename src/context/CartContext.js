import React, {createContext, useEffect, useState} from 'react';

export const cartContext = createContext();
const {Provider} = cartContext;

const CustomProvider = ({ children }) => {

    const [products, setProducts] = useState ([]);    
    const [quantityProduct, setQuantityProduct]= useState(0);
    const [addingPrice, setAddingPrice]= useState(0);

   
    useEffect(()=>{
        const quantityCart = () => {         
            let qty = 0;
            products.forEach ((product) => (qty += product.qty));
            setQuantityProduct(qty);    
        };    
        quantityCart();

        const priceFunction = ()=> {
            let total= 0;    
            products.forEach((product) => { total += (product.price * product.qty)});
            setAddingPrice (total)
        };
        priceFunction()

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
        setProducts (products.filter(product => product.id !== id))       
    }

    const isInCart = (id) => {      
        return products.some (products => products.id === id)
    }         

    const  clear = () => {
        setProducts ([]);
        setQuantityProduct(0);
    }

    return (
        <Provider value={{products,addProduct,addingPrice, deleteProduct, quantityProduct, clear } }>
            {children}
        </Provider>
    )

}

export default CustomProvider