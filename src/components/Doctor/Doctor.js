import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, imgUrl, profession } = doctor;
    return (
        <div className="doctors pb-4 rounded">
            <img src={imgUrl} alt="" />
            <h2 className="textStyle">{name}</h2>
            <p className="professionStyle rounded-circle">{profession}</p>
            
        </div>

    );
};

export default Doctor;