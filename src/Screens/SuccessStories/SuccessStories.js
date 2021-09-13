import React from 'react'
import SliderSuccess from "./SliderSuccess"
const SuccessStories = () => {
    return (
        <div className="container-fuild p-5" style={{marginTop:'70px'}}>

            <h2 class="heading heading--1 heading--underline-small heading--center digital-learning__title" style={{ textAlign: "center" }}
            >Success Stories from Future Digital Leaders</h2>

            <div className="row d-flex justify-content-center   mt-5" >
                <div className="col-md-5 mx-5 SuccessStories_same SuccessStories_FeatureStory  mt-3 ">
                    <p style={{color:'gray',fontWeight:'600',marginTop:'10px'}}>FEATURED STORY</p>
                    <h1 style={{fontSize:'40px',marginTop:'10px'}}>My experience at BrainStation really impacted my career. It put me in a position to get the job I have today.</h1>
                    <p style={{color:'gray',marginTop:'24px'}}>Aveen Pattni, Software Developer II, Walmart Labs</p>
                    <button className="readStory_btn">Read Full Story</button>


                </div>
                <div className="col-md-5 mx-5 SuccessStories_same SuccessStories_images  mt-3 ">

                    <img  src="https://dvrfp7vt6y4co.cloudfront.net/9dee1a2d-6243-4d9b-8ccd-76debf473ddc/1x.webp" />
                </div>

            </div>

            <div className="row">
                <div>
                    <SliderSuccess />

                </div>
            </div>
        </div>
    )
}

export default SuccessStories

