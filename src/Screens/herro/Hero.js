
import React from 'react'
import HeroVideo from './herovideo2.mp4'
const Hero = () => {
    return (
        <div className="heroSection">

            <div className="row">
                <div className="col-12" >

                    <video autoPlay loop muted style={{
                        position: 'absolute',
                        width: '100%',
                        left: '50%',
                        top: '50%',
                        height: '120%',
                        objectFit: 'cover',
                        transform: 'translate(-50% , -50%)',
                        zIndex: '-1'


                    }} >
                        <source src={HeroVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Hero
