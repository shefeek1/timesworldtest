import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const location=useNavigate()

    

    const handleSubmit = (e) =>{
      e.preventDefault()
   const email1=localStorage.getItem("email")
   const pass1= localStorage.getItem("pass") 
   console.log(email1,pass1,"he")
    if(email==email1){

      if(pass==pass1){

        alert("login successful");
       location('Home')
   
        }

        else

        alert("incorrect password");
   
        }
      
        else{
          alert("incorrect username");
        }
    }

  return (
    <div className='auth-form-conatiner'>
        <h2>Sign In</h2>
     <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input value={email} onChange = {(e)=>setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' name='email' id="email"></input>
      <label htmlFor='paswrd'>Password</label>
      <input value={pass} onChange ={(e)=>setPass(e.target.value)} type="password" placeholder='**********' name='pass' id='paswrd'></input>
     <button onClick={(e)=>handleSubmit(e)} type='submit'>SignIn</button>
     <a href='/register' className='link-btn'>didn't have an account? signUp here.</a>
     </form>

    </div>
  )
}


export default Login