import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../features/cartSlice'
import list from '../../../Data'
import { Link } from 'react-router-dom'

function Kids() {

    const kids = list.filter(item => {
        return item.category === 'kids'
    })

    const addToCarts = (kid) => {
        dispatch(addToCart({
            id: kid.id,
            image: kid.image,
            productName: kid.productName,
            price: kid.price,
            category: kid.category
        }))
    }

    const array = useSelector(state => state.cart.products)
    console.log(array);

    const [isInCart, setIsInCart] = useState([])

    useEffect(() => {
        setIsInCart(array.map(cartItem => kids.find(kid => kid.id === cartItem.id) !== undefined))
    }, [array]);

    console.log(isInCart);

    const dispatch = useDispatch()

    const containerRef = useRef(null);

    useEffect(() => {
      const savedScrollPosition = window.scrollY;
      return () => {
        window.scrollTo(0, savedScrollPosition);
      };
    }, []);

    const removeList = (kid) => {
        dispatch(removeFromCart({ id: kid.id }))
    }

    return (

        <div ref={containerRef} style={{
            overflowAnchor: "none"
          }}>

        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Kids</p>
                <div className='row'>
                    {kids.map((kid) => (
                        <div className='p-4 col-lg-3 col-md-4 col-sm-6 col-12' key={kid.id}>
                            <div className="card p-2" style={{ width: '100%' }}>
                                <Link to="/select"><img src={'/images/' + kid.image} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="..." /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{kid.productName}</h5>
                                    <p className="card-text">{kid.price}</p>
                                    <p className="card-text">{kid.category}</p>
                                    <div>
                                        <button type="button"
                                            className="btn btn-primary" onClick={() => addToCarts(kid)}>Add to Cart
                                        </button>
                                    </div>
                                    {array.find(item => item.id === kid.id) !== undefined ?
                                        <div className="remove">
                                            This item in your cart
                                            <a href="#" className="ms-2" onClick={() => removeList(kid)}>Remove</a>
                                        </div> : ' '}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
</div>
    )

}

export default Kids