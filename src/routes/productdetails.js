import React from 'react'
import FooterB from '../layouts/footer-b';
import NavBar from '../components/nav/nav';
import Singleproduct from '../components/product/singleproduct';
import Relatedproducts from '../components/relatedproducts';
import UserReview from '../components/userReview';
function Productdetails() {
    return (
        <div className="productdetails">
            <NavBar />
            <Singleproduct />
            <UserReview />
            <Relatedproducts />
            <FooterB />
        </div>
    )
}

export default Productdetails
