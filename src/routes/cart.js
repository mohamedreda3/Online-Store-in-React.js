import React from 'react'
import FooterB from '../layouts/footer-b';
import NavBar from '../components/nav/nav';
import Product from '../components/product/cart/product';
function Cart() {
    return (
        <div className="productdetails cart">
            <NavBar />
            <Product cart={true} />
            <FooterB />
        </div>
    )
}

export default Cart
