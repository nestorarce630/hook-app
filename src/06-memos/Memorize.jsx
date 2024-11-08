import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

   
export const Memorize = () => {

  const {counter,increment} = useCounter(10)
  const [show, setShow] = useState(false)

  return (
    <>
        <h1>Counter : <Small value={counter}/></h1>

        <button
           className='btn btn-primary'
           onClick={() => increment()}   //Se llama como funcion de flecha por que se esta mandando un argumento
        >
           +1
        </button>

        <button
            className='btn btn-outline-primary'
            onClick={() => setShow(!show)}
        >
           Show/Hide {JSON.stringify(show)}
        </button>
        
    </>
        //Por que JSON.stringify?, por que "show" es un valor booleano y no se pueden mostrar en pantalla
  )
}
