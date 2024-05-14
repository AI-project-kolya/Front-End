import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid logo">
                <Link to={"/"} className="navbar-brand" href="#">Why so serious ?</Link>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" href="#" to={"/aboutus"}>About us</Link>
                        </li>
                    </ul>
                    <Link to={'/predict'} className="btn btn-primary" type="submit">

                        Predict
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar