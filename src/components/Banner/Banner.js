import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


import banner1 from '../../images/arseny-togulev-DE6rYp1nAho-unsplash.jpg';
import banner2 from '../../images/national-cancer-institute-701-FJcjLAQ-unsplash (1).jpg';
import banner3 from '../../images/walter-otto-PT70CT6mATQ-unsplash.jpg';
import banner4 from '../../images/olga-guryanova-tMFeatBSS4s-unsplash.jpg';



const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Doctor Surgery Surgeon</h3>
                        <p>There are also surgeons in podiatry, dentistry, orthodontics, and veterinary medicine   </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>National Cancer Institute</h3>
                        <p>The National Cancer Institute (NCI) is the federal government's principal agency for cancer research and training.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Vaccine Test And Food Safety</h3>
                        <p>FDA has been doing what we can to support a safe and ample food supply</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>COVID-19, Health & Wellness</h3>
                        <p> The FDA and Federal Trade Commission issued a warning letter to a seller of fraudulent COVID-19 products, as part of the agency’s effort to protect consumers.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    );
};

export default Banner;