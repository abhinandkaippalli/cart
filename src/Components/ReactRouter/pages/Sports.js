import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../features/cartSlice'
import list from '../../../Data'
import { Link, useNavigate } from 'react-router-dom'


function Sports() {

    const navigate = useNavigate()

    const sports = list.filter(item => {
        return item.category === 'sports'
    })

    const addToCarts = (sport) => {
        dispatch(addToCart({
            id: sport.id,
            image: sport.image,
            productName: sport.productName,
            price: sport.price,
            category: sport.category
        }))
    }

    const array = useSelector(state => state.cart.products)
    console.log(array);

    const dispatch = useDispatch()

    const removeList = (sport) => {
        dispatch(removeFromCart({ id: sport.id }))
    }

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Sports</p>
                <div className='row'>
                    {sports.map((sport, index) => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={sport.id} onClick={() => {navigate(`/select/${sport.id}`)}}>
                            <div className="card p-2" style={{ width: '100%' }}>
                                <img src={'/images/' + sport.image} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{sport.productName}</h5>
                                    <p className="card-text">{sport.price}</p>
                                    <p className="card-text">{sport.category}</p>
                                    <div>
                                        <button type="button"
                                            className="btn btn-primary" onClick={() => addToCarts(sport)}>Add to Cart
                                        </button>
                                    </div>
                                    {array.find(item => item.id === sport.id) !== undefined ?
                                        <div className="remove">
                                            This item in your cart
                                            <a href="#"
                                                className="ms-2" onClick={() => removeList(sport)}>Remove</a>
                                        </div> : ' '}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Sports