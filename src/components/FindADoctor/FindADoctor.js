import React, { useState, useEffect } from 'react';
import Doctor from '../Doctor/Doctor';
import './FindADoctor.css'

const FindADoctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])
    return (

        <div id="doctor">
            <h2 className="my-5 textStyle1">Specialist Doctors</h2>
            <div className="container">
                {

                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default FindADoctor;