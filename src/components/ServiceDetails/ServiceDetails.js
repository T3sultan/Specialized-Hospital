import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [individualDetails, setIndividualDetails] = useState({})

    useEffect(() => {
        fetch('serviceDetails.json')
            .then(res => res.json())
            .then(data => setDetails(data))

    }, []);

    useEffect(() => {
        const matchService = details.find(detail => detail.id === id);

        setIndividualDetails(matchService);

    }, [details])
    return (
        <div className="text-center mt-4 mb-4 details">
            <Card style={{ width: '28rem', alignItems: 'center' }}>
                <Card.Img variant="top" className="w-50" src={individualDetails?.imgUrl} />
                <Card.Body>
                    <Card.Title>{individualDetails?.name}</Card.Title>
                    <Card.Text>
                        {individualDetails?.description}
                    </Card.Text>
                   
                    <Button className="bg-success" variant="primary">See More ...</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;