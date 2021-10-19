import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, description, imgUrl } = service;

    return (
        <div className="service pb-3">
            <img src={imgUrl} alt="" />
            <h2>{name}</h2>

            <p className="p-5">{description.slice(0,100)}</p>
            <Link to={`/serviceDetails/${id}`}>
                <button style={{fontSize:"13px"}} className="btn btn-warning"> {name}</button>

            </Link>
        </div>
    );
};

export default Service;