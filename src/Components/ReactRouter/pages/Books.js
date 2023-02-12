import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../features/cartSlice'
import list from '../../../Data'
import { useNavigate } from 'react-router-dom'

function Books() {

    const navigate = useNavigate()

    const books = list.filter(item => {
        return item.category === 'books'
    })

    const addToCarts = (book) => {
        dispatch(addToCart({
            id: book.id,
            image: book.image,
            productName: book.productName,
            price: book.price,
            category: book.category,
        }))
    }

    const bookCart = useSelector(state => state.cart.products)

    const dispatch = useDispatch()

    const removeList = (book) => {
        dispatch(removeFromCart({ id: book.id }))
    }

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Books</p>
                <div className='row'>
                    {books.map((book) => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={book.id}>
                            <div className="card p-2" style={{ width: '100%', height: '100%' }}>
                                <img src={'/images/' + book.image} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="..." onClick={() => { navigate(`/select/${book.id}`) }} />
                                <div className="card-body">
                                    <h5 className="card-title">{book.productName}</h5>
                                    <p className="card-text">{book.price}</p>
                                    <p className="card-text">{book.category}</p>
                                    <p className="badge text-bg-success">Rating : {book.rating}/5</p>
                                    <div>
                                        <button type="button"
                                            className="btn btn-primary" onClick={() => addToCarts(book)}>Add to Cart
                                        </button>
                                    </div>
                                    {bookCart.find(item => item.id === book.id) !== undefined ?
                                        <div className='text-danger'>
                                            <div className="remove">
                                                This item in your cart
                                                <a href="#" className="ms-2" onClick={(e) => {
                                                    e.preventDefault()
                                                    removeList(book)
                                                }}>Remove</a>
                                            </div>
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
