import React from 'react'

const DigitalLearning = () => {
    return (
        <div className="container-fuild p-5" >

            <h2 class="heading heading--1 heading--underline-small heading--center digital-learning__title" style={{ textAlign: "center", marginTop:"40px" }}
            >Defining the Future of Digital Learning</h2>
            <div className="row d-flex justify-content-sm-evenly  mt-5">
                <div className="col-md-3 digital_items mt-3 mx-2">
                    <img src='https://brainstation.io/images/v3/home/digital-learning-1.jpg' />
                    <h1>Full-Spectrum Digital Skills</h1>
                    <p>Premium skills training across the entire digital product lifecycle: data, design, development, marketing, and product management.</p>
                </div>
                <div className="col-md-3 digital_items mt-3 mx-2">
                    <img  src="https://brainstation.io/images/v3/home/digital-learning-2.jpg"/>
                    <h1>Designed by Industry Experts</h1>
                    <p>Agile curriculum developed and updated with industry leaders from the most innovative companies.</p>
                </div>
                <div className="col-md-3 digital_items mt-3 mx-2">
                    <img src="https://brainstation.io/images/v3/home/digital-learning-3.jpg" />
                    <h1>Available Online or In-Person</h1>
                    <p>Cutting-edge, instructor-led digital skills training, online or at state-of-the-art campuses around the world.</p>
                </div>
            </div>

        </div>
    )
}

export default DigitalLearning
