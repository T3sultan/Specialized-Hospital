import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceDetail = ({detail}) => {
    const {name,imageUrl,description} = detail;
    return (
        <>
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
           
        </>
    );
};

export default ServiceDetail;