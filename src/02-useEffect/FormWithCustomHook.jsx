import { useEffect } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

  const {formState, onInputChange,onResetForm} = useForm({
   username: '',
   email: '',
   password: ''
  });

  const {username,email,password} = formState;
 
   

    
/*     useEffect(() => {
      //console.log('Username Changed')
    }, [username]); //son dependencias del useEffect

    useEffect(() => {
        //console.log('Email Changed')
    }, [email]);   */

/*     useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third]) */
    
  return (
  <>
    <h1>Formulario with Custom Hook</h1>
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
       placeholder="Email"
       name="email"
       value={email}
       onChange={onInputChange}
    />
    <input
       type="password"
       className="form-control mt-2"
       placeholder="Password"
       name="password"
       value={password}
       onChange={onInputChange}
    />

    <button  onClick={onResetForm} className="btn btn-primary my-2">Reset</button>

  </>

  )
}
