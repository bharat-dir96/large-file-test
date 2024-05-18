import { useContext } from "react"
import { ContextApi } from "./Contextapi"

function ProductStructure(props) {
    const { pdata } = props
    const{cart,setCart}=useContext(ContextApi)

    function handleCart(e,id){
       // alert(id)
       //Cloning Variable
       let _cart={...cart}
       if(!_cart.items){
        _cart.items={}
       }
       if(!_cart.items[id]){
        _cart.items[id]=1
       }else{
        _cart.items[id]+=1
       }

       if(!_cart.totalItems){
        _cart.totalItems=1
       }else{
        _cart.totalItems+=1
       }

       setCart(_cart)
       console.log(cart)

    }
    return (
        <div className="col-md-3">
            <div className="card" style={{ width: '18rem' }}>
                <img style={{ width: '100px' }} src={pdata.img} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{pdata.name}</h5>
                    <p className="card-text">{pdata.desc}</p>
                    <p>Price:{pdata.price}</p>
                    <button onClick={(e)=>{handleCart(e,pdata._id)}} className="btn btn-success me-2">ADD CART</button>
                    <button className="btn btn-danger">More Details</button>
                </div>
            </div>
        </div>
    )
}

export default ProductStructure