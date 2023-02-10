import React from 'react'
import { Link } from 'react-router-dom'
import { ImCart } from 'react-icons/im'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
            <div className="container-fluid ms-5">
                <Link to="/" className="navbar-brand" aria-current="page" href="#">JEBA Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <Link to="electronics" className="nav-link" href="#">Electronics</Link>
                        </li>
                        <li className="nav-item" key=''>
                            <Link to="books" className="nav-link" href="#">Books</Link>
                        </li>
                        <li className="nav-item" key=''>
                            <Link to="sports" className="nav-link" href="#">Sports</Link>
                        </li>
                        <li className="nav-item" key=''>
                            <Link to="kids" className="nav-link" href="#">Kids</Link>
                        </li>
                    </ul>
                </div>
                <div className='text-end me-5'>
                    <Link to="cartlist" className="nav-link" href="#">
                        <span>
                            <div className='d-inline'>
                                <ImCart color='white' fontSize='25px' />
                            </div>
                        </span>
                        <span className='d-block' style={{ color: 'white' }}>
                            d-block
                        </span>
                        <span className='d-block' style={{ color: 'white' }}>
                            d-block
                        </span>
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar