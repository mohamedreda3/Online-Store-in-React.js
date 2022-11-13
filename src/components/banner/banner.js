import React, { useState, useEffect } from 'react'
import { products } from '../../apis/axios/api'
import MaxDiscountProducts from './MaxDiscountProducts';
import MaxRating from './maxRating';
import Slider from 'react-slick';
import { settingsT } from '../../data/arrs/settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Banner() {
    const [maxDiscountProducts, setMaxDiscountProducts] = useState({});
    const [maxRating, setMaxRating] = useState({});
    const [minPrice, setMinPrice] = useState({});
    useEffect(() => {
        products().then((data) => {
            setMaxDiscountProducts(data.data.products.reduce((item, p_item) => (item.discountPercentage > p_item.discountPercentage ? item : p_item)));
            setMaxRating(data.data.products.reduce((item, p_item) => (item.rating > p_item.rating ? item : p_item)));
            setMinPrice(data.data.products.reduce((item, p_item) => (item.price < p_item.price ? item : p_item)));
        })
    }, [])
    return (
        <div className="banner">
        
           <div className='cl-b cl-w cl-bh'>
             <Slider {...settingsT}>
                 <MaxDiscountProducts discount={maxDiscountProducts} />
                 <MaxRating rating={maxRating} />
             </Slider>
           </div>
            {
                // console.log(minPrice)
            }
        </div>
    )
}

export default Banner