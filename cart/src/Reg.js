import { useState } from "react"
import { Link } from "react-router-dom"

function Reg(){

    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const[message,setmessage]=useState('')

    function handleform(e){
        e.preventDefault()
        console.log(username)
        //Api call with 2 parameters one for url and 2 for additon things
        //Using fetch with 2 then  one for json conversion and other for converted ko print krnae mei
        const formdata={username,password}
        fetch('/api/reg',{
            //addition
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((resp)=>{return resp.json()}).then((data)=>{
            console.log(data)
            // On the basis we to print , data k sath kiya kiya aa rha
            if(data.status===201){
                setmessage(data.message)

            }
            else{
                setmessage(data.message)
            }

        })

    }
    return(
        <section id="login">
        <div className="container">
           <div className="row">
           <div className="col-md-4"></div>
            <div className="col-md-4">
                <h>Register Here</h>
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
                    <button className="form-control btn btn-success">Signup</button>
                    
                </form>
                <p>
                <Link to="/">Already have an account</Link>
            </p>
            </div>
            <div className="col-md-4"></div>
           </div>
        </div>
       </section>
    )
}
export default Reg