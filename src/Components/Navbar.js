import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { totalSum } from '../features/cartSlice';
import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';

function Navbar() {
    const [isExpanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!isExpanded);
    };

    const totalPrice = useSelector(state => state.cart.totalPrice)
    const cartList = useSelector(state => state.cart.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(totalSum())
    })

    console.log(totalPrice);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
            <div className="container-fluid ms-5">
                <Link to="/" className="navbar-brand" aria-current="page" href="#">JEBA Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn" aria-controls="navbarSupportedContent" aria-expanded={isExpanded} aria-label="Toggle navigation" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="electronics" className="nav-link">Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="books" className="nav-link">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="sports" className="nav-link">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="kids" className="nav-link">Kids</Link>
                        </li>
                    </ul>
                </div>
                <div className='text-right me-5'>
                    <Link to="cartlist" className="nav-link">
                        <span className='d-inline'>
                            <div>
                                <ImCart color='white' fontSize='25px' />
                            </div>
                            <span className='d-block' style={{ color: 'white' }}>
                                Rs.{totalPrice}
                            </span>
                            <span className='d-block' style={{ color: 'white' }}>
                                {cartList.length} Items
                            </span>
                        </span>

                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
