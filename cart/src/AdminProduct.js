import { Link } from "react-router-dom"
import Left from "./Left"
import { useEffect, useState } from "react"

function AdminProduct(){
  const[productdata,setProductData]=useState([])
  //Jb bhi selction waali api use krte h to UseEffect because wo continous value nikalta rhega usko dependent bna denge
  useEffect(()=>{},[
    fetch('/api/alldata').then((resp)=>{return resp.json()}).then((data)=>{
      //console.log(data)
      if(data.status===200){
        setProductData(data.apidata)

      }else{
        //developer ko dilkhani h error user ko nhi
        console.log(data.message)
      }
    })
  ])
    return(
        <section id="mid">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-3"><h4>Left</h4></div> */}
              {/* aise partials nhi bnane components bnane h */}
              <Left/>
              <div className="col-md-9">
                <h2>Product Management</h2>
               <Link to="/addproduct"> <button className="btn btn-info form-control">Add more Products</button></Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product More Description</th>
                            <th>Product Price</th>
                            <th>Product Image</th>
                            <th>Product Quantity</th>
                            <th>Product Status</th>
                            <th>Product Date</th>
                            <th>Product Update</th>

                        </tr>
                    </thead>
                    <tbody>
                      {productdata.map((result,keying)=>(
                         <tr>
                         <td>{keying+1}</td>
                         <td>{result.name}</td>
                         <td>{result.desc}</td>
                         <td>{result.mdesc}</td>
                         <td>{result.price}</td>
                         <td>{result.image}</td>
                         <td>{result.quantity}</td>
                         <td>{result.status}</td>
                         <td>{result.postedDate}</td>
                       
                         <td><Link to={`/updateproduct/${result._id}`}><button className="btn btn-info">Update</button></Link></td>

                     </tr>

                      ))}
                       
                    </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </section>
      )
}

 export default AdminProduct