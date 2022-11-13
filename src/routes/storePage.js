import React from 'react'
import FooterB from '../layouts/footer-b';
import NavBar from '../components/nav/nav';
import Stores from '../components/store/stores'
function StorePage() {
    return (
        <div className="productdetails cart">
            <NavBar />
            <Stores />
            <FooterB />
        </div>
    )
}

export default StorePage