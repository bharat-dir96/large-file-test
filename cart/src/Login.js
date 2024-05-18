import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "./Contextapi";


function Login() {
  
  const{setLoginname,loginname}=useContext(ContextApi)

  // login k baad dusre page pr le jaane h uske lyie hook navigate()
  let navigate=useNavigate()
  //jitni bhi input value ko capture utne states 
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')
  const[message,setmessage]=useState('')

  function handleform(e){
    e.preventDefault()
   // console.log(username,password)
    const formdata={username,password}
    //APi Call
    fetch('/api/logincheck',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formdata)
    }).then((resp)=>{return resp.json()}).then((data)=>{

      //console.log(data)
      if(data.status===200 && data.apidata!=='admin'){
        //value set
        localStorage.setItem('loginname',data.apidata)
        //value ressign get
        setLoginname(localStorage.getItem('loginname'))
        navigate('/products')

      }
      else if(data.status===200 && data.apidata==='admin'){
        localStorage.setItem('loginname',data.apidata)
        setLoginname(localStorage.getItem('loginname'))
        navigate('/dashboard')
        
      }
      else{
        setmessage(data.message)

      }
    })

  }
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h>Login Here</h>
            <p>{message}</p>
            <form onSubmit={(e)=>{handleform(e)}}>
              <label>Username</label>
              <input type="text"
              value={username}
              onChange={(e)=>{setusername(e.target.value)}} 
              className="form-control"></input>
              <label>Password</label>
              <input type="text"
               value={password}
               onChange={(e)=>{setpassword(e.target.value)}}  
              className="form-control"></input>
              <button className="form-control mt-4 btn btn-success">Login</button>
            </form>
            <p>
              <Link to="/reg">Signup</Link>
            </p>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </section>
  )
}

export default Login;