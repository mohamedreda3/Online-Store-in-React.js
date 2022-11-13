import React, { useEffect, useState } from 'react'
import SliderDesign from '../components/slider'
import Slider from "react-slick";
import { settings } from '../data/arrs/settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products, categories } from '../apis/axios/api'
import { Link } from 'react-router-dom';
function CardDetails() {
    const [product, setProduct] = useState([]);
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        products().then(
            data => {
                setProduct([...data.data.products]);
            }
        );

        categories().then(
            data => {
                setDepartments([...data.data]);
            }
        );

    }, []);

    return (
        <div className='categories'>
            {
                departments.map(
                    (item, index) => {
                        if (index < 5) {
                            return <section className='cl-13' id={item} key={item}>
                                <h1>{item}</h1>
                                <Slider key={item} {...settings}>
                                    {
                                        product.map(
                                            (p_item, index) => {
                                                if (p_item.category == item) {
                                                    return <SliderDesign key={index} item={p_item} />
                                                } else {
                                                    return null
                                                }
                                            }
                                        )
                                    }
                                </Slider>
                                <Link to={`/store`} className="cl-14 cl-7 cl-t">See More</Link>
                            </section>
                        }
                    }
                )
            }
        </div>
    )
}

export default CardDetails
