import React from 'react';
import './Countri.css'

const Countri = (props) => {
    const {area , region, name, flags} = props.country
    console.log(props.country) 
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
           <p>Area: {area}</p>
           <p>Region: {region}</p>
        </div>
    );
};

export default Countri;