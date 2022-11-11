import React from "react";
import {isMobile} from 'react-device-detect'
import { Link } from "react-router-dom";
import { data } from "./data";
function Card() {
  const men = data.men;
  return (
    <div className="container-fluid" style={{display:'flex', flexWrap:'wrap',float:'left'}}>
      {men.map((r, i) => (
        isMobile ?
        <div className="card mx-3 my-2 text-center" style={{width: "8rem"}} key={i}>
        <img src={r.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{r.title}</h5>
          <p className="card-text">Rs. {r.price}</p>
          <Link to='/' className="btn btn-primary">Buy</Link>
        </div>
      </div>
      :
      <div className="card mx-3 my-2 text-center" style={{width: "15rem"}} key={i}>
        <img src={r.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{r.title}</h5>
          <p className="card-text">Rs. {r.price}</p>
          <Link to='/' className="btn btn-primary">Buy</Link>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Card;
