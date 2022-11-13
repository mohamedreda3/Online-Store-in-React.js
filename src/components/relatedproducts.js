import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { products, categories } from '../apis/axios/api';
import Slider from "react-slick";
import { settings } from '../data/arrs/settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDesign from '../components/slider';
import { Definition } from './definesection';

const Relatedproducts = () => {
    const { id } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        products().then(async data => {
            let category = data.data.products.filter(item => item.id == id)[0]?.category;
            let brand = data.data.products.filter(item => item.id == id)[0]?.brand;
            let rating = data.data.products.filter(item => item.id == id)[0]?.rating;
            setRelatedProducts(data.data.products.filter(item => item?.category == category || item?.brand == brand || item?.rating == rating ));
        })
    }, [id]);
    return (
        <div className="cl-rp cl-13">
            <Definition Definition={'Related Products'}/>
            <Slider {...settings}>
                {
                    relatedProducts.map(
                        (p_item, index) => {
                            return <SliderDesign key={index} item={p_item} />
                        }
                    )
                }
            </Slider>
        </div>
    );
}

export default Relatedproducts;
