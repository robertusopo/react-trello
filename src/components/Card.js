import React from 'react';

const Card = (props) => (
<div className="card mx-auto" style={{width: "15rem"}}>
  <div className="card-body">
    <p><span className="badge badge-primary">{props.label}</span></p>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
  </div>
</div>
)

export default Card;