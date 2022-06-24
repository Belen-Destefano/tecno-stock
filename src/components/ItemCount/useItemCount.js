import { useState } from 'react'

const useItemCount = (stock, initial) => {

  const [amount, setAmount] = useState(0)

  const count = (value) => {
    // guardo en una const asi la uso en el if en vez de usar amount, xq sino cuando llega a stock no puedo bajarlo
    const result = amount + value;
    if(result <= stock & result >= initial){
        setAmount(amount+value)
        
    }
  }


  return {
    count, amount
  }
}

export default useItemCount