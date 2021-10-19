import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { id } = useParams();

    const [details, setDetails] = useState([]);

    const [individualDetails, setIndividualDetails] = useState({})

    useEffect(() => {

        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setDetails(data.hospital))
    }, [])
    useEffect(() => {
        const matchService = details.find(detail => detail.id === id);

        setIndividualDetails(matchService);

    }, [details])
    return (
        <div className="container4 my-4">
            <div className="details1">

                <Card className="detailsStyle" style={{ width: '30rem', alignItems: 'center' }}>
                    <Card.Img variant="top" className="w-100" src={individualDetails?.imgUrl} />
                    <Card.Body>
                        <Card.Title>{individualDetails?.name}</Card.Title>
                        <Card.Text>Description:
                            {individualDetails?.description}
                        </Card.Text>

                        <Button className="bg-success" variant="primary">See More ...</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>

    );
};

export default ServiceDetails;