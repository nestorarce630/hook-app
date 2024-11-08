import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider2',
        email: 'fernando@gmail.com'
    });

    const {username,email} = formState;

    const onInputChange = ({target}) =>{
       const {name, value} = target;
       setFormState({
          ...formState,
          [name]: value, //Ó [ target.name ]: target.value
       })
    }

    
    useEffect(() => {
      //console.log('Username Changed')
    }, [username]); //son dependencias del useEffect

    useEffect(() => {
        //console.log('Email Changed')
    }, [email]);  

/*     useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third]) */
    
  return (
  <>
    <h1>SimpleForm</h1>
    <hr/> 

    <input
       type="text"
       className="form-control"
       placeholder="Username"
       name="username"
       value={username}
       onChange={onInputChange}
    />
    <input
       type="email"
       className="form-control mt-2"
       placeholder="fernando@gmail.com"
       name="email"
       value={email}
       onChange={onInputChange}
    />

    {
        (username == 'strider2') && <Message/>
    }
  </>

  )
}
