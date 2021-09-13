import { React, Fragment } from 'react'

const NavBar = () => {
    return (

        <Fragment>



            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark" >
                <div className="container-fluid">
                    <a className="navbar-brand text-white" to="/">Webdevs</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
                    </button>
                    <div className=" justify-content-md-end collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item mx-md-4">
                                <a className="nav-link active" aria-current="page" to="/">Home</a>
                            </li>
                            <li className="nav-item mx-md-4">
                                <a className="nav-link " aria-current="page" to="/about">Couse Outline </a>
                            </li>
                            <li className="nav-item mx-md-4">
                                <a className="nav-link " aria-current="page" to="/csspms">About</a>
                            </li>


                            <li className="nav-item mx-md-4">
                                <a className="nav-link " aria-current="page" href="#">Contact us</a>
                            </li>

                            <li className="nav-item mx-md-4" >
                                <a className="nav-link px-lg-5 btn-primary btn-sm px-3" aria-current="page" href="#"  >Apply </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default NavBar
