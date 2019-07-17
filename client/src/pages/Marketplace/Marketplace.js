import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Marketplace.css';

class Marketplace extends Component {
    render() {
        return (
            <div className="page-parent">
                <div className="market-card__container">
                    <h1>Marketplace</h1>
                    <Carousel
                        className="market-card__container__carousel"
                        interval="10000"
                    >
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>First slide label.</h3>
                            </Carousel.Caption>  
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                 <h3>Second slide label.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>Third slide label.</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Marketplace;