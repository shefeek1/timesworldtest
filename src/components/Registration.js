import React from 'react'
import { useState } from 'react';

function Registration() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        localStorage.setItem("email",email)
        localStorage.setItem("pass",pass)
        alert("User Registered");
    }

    return (
        <div className='auth-form-conatiner'>
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button  onClick={(e)=>handleSubmit(e)} type="submit">Register</button>
        </form>
        <a href='/' className='link-btn'>Already have an account? Login here.</a>
    </div>
    )
}

export default Registration