import React, { useEffect } from 'react'
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeFromCart, totalSum } from '../../../features/cartSlice'

function Cartlist() {
    const cartList = useSelector(state => state.cart.products)
    console.log(cartList)

    const dispatch = useDispatch()

    const removeProduct = (sport) => {
        dispatch(removeFromCart({ id: sport.id }))
    }

    useEffect(() => {
        dispatch(totalSum())
    })

    const total = useSelector(state => state.cart.totalPrice)

    return (
        <div className="container mt-5">
            <p className="text-start fs-4 fw-semibold">Cart</p>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col" className="text-center">Quantity</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                {cartList.map((cart) => {
                    return (
                        <tbody key={cart.id}>
                            <tr>
                                <td scope="row">
                                    <button className="btn" onClick={() => removeProduct(cart)} >
                                        <FaTimes />
                                    </button>
                                </td>
                                <td>
                                    <div className='m-2'>{cart.productName}</div>
                                </td>
                                <td className="d-flex justify-content-center">
                                    <button className='btn' onClick={() => dispatch(decrementQuantity({id:cart.id}))}>
                                        <FaMinus />
                                    </button>
                                    <span className="m-2">{cart.quantity}</span>
                                    <button className='btn' onClick={() => dispatch(incrementQuantity({id:cart.id}))}>
                                        <FaPlus />
                                    </button>
                                </td>
                                <td>
                                    <div className="m-2">{cart.price}</div>
                                </td>
                                <td>
                                    <div className="m-2">{cart.totalPrice}</div>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-right">Total:</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>
            </table>

            <div className="d-flex justify-content-end me-3">
                <button type="button" className="btn btn-primary">Check Out</button>
            </div>
        </div>
    )
}

export default Cartlist