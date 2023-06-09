import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/navbar';
import { remove } from '../store/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }
    return (
        <div>
            <Navbar />
            <h3>Cart</h3>
            <div className="container-fluid">
            <div className='row justify-content-center'>
                {
                    product.map((product, index) => (
                        <>
                            <div className='col-md-2 col-lg-2 product_item my-2 mx-2' key={index}>
                                <img src={product.image} />
                                <h4>{product.title}</h4>
                                <h4>{product.price}</h4>
                                <button onClick={() => { handleRemove(product.id) }} className='btn-primary'>Remove</button>
                            </div>
                        </>
                    ))
                }
            </div>
            </div>
        </div>

    )
}
export default Cart;