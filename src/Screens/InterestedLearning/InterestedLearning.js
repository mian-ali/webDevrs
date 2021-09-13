import React from 'react'
import { IoIosGlobe } from "react-icons/io";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";





const InterestedLearning = () => {
    return (
        <div className="container-fuild p-5" style={{marginTop:'-55px'}}>

            <h2 class="heading heading--1 heading--underline-small heading--center digital-learning__title" style={{ textAlign: "center" }}
            >What are you Interested in Learning?</h2>
            <div className="row d-flex justify-content-sm-around  mt-5">
                <div className="col-md-3 InterestedLearning_same InterestedLearning_data  mt-3 mx-2">
                <IoIosGlobe  className="blobe_icon"/>
                
                Data
               

                </div>
                <div className="col-md-3 InterestedLearning_same InterestedLearning_product  mt-3 mx-2">
                    <BsReverseLayoutTextSidebarReverse  className="product__icon"/>
                    
                    Product
                    </div>
                <div className="col-md-3 InterestedLearning_same InterestedLearning_development  mt-3 mx-2">
                    
                <MdComputer  className="dev_icon"/>
                    
                    Development</div>
            </div>
            <div className="row d-flex justify-content-sm-around  ">
                <div className="col-md-3 InterestedLearning_same InterestedLearning_data  mt-3 mx-2">
                    <AiOutlineUserAdd  className="Des_icon"/>

                    Design</div>
                <div className="col-md-3 InterestedLearning_same InterestedLearning_product  mt-3 mx-2">
                    <FaMobileAlt  className="mar_icon"/>
                    Marketing</div>
                <div className="col-md-3 InterestedLearning_same InterestedLearning_development  mt-3 mx-2">
                    <IoMdBusiness  className="bus_icon"/>
                    Businces</div>
            </div>

        </div>
    )
}

export default InterestedLearning
