import React,{Component} from 'react';

import './style.css';

export default (props) => {
    const {name,passengers,length} = props;
    return(
        <div className="dataContainer">
            <p>Name: {name}</p>
            <p>Length: {length}</p>
            <p>passengers: {passengers}</p>
        </div>
    )
}