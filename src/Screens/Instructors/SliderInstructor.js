import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import students from "../SuccessStories/images/student1.jpeg"


class SliderInstructor extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div className="container_slider_instructor">
                <Slider {...settings}>
                    <div className="slick-slide_instructor"></div>
                    <div className="slick-slide_instructor"></div>
                    <div className="slick-slide_instructor"></div>
                    <div className="slick-slide_instructor"></div>
                    <div className="slick-slide_instructor"></div>

                </Slider>
            </div>
        );
    }
}

export default SliderInstructor;
