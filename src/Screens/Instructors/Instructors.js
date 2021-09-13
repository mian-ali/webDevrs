import React from 'react'
import SliderInstructor from "./SliderInstructor"
const Instructors = () => {
    return (
        <div className="container-fuild p-5">

            <h2 class="heading heading--1 heading--underline-small heading--center digital-learning__title" style={{ textAlign: "center" }}
            >Taught by Elite Instructors</h2>
            <div className="row mt-5">
                <div>
                    <SliderInstructor />

                </div>
            </div>
        </div>
    )
}

export default Instructors
