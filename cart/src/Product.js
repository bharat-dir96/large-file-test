import { useEffect, useState } from "react"
import ProductStructure from "./ProductStructutre"


function Product() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/api/productinstock').then((resp) => { return resp.json() }).then((data) => {
            //console.log(data)
            if (data.status === 200) {
                setProducts(data.apidata)

            } else {
                console.log(data.message)
            }
        })
    }, [])
    return (
        <section id="mid">
            <div className="container">
                <div className="row">
                    {products.map((result, keying) => (
                        <ProductStructure key={result._id} pdata={result} />

                    ))}









                </div>
            </div>
        </section>
    )
}

export default Product