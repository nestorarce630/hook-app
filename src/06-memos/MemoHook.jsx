import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterationNumber) =>{
   for (let i = 0; i < iterationNumber; i++) {
      console.log('Go!')
      
   }

   return `${iterationNumber} done`
}
   
export const MemoHook = () => {

  const {counter,increment} = useCounter(500)
  const [show, setShow] = useState(false)

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
  // useMemo: memoiza valores, es un hook
  // En el contexto de programación, "memoizar" proviene del término "memoization", que es una técnica de optimización de rendimiento. Se refiere al acto de almacenar el resultado de una función para que no se vuelva a calcular con los mismos parámetros, sino que se reutilice el resultado previamente calculado.
  //"counter" es la dependencia que determina cuándo se debe volver a calcular el valor.
  //"heavyStuff(counter)" es la función costosa que se ejecutará solo cuando counter cambie.

  

  return (
    <>
        <h1>Counter : <small>{counter}</small></h1>

        <h4>{memorizedValue}</h4>

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
