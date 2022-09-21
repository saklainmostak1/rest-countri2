import React, { useEffect, useState } from 'react';
import Countri from '../Country/Countri';
import './Country.css';
const Country = () => {
    const [Countris, setCountris] = useState([])

    useEffect( ()=>{
      
        fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => setCountris(data))
    },[])
    return (
        <div >
            <h1>Welcome to My Countries: {Countris.length}</h1>
            {/* {
                Countris.map(country => console.log(country))
            } */}
           <div className='countries-container'>
           {
                Countris.map(country => <Countri country={country}></Countri>)
            }
           </div>
        </div>
    );
};

export default Country;