import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../features/cartSlice'
import list from '../../../Data'

function Books() {

    const books = list.filter(item => {
        return item.category === 'books'
    })

    const addToCarts = (book) => {
        dispatch(addToCart({
            id: book.id,
            image: book.image,
            productName: book.productName,
            price: book.price,
            category: book.category
        }))
    }

    const array = useSelector(state => state.cart.products)
    console.log(array);

    const [isInCart, setIsInCart] = useState([])

    useEffect(() => {
        setIsInCart(array.map(cartItem => books.find(book => book.id === cartItem.id) !== undefined))
    }, [array]);

    console.log(isInCart);

    const dispatch = useDispatch()

    const removeList = (book) => {
        dispatch(removeFromCart({ id: book.id }))
    }

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Books</p>
                <div className='row'>
                    {books.map((book,index) => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={book.id}>
                            <div className="card p-2" style={{ width: '100%' }}>
                                <img src={'/images/' + book.image} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{book.productName}</h5>
                                    <p className="card-text">{book.price}</p>
                                    <p className="card-text">{book.category}</p>
                                    <div className="d-flex gap-2">
                                        <select className="form-select " aria-label="Default select example" style={{ width: "65px" }}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="5">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <button type="button"
                                            className="btn btn-primary" onClick={() => addToCarts(book)}>Add to Cart
                                        </button>
                                    </div>
                                    {array.find(item => item.id === book.id) !== undefined ?
                                        <div className="remove">
                                            This item in your cart
                                            <a href="#" className="ms-2" onClick={() => removeList(book)}>Remove</a>
                                        </div> : ' '}
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
