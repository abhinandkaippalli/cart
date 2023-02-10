import React from 'react'
import list from '../../../Data';
import Product from '../../Product';

function Electronics() {

    const filtereLElectronics = list.filter(electronics => {
        return electronics.category === 'electronics'
    })

    console.log(filtereLElectronics);

    const electronicsList = filtereLElectronics.map((data) =>
        <Product data={data} />
    )

    return (
        <div className='container mt-5'>
            <div className='border p-3'>
                <p className="fs-2 fw-bolder">Electronics</p>
                <div className='row'>
                    {electronicsList}
                </div>
            </div>
        </div>
    )
}

export default Electronics