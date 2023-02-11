import React from 'react'
import list from '../../../Data';
import Product from '../../Product';

function Kids() {

    const filterKids = list.filter(kids => {
        return kids.category === 'kids'
    })

    const kidsList = filterKids.map((data) =>
        <Product key={data.id} data={data} />
    )

    return (
        <div className='container mt-5'>
        <div className='border p-3'>
        <p className="fs-2 fw-bolder">Kids</p>
            <div className='row'>
                {kidsList}
            </div>
            </div>
        </div>
    )
}

export default Kids