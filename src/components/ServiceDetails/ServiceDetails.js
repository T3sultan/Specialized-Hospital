import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Service Details: {id}</h1>
        </div>
    );
};

export default ServiceDetails;