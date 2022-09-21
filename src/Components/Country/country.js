import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country);
    // const {area, region, population, name} = props.country;
        const { region, area, name, flags } = props.country;
        console.log(props.country);
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Area: {area}</p>
        </div>
        // <div className='country'>
        //     <h2>Country name: {name.common}</h2>
        //     <p>Population: {population}</p>
        //     <p>Region: {region}</p>
        //     <p><small>Area: {area}</small></p>
        // </div>
        // <div className='country'>
        //     <h2>Country name: {props.country.name.common}</h2>
        //     <p>Population: {props.country.population}</p>
        //     <p>Region: {props.country.region}</p>
        //     <p><small>Area: {props.country.area}</small></p>
        // </div>
    );
};

export default Country;