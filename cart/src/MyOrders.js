import { useContext, useEffect, useState } from "react"
import { ContextApi } from "./Contextapi"

function MyOrders() {
    const [myorders, setMyorders] = useState([])
    const { loginname } = useContext(ContextApi)
    useEffect(() => {
        fetch(`/api/myorders/${loginname}`).then((resp) => { return resp.json() }).then((data) => {
            //console.log(data)
            if (data.status === 200) {
                setMyorders(data.apidata)
            }
            else {
                console.log(data.message)
            }
        })
    }, [])
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Purchased Date</th>



                                </tr>
                            </thead>
                            <tbody>
                                
                                    {myorders.map((result,keying)=>(
                                        <tr key={result._id}>
                                        <td>{keying+1}</td>
                                        <td>{result.name}</td>
                                        <td><img style={{width:'80px',height:'80px'}} src={result.img} alt=''/></td>
                                        <td>{result.quantity}</td>
                                        <td>{result.postedDate}</td>
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
export default MyOrders