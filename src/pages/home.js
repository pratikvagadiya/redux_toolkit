import React from 'react'
import Navbar from '../components/navbar';
import Products from '../components/product';
const Home = () => {

    return (
        <div>
            <Navbar />
            <h2>Welcome to the Redux toolkit store</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    )
}
export default Home;