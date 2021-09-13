import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import students from "./images/student1.jpeg"


class SliderSuccess extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className="container_slider">
                <Slider {...settings}>
                    <div className="slick-slide"><img src={students} alt="Credit to Joshua Earle on Unsplash" /></div>
                    <div className="slick-slide"><img src={students} alt="Credit to Joshua Earle on Unsplash" /></div>
                    <div className="slick-slide"><img src={students} alt="Credit to Joshua Earle on Unsplash" /></div>
                    <div className="slick-slide"><img src={students} alt="Credit to Joshua Earle on Unsplash" /></div>
                    <div className="slick-slide"><img src={students} alt="Credit to Joshua Earle on Unsplash" /></div>

                </Slider>
            </div>
        );
    }
}

export default SliderSuccess;
