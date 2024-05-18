import { useState } from "react"
import Left from "./Left"

function AddProduct(){
    const[name,setName]=useState('')
    const[desc,setDesc]=useState('')
    const[mdesc,setMdesc]=useState('')
    const[price,setPrice]=useState('')
    const[quantity,setQuantity]=useState('')
    const[image,setImage]=useState('')
    const[message,setMessage]=useState('')

    function handleform(e){
        e.preventDefault()
        //For Image
        //(propert,value)
        const formvalue=new FormData()
        formvalue.append('name',name)
        formvalue.append('desc',desc)
        formvalue.append('mdesc',mdesc)
        formvalue.append('price',price)
        formvalue.append('quantity',quantity)
        formvalue.append('image',image)


        //Yaha header format use nhi hoga because json format use nhi kr rhe because of image
        fetch('/api/addproduct',{
            method:"POST",
            body:formvalue
        }).then((resp)=>{return resp.json()}).then((data)=>{
           // console.log(data)
           if(data.status===201){
            setMessage(data.message)

           }else{
              setMessage(data.message)
           }
        })

    }
    return(
        <section id="mid">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-3"><h4>Left</h4></div> */}
              {/* aise partials nhi bnane components bnane h */}
              <Left/>
              <div className="col-md-9">
                <h2>ADD New Product here</h2>
                <p>{message}</p>
                <form  onSubmit={(e)=>{handleform(e)}}>
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
                    onChange={(e)=>{setQuantity(e.target.value)}}
                    className="form-control"/>

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

 export default AddProduct