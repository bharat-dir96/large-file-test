import { useParams } from "react-router-dom"
import Left from "./Left"
import { useEffect, useState } from "react"

function UpdateProduct(){

  const{id}=useParams()
  const[name,setName]=useState('')
  const[desc,setDesc]=useState('')
  const[mdesc,setMdesc]=useState('')
  const[price,setPrice]=useState('')
  const[quantity,setQuantity]=useState('')
  const[status,setStatus]=useState('')
  const[image,setImage]=useState('')
  const[message,setMessage]=useState('')
  useEffect(()=>{
    fetch(`/api/singledata/${id}`).then((resp)=>{return resp.json()}).then((data)=>{
     // console.log(data)
     if(data.status===200){
      setName(data.apidata.name)
      setDesc(data.apidata.desc)
      setMdesc(data.apidata.mdesc)
      setPrice(data.apidata.price)
      setQuantity(data.apidata.quantity)
      setStatus(data.apidata.status)
      setImage(data.apidata.image)

     }
     else{
      console.log(data.message)
     }
    })
  },[])

  function handleform(e){
    e.preventDefault()
    //console.log(img)
    let formvvalue=new FormData()
    formvvalue.append('name',name)
    formvvalue.append('desc',desc)
    formvvalue.append('mdesc',mdesc)
    formvvalue.append('price',price)
    formvvalue.append('quantity',quantity)
    formvvalue.append('status',status)
    formvvalue.append('image',image)

    fetch(`/api/dataupdate/${id}`,{
      method:"PUT",
      body:formvvalue
    }).then((resp)=>{return resp.json()}).then((data)=>{
      //console.log(data)
      if(data.status===200){
         setMessage(data.message)

      }else{
        console.log(data.message)
      }
    })


  }
    return(
        <section id="mid">
          <div className="container">
            <div className="row">
             
              <Left/>
              <div className="col-md-9">
                <h2>Product Update Here</h2>
                <p>{message}</p>
                <form onSubmit={(e)=>{handleform(e)}}>
                    <label>Product Name</label>
                    <input type="text" 
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    
                    className="form-control"/>
                    <label>Product Description</label>
                    <input type="text" 
                    value={desc}
                    onChange={(e)=>{setDesc(e.target.value)}}
                    className="form-control"/>
                    <label>Product More Description</label>
                    <textarea 
                   value={mdesc}
                   onChange={(e)=>{setMdesc(e.target.value)}}
                    className="form-control"></textarea>
                    <label>Product Price</label>
                    <input type="number" 
                    value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}
                    className="form-control"/>
                    <label>Product Quantity</label>
                    <input type="number" 
                    value={quantity}
                    className="form-control"/>
                      onChange={(e)=>{setQuantity(e.target.value)}}

                    <label>Status</label>
                    <select value={status} 
                      onChange={(e)=>{setStatus(e.target.value)}}
                    className="form-select">
                      <option value="OUT-STOCK">IN Stock </option>
                      <option value="IN-STOCK">OUT Stock</option>
                    </select>

                    {/* Image value empty hi aa rhi hoti h isme value nhi hoti direct onChange */}
                    <label>Image</label>
                    <input type="file"
                  
                   onChange={(e)=>{setImage(e.target.files[0])}}
                    className="form-control"/>
                    <button type="submit" className="form-control btn btn-success mt-2 mb-2">ADD Product</button>
                </form>
              </div>
              
            </div>
          </div>
        </section>
      )
}

 export default UpdateProduct