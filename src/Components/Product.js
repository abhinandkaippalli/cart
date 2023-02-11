import React from 'react'

function Product(props) {
    return (

        <div className='p-2 col-lg-3 col-md-4 col-sm-6 col-12'>
            {console.log(props.data)}
            <div className="card p-2" style={{ width: 'auto', height: '500px' }}>
                <img src={'/images/'+props.data.image} style={{ width: 'auto', height: '200px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" key={props.data.id}>{props.data.productName}</h5>
                    <p className="card-text" key={props.id} >{props.data.price}</p>
                    <p className="card-text" key={props.id} >{props.data.category}</p>
                    <div className="d-flex gap-2">
                        <select className="form-select " aria-label="Default select example" style={{ width: "65px" }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="5">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button type="button" className="btn btn-primary">Add to Cart</button>
                    </div>
                    <div className="remove">
                        This item in your cart
                        <a href="#" className="ms-2">Remove</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product