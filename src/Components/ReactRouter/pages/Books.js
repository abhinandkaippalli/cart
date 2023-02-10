import React from 'react'
import list from '../../../Data';
import Product from '../../Product';

function Books() {

    const filterBook = list.filter(book => {
        return book.category === 'books'
    })

    const bookList = filterBook.map((data) =>
        <Product key={data.id} data={data} />
    )

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
            <p className="fs-2 fw-bolder">Books</p>
                <div className='row'>
                    {bookList}
                </div>
            </div>
        </div>
    )
}

export default Books