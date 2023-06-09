import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';

const Products = () => {

    const dispatch = useDispatch();
    const { data: product, status } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const HendleAdd = (product) => {
        dispatch(add(product));
    }
    if (status === STATUSES.LOADING) {
        return <h2>Loading...</h2>
    }
    if (status === STATUSES.ERROR) {
        return <h2>Somthing went wrong!</h2>
    }
    return (
        <div className="container-fluid">
            <div className='row justify-content-center'>
                {
                    product.map((product, index) => (
                        <>
                            <div className='col-md-2 col-lg-2 product_item my-2 mx-2' key={index}>
                                <img src={product.image} />
                                <h4>{product.title}</h4>
                                <h4>{product.price}</h4>
                                <button onClick={() => { HendleAdd(product) }} className='btn-primary'>Add To Cart</button>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
export default Products;