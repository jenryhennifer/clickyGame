import React from 'react';
import './style.css';

function characterCard(props){
    return(
    <div className="card">
        <div className="img-thumbnail w-25" id={props.id}>
          <img alt={props.name} src={props.image}/>
        </div>
    </div>
    )

}

export default characterCard