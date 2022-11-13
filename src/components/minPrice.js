import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { products } from '../apis/axios/api'
import { Definition } from './definesection';
function MinPrice() {
    const [minPrice, setMinPrice] = useState({});
    useEffect(() => {
        products().then((data) => {
            setMinPrice(data.data.products.reduce((item, p_item) => (item.price < p_item.price ? item : p_item)));
        })
    }, [])
    return (
        <div className="bt">
            <Definition Definition={'Best Price'} />
            <div className='product cl-df cl-as cl-jc cl-fw'>
                <figure>
                    <img src={minPrice.thumbnail} alt="" />
                </figure>
                <div className="pr-details cl-df cl-fd cl-as">
                    <h2>{minPrice.title}</h2>
                    <p className='ds'><span>description:</span> {minPrice.description}</p>
                    <p className='pr'>Price: <em> ${minPrice.price}</em></p>
                    <Link to={`/productdetails/${minPrice.id}`} className='cl-t cl-5'>Shop Now</Link>
                </div>
            </div>
        </div>
    )
}

export default MinPrice