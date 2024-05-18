import Left from "./Left"

function Dashboard(){
    return(
        <section id="mid">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-3"><h4>Left</h4></div> */}
              {/* aise partials nhi bnane components bnane h */}
              <Left/>
              <div className="col-md-9">mid</div>
              
            </div>
          </div>
        </section>
      )
}

 export default Dashboard