import React from 'react'

function Signup() {
  return (
    <div>Signup 
  
      <form >
      <p>Enter your name</p>
        <input required name="name" type='text' />
        <p>Enter your email</p>
        <input required name="email" type='email' />
        <p>Enter your age</p>
        <input required name="age" type='number' />
        <p>Enter your gender</p>
        <input required name="gender" type='text' />
        <p>Enter your height</p>
        <input name="height" type='number' />
        <p>Enter your weight</p>
        <input required name="weight" type='number' />
        <p>Enter your password</p>
        <input required name="password" type='password' />
        <button type="submit">Signup</button>
      </form>
    </div>
    
  )
}

export default Signup