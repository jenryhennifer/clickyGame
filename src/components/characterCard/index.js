import React from 'react';
import './style.css';

function characterCard(props){
    return(
    <div onClick={() => props.clickCharacter(props.id)} className="card col-6-md">
        <div className="img-thumbnail w-25" id={props.id}>
          <img alt={props.name} src={props.image}/>
        </div>
    </div>
    )

}

export default characterCard