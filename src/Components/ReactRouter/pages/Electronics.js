import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../features/cartSlice'
import list from '../../../Data'
import { useNavigate } from 'react-router-dom'


function Electronics() {

    const navigate = useNavigate()

    const electronics = list.filter(item => {
        return item.category === 'electronics'
    })

    const addToCarts = (electronic) => {
        dispatch(addToCart({
            id: electronic.id,
            image: electronic.image,
            productName: electronic.productName,
            price: electronic.price,
            category: electronic.category
        }))
    }

    const sportCart = useSelector(state => state.cart.products)

    const dispatch = useDispatch()

    const removeList = (electronic) => {
        dispatch(removeFromCart({ id: electronic.id }))
    }

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Electronics</p>
                <div className='row'>
                    {electronics.map(electronic => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={electronic.id}>
                            <div className="card p-2" style={{ width: '100%', height:'100%' }}>
                                <img src={'/images/' + electronic.image} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="..." onClick={() => { navigate(`/select/${electronic.id}`) }} />
                                <div className="card-body">
                                    <h5 className="card-title">{electronic.productName}</h5>
                                    <p className="card-text">{electronic.price}</p>
                                    <p className="card-text">{electronic.category}</p>
                                    <div>
                                        <button type="button"
                                            className="btn btn-primary" onClick={() => addToCarts(electronic)}>Add to Cart
                                        </button>
                                    </div>
                                    {sportCart.find(item => item.id === electronic.id) !== undefined ?
                                        <div className='text-danger'>
                                            <div className="remove">
                                                This item in your cart
                                                <a href="#" className="ms-2" onClick={(e) => {
                                                    e.preventDefault()
                                                    removeList(electronic)
                                                }}>Remove</a>
                                            </div>
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

export default Electronics
