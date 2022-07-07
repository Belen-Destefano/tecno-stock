import { useState } from 'react'

const useItemCount = (stock, initial) => {

  const [quantity, setQuantity] = useState(initial)

  const count = (value) => {
    // guardo en una const asi la uso en el if en vez de usar amount, xq sino cuando llega a stock no puedo bajarlo
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