import React from 'react';
import './Countri.css'

const Countri = (props) => {
    const {area , region, name} = props.country
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
           <p>Area: {area}</p>
           <p>Region: {region}</p>
        </div>
    );
};

export default Countri;