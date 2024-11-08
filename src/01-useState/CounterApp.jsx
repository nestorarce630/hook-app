
import {useState} from 'react'

export const CounterApp = () => {

 const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20
 })

 const {counter1,counter2} = state;


 const [age, setAge] = useState(28)
 const [name, setName] = useState("Taylor")

 const makeid = (length) =>{
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result; 
 }

 const handleAge = () =>{
   
  setName(makeid(5))
  setAge(a=>a+1)
 }

 return(
   <>
    

    <h1>Counter1: {counter1}</h1>
    <h1>Counter2: {counter2}</h1>
    <h3>Name: {name}</h3>
    <h3>Age: {age}</h3>
    <button onClick={handleAge}>Change Name and Increase Age</button>
    <hr/>

    <button onClick={() =>{setCounter({
      ...state,
      counter1:counter1+1,
      
    })}}>+1</button> 

   </>
 )
  
}
