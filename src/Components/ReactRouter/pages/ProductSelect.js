import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../features/cartSlice'
import { useParams } from 'react-router-dom'
import list from '../../../Data'

function ProductSelect() {

    const {pId} = useParams()
    console.log({productId:pId});
    
    const productDetails = list.find(item => {
        return item.id === pId
    })

    console.log(productDetails);

    return (
        <div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className='d-flex'>
                    <div className="border p-3">
                        <span>
                            <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" className="img-fluid rounded-start" alt="..." />
                        </span>
                    </div>
                    <span className='p-5'>
                        <span className="card-body">
                            <h5 className="card-title mb-5">Card title</h5>
                            <div>
                                <span className="fs-3 text-success">Rs.1720</span><span className="text-decoration-line-through ml-2">Rs. 2100</span>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div className="input-group flex-nowrap">
                                    <input type="text" className="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="addon-wrapping" />
                                </div>
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductSelect
