import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../features/cartSlice'
import { useParams } from 'react-router-dom'
import list from '../../../Data'

function ProductSelect() {

    const product = useSelector(state => state.cart.products)

    const { pId } = useParams()
    console.log({ productId: pId });

    const productDetails = list.find(item => {
        return item.id === pId
    })


    const dispatch = useDispatch()

    const addToCarts = (productDetails) => {
        dispatch(addToCart({
            id: productDetails.id,
            image: productDetails.image,
            productName: productDetails.productName,
            price: productDetails.price,
            category: productDetails.category,
        }))
    }

    const removeList = (productDetails) => {
        dispatch(removeFromCart({ id: productDetails.id }))
    }

    return (
        <div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className='d-flex'>
                    <div className="border p-3">
                        <span>
                            <img src={'/images/' + productDetails.image} className="img-fluid rounded-start" alt="..." />
                        </span>
                    </div>
                    <span className='p-5'>
                        <span className="card-body">
                            <h5 className="card-title mb-5">{productDetails.productName}</h5>
                            <div>
                                <span className="fs-3 text-success">Rs. {productDetails.price}</span><span className="text-decoration-line-through ml-2">Rs. {productDetails.offerPrice}</span>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <div className="input-group flex-nowrap">
                                    <input type="text" className="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="addon-wrapping" />
                                </div>
                                <button className="btn btn-primary" type="submit" onClick={() => addToCarts(productDetails)}>Add to cart</button>
                            </div>
                            {product.find(item => item.id === pId) !== undefined ?
                                <div className='text-danger mt-3'>
                                    <div className="remove">
                                        This item in your cart
                                        <a href="#" className="ms-2" onClick={(e) => {
                                            e.preventDefault()
                                            removeList(productDetails)
                                        }}>Remove</a>
                                    </div>
                                </div> : ' '
                            }
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductSelect
