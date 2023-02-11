import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../../features/cartSlice'
import list from '../../../Data'


function Electronics() {

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

    const array = useSelector(state => state.cart.products)
    console.log(array);
    const dispatch = useDispatch()

    console.log(electronics);

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Electronics</p>
                <div className='row'>
                    {electronics.map(electronic => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={electronic.id}>
                            <div className="card p-2" style={{ width: '100%' }}>
                                <img src={'/images/' + electronic.image} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{electronic.productName}</h5>
                                    <p className="card-text">{electronic.price}</p>
                                    <p className="card-text">{electronic.category}</p>
                                    <div className="d-flex gap-2">
                                        <select className="form-select " aria-label="Default select example" style={{ width: "65px" }}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="5">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button type="button"
                                            className="btn btn-primary" onClick={() => addToCarts(electronic)}>Add to Cart
                                        </button>
                                    </div>
                                    <div className="remove">
                                        This item in your cart
                                        <a href="#" className="ms-2">Remove</a>
                                    </div>
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
