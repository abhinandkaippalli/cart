import React from 'react'

function ProductSelect() {
    return (
        <div className="container mt-5">
            <div className="d-flex position-relative">
                <div className="border p-3">
                    <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" className="flex-shrink-0 me-3" alt="..." />
                </div>
                <div className="m-5">
                    <h5 className="mt-0">Becoming Steve Jobs</h5>
                    <div>
                        <span className="fs-3 text-success">Rs.1720</span><span className="text-decoration-line-through ms-2">Rs. 2100</span>
                    </div>
                    <div className="d-flex flex-row column-gap-3">
                        <select className="form-select " aria-label="Default select example" style={{ width: "70px" }}>
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div className='ms-2'>
                            <button type="button" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className='bg-danger-subtle'>
                            This item in your cart
                            <a href="#" className="stretched-link ms-1">Remove</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSelect