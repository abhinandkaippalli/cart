import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../../../features/productSlice'

function Books() {
    const booksDetails = useSelector((state) => state.product.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    const [selectedValue, setSelectedValue] = useState("Product 1");

    console.log(booksDetails)

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Books</p>
                <div className='row'>
                    {booksDetails.map(book => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={book.id}>
                            <div className="card p-2" style={{ width: '100%' }}>
                                <img src={'/images/' + book.image} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{book.productName}</h5>
                                    <p className="card-text">{book.price}</p>
                                    <p className="card-text">{book.category}</p>
                                    <div className="d-flex gap-2">
                                        <select className="form-select " value={selectedValue} aria-label="Default select example" style={{ width: "65px" }} onChange={(e) => setSelectedValue(e.target.value)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="5">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button type="button"
                                            className="btn btn-primary">Add to Cart
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

export default Books
