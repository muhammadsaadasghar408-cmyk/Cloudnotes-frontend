import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css";

function Login(props) {
  const [credentails, setCredentails] = useState({email:"",password:""})
  let navigate = useNavigate();
   const handleSubmit= async (e)=>{
e.preventDefault();
 const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email:credentails.email,password:credentails.password}),
});
const json = await response.json();
console.log(json)
if (json.success) {
  localStorage.setItem('token',json.authtoken);
  props.showAlert("logged in successfully" ,"success")
  navigate("/");
}
else{
  props.showAlert("invalid credentails" ,"danger")
}
   }
   const onchange=(e)=>{
setCredentails({...credentails,[e.target.name]:e.target.value})
   }
  return (
    <div className="login-container">
      <h2>Login Form</h2>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentails.email} onChange={onchange} name='email' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentails.password} onChange={onchange} name='password' id="password"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login