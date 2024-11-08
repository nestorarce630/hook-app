import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

  const {counter,increment,decrement,reset} = useCounter();

  return (
   <>
    <h1>Counter with Hook: {counter}</h1>
    <hr />

    <button onClick={increment}>+1</button>   
    <button onClick={decrement}>Reset</button>   
    <button onClick={reset}>-1</button>   
   </>

  )
}
