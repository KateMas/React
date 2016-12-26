import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <section className="slider">
                <div className="owl-carousel owl-theme">
                    <div className="slider--1"></div>
                    <div className="slider--2"></div>
                    <div className="slider--3"></div>
                </div>
                <div className="sliderHeader">
                    <h1>120 Anastasia Avenue, Coral Gables</h1>
                    <span>$625,000</span>
                    <a className="btn" href="#">more info</a>
                </div>
            </section>
        )
    }
}

export default Slider;