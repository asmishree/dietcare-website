import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from './API';
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const { data } = await axios.post(
      `${API}/users/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (data.success === true) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("authToken", data.authToken);
      navigate("/");
     toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div>Login 
  
      <form onSubmit={handleSubmit}>
        <p>Enter your email</p>
        <input required name="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p>Enter your password</p>
        <input required name="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
    
  )
}

export default Login