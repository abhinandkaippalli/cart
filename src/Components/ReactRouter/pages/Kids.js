import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../../features/cartSlice'
import list from '../../../Data'

function Kids() {

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

    const array = useSelector(state => state.cart.products)
    console.log(array);
    const dispatch = useDispatch()

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Kids</p>
                <div className='row'>
                    {kids.map(kid => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={kid.id}>
                            <div className="card p-2" style={{ width: '100%' }}>
                                <img src={'/images/' + kid.image} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{kid.productName}</h5>
                                    <p className="card-text">{kid.price}</p>
                                    <p className="card-text">{kid.category}</p>
                                    <div className="d-flex gap-2">
                                        <select className="form-select " aria-label="Default select example" style={{ width: "65px" }}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="5">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button type="button"
                                            className="btn btn-primary" onClick={() => addToCarts(kid)}>Add to Cart
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

export default Kids