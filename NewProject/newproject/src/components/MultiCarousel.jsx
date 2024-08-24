import React from 'react';
import { Carousel } from 'react-bootstrap';

const MultiCarousel = ({ carouselsData }) => {
    return (
        <div className="multi-carousel-container">
            {carouselsData.map((carousel, idx) => (
                <div key={idx} className="carousel-wrapper" style={{ marginBottom: '2rem' }}>
                    <h3>{carousel.title}</h3>
                    <Carousel controls={false} indicators={false} interval={2000} pause={false}>
                        {carousel.items.map((item, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt={item.alt}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <Carousel.Caption>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            ))}
        </div>
    );
};

export default MultiCarousel;
