import { Link } from "react-router-dom"

function Left(){
    return(
        <div className="col-md-3">
           <Link to="/adminproduct"><button className="btn btn-success mt-2 mb-2">Product Management</button></Link> 
        </div> 
    )
}
export default Left