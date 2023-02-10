import React from 'react'
import list from '../../../Data';
import Product from '../../Product';

function Sports() {
    const filterSports = list.filter(spors => {
        return spors.category === 'sports'
    })

    const sportsList = filterSports.map((data) =>
        <Product data={data} />
    )

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Sports</p>
                <div className='row'>
                    {sportsList}
                </div>
            </div>
        </div>
    )
}

export default Sports