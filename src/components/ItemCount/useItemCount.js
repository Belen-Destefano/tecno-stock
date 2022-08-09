import { useState } from 'react'

const useItemCount = (stock, initial) => {

  const [quantity, setQuantity] = useState(initial)

  const count = (value) => {
    
    const result = quantity + value;
    if(result <= stock & result >= initial){
      setQuantity(quantity+value)        
    }
   
  }

  return {
    count, quantity
  }
}

export default useItemCount