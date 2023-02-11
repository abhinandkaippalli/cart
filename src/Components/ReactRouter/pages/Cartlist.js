import React from 'react'
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa'

function Cartlist() {
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
                <tbody>
                    <tr>
                        <td scope="row">
                            <button className="btn">
                                <FaTimes />
                            </button>
                        </td>
                        <td>
                            <div className='m-2'>Mark</div>
                        </td>
                        <td className="d-flex justify-content-center">
                            <button className='btn'>
                                <FaMinus />
                            </button>
                            <span className="m-2">Value</span>
                            <button className='btn'>
                                <FaPlus />
                            </button>
                        </td>
                        <td>
                            <div className="m-2">Amount</div>
                        </td>
                        <td>
                            <div className="m-2">Total</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4" className="text-right">Total:</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-end me-3">
                <button type="button" className="btn btn-primary">Check Out</button>
            </div>
        </div>
    )
}

export default Cartlist