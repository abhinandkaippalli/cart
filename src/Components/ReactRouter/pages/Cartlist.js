import React from 'react'
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa'

function Cartlist() {
    return (
        <div className="container mt-5">
            <p className="text-start fs-4 fw-semibold">Cart</p>
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">
                                <button className="btn">
                                    <FaTimes fontSize="20px" />
                                </button>
                            </td>
                            <td>Mark</td>
                            <td >
                                <button className='btn'>
                                    <FaMinus fontSize="20px" />
                                </button>
                                Value
                                <button className='btn'>
                                    <FaPlus fontSize="20px" />
                                </button>

                            </td>
                            <td>Amount</td>
                            <td>Total</td>
                        </tr>
                        <tr>
                            <th scope="row" colSpan="3"></th>
                            <td>Total</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-end me-3">
                    <button type="button" className="btn btn-primary">Check Out</button>
                </div>
                <img src='' alt='image'></img>
            </div>
        </div>
    )
}

export default Cartlist