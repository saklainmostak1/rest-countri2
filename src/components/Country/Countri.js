import React from 'react';
import './Countri.css'

const Countri = (props) => {
    console.log(props.country.area)
    const {area, region, flag, population} = props.country
    return (
        <div className='country'>
           
            <h2>Country Name: {props.country.name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Flag: {flag}</small></p>
        </div>
    );
};

export default Countri;