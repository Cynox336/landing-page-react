


function Card(props){
    return (
  
      <div className="d-flex justify-content-center">
      <div className="card" style={{width: "18rem"}}>
    <img src={props.image} className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <a href="#" className="btn btn-primary"></a>
    </div>
  </div>  
  </div>
    )
  
  }

  export default Card;