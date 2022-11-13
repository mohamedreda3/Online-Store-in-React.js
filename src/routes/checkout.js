import React from 'react'
import NavBar from '../components/nav/nav'
import FooterB from '../layouts/footer-b'
import Product from '../components/product/cart/product';

function CheckOut() {
    return (
        <div className="productdetails cl-checkout">
            <NavBar />
            <Product cart={false}/>
            <FooterB />
        </div>
    )
}

export default CheckOut