import React from 'react';
import './style.css';

function characterCard(props){
    return(
    <div className="card">
        <div className="img-container" id={props.id}>
          <img alt={props.name} src={props.image} />
        </div>
    </div>
    )

}

export default characterCard