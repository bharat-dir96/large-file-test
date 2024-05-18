import { useContext, useEffect, useState } from "react"
import { ContextApi } from "./Contextapi"

function Cart() {
    const [cartdata, setCartData] = useState([])
    const { cart, setCart } = useContext(ContextApi)
    useEffect(() => {
        if(!cart.items){
            return
        }
        fetch('/api/cart', {
            method: 'POST',
            header: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        }).then((resp) => { return resp.json() }).then((data) => {
            //console.log(data)
            if (data.status === 200) {
                setCartData(data.apidata)
            } else {
                console.log(data.message)
            }
        })
    }, [cart])
    function handleqty(id) {
        return cart.items[id]

    }
    function handleprice(id, price) {
        let totalquantity = handleqty(id)
        let totalprice = price * totalquantity
        return totalprice
    }
    function handleincr(e, id, quantity) {
        let currentquantity = handleqty(id)
        //Ab 2 cheeze change krni 1: quantity 2:totalitems m bhi that means use cloning
        if (currentquantity > quantity) {
            alert('You have reched to the maximum quantity')
            return
        }
        let _cart = { ...cart }
        _cart.items[id] = currentquantity + 1
        _cart.totalItems += 1
        setCart(_cart)


    }
    function handledecr(e, id) {
        let currentquantity = handleqty(id)
        //Ab 2 cheeze change krni 1: quantity 2:totalitems m bhi that means use cloning
        if (currentquantity === 1) {
            return
        }
        let _cart = { ...cart }
        _cart.items[id] = currentquantity - 1
        _cart.totalItems -= 1
        setCart(_cart)
    }
    function handledelete(e,id){
        let currentquantity = handleqty(id)
        let _cart={...cart}
       delete _cart.items[id]
       _cart.totalItems-=currentquantity
       setCart(_cart)

    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Poduct Name</th>
                                    <th>Product Price</th>
                                    <th>Product Quantity</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartdata.map((result, keying) => (
                                    <tr>
                                        <td>{keying + 1}</td>
                                        <td>{result.name}</td>
                                        <td><button onClick={(e) => { handleincr(e, result._id, result.quantity) }}>+</button>{handleqty(result._id)}<button onClick={(e) => { handledecr(e, result._id) }}>-</button></td>
                                        <td>{handleprice(result._id, result.price)}</td>
                                        <td><button onClick={(e)=>{handledelete(e.reult._id)}}>Delete</button></td>
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
export default Cart