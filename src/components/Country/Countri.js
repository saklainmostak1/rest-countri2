import React from 'react';
import './Countri.css'

const Countri = (props) => {
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Countri;