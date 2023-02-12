import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../features/cartSlice'
import list from '../../../Data'
import { useNavigate } from 'react-router-dom'

function Kids() {

    const navigate = useNavigate()

    const kids = list.filter(item => {
        return item.category === 'kids'
    })

    const addToCarts = (kid) => {
        dispatch(addToCart({
            id: kid.id,
            image: kid.image,
            productName: kid.productName,
            price: kid.price,
            category: kid.category
        }))
    }

    const kidCart = useSelector(state => state.cart.products)

    const dispatch = useDispatch()

    const removeList = (kid) => {
        dispatch(removeFromCart({ id: kid.id }))
    }

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Kids</p>
                <div className='row'>
                    {kids.map((kid) => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={kid.id}>
                            <div className="card p-2" style={{ width: '100%' }}>
                                <img src={'/images/' + kid.image} style={{ width: '100%', height: '100%' }} className="card-img-top" alt="..." onClick={() => { navigate(`/select/${kid.id}`) }} />
                                <div className="card-body">
                                    <h5 className="card-title">{kid.productName}</h5>
                                    <p className="card-text">{kid.price}</p>
                                    <p className="card-text">{kid.category}</p>
                                    <p className="badge text-bg-success">Rating : {kid.rating}/5</p>
                                    <div>
                                        <button type="button"
                                            className="btn btn-primary" onClick={() => addToCarts(kid)}>Add to Cart
                                        </button>
                                    </div>
                                    {kidCart.find(item => item.id === kid.id) !== undefined ?
                                        <div className='text-danger'>
                                            <div className="remove">
                                                This item in your cart
                                                <a href="#" className="ms-2" onClick={(e) => {
                                                    e.preventDefault()
                                                    removeList(kid)
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

export default Kids