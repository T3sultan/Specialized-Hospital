import React from 'react';
import './OnlineMedicine.css'
import medicine1 from '../../images/medicines/1.jpg'
import medicine2 from '../../images/medicines/2.jpg'
import medicine3 from '../../images/medicines/3.jpg'
import medicine4 from '../../images/medicines/4.jpg'
import medicine5 from '../../images/medicines/5.jpg'
import medicine6 from '../../images/medicines/6.jpg'
import medicine7 from '../../images/medicines/7.jpg'
import Medicine from '../Medicine/Medicine';






const medicines = [
    {
        img: medicine1,
        name: 'Tabacum homeopathic medicine '

    },
    {
        img: medicine2,
        name: 'Malaria Prevention'

    },
    {
        img: medicine3,
        name: 'Healthy alphabet'

    },
    {
        img: medicine4,
        name: 'COVID-19 Coronavirus'

    },
    {
        img: medicine5,
        name: 'Amlodipine'

    },
    {
        img: medicine6,
        name: 'antiarrhythmic '

    },
    {
        img: medicine7,
        name: 'antiarrhythmic '

    },
]

const OnlineMedicine = () => {
    return (
        <div id="medicine">
            <h2 className="my-5 textStyle1">Online Medicines</h2>
            <div className="container">
                {

                    medicines.map(medicine => <Medicine
                        key={medicine.name}
                        medicine={medicine}
                    >

                    </Medicine>)
                }
            </div>
        </div>
    );
};

export default OnlineMedicine;