import { useContext, useState } from "react"
import { ContextApi } from "./Contextapi"
import { Link, useNavigate } from "react-router-dom"

function Header(){
  let navigate=useNavigate()
  //ab localstorage me save krne k baad ,yaha pr nilkal lo
 // const[loginame,setloginname]=useState(localStorage.getItem('loginname'))
    const{loginname,setLoginname,cart}=useContext(ContextApi)
 
      function handlelogout(e){
          localStorage.removeItem('loginname')
          setLoginname(localStorage.getItem('loginname'))
          navigate('/')
 }
  return(
    <section id="header">
      <div className="container">
        <div className="row">
          {loginname?
          <>
          <div className="col-md-4"><h4>Welcome {loginname}</h4></div>
          <div className="col-md-8">
            <h4><button className="btn btn-danger" onClick={(e)=>{handlelogout(e)}}>Logout</button></h4>
            <Link to="/cart"> <button className="btn btn-success me-3">Cart:{!cart.totalItems?0:cart.totalItems}</button></Link>
            <Link to="/products"> <button className="btn btn-success me-3">Products</button></Link>
            <Link to="/myorders"> <button className="btn btn-success me-3">My Orders</button></Link>
            </div>
          </>
          :
          <></>
}
        </div>
      </div>
    </section>
  )
 
}

export default Header