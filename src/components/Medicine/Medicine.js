import React from 'react';
import './Medicine.css'

const Medicine = ({ medicine }) => {
    const { name, img } = medicine;
    return (
        <div className="container ">
            <div>
                <img className="imgStyle rounded" src={img} alt="" />
            </div>
            <div className="text">

                <h2 className="textStyle2">{name}</h2>

            </div>


        </div>
    );
};

export default Medicine;