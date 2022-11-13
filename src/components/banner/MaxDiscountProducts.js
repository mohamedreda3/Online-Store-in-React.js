import React from 'react'
import { Link } from 'react-router-dom'


function MaxDiscountProducts(props) {
    return (
        <div className='cl-8 cl-df'>
            <div className='cl-10 cl-df cl-sb cl-ac cl-oh'>
                <span className='cr'>{props.discount.category}</span>
                <div className='cl-9 cl-fd cl-df cl-as'>
                    <h1>Big Discount On {props.discount.title} <span> up to</span> <em>{props.discount.discountPercentage}% </em><del> Off</del></h1>
                    <p>{props.discount.description}</p>
                    <p className='pr'>
                        Price: ${Math.floor(props.discount.price - ((props.discount.discountPercentage / 100) * props.discount.price))} instead of
                        <del> ${props.discount.price}</del>
                    </p>
                    <Link to={`/productdetails/${props.discount.id}`} className='cl-t cl-7'>Shop Now</Link>
                </div>
                <figure>
                    <span>
                        <del>${props.discount.price}</del>
                        ${Math.floor(props.discount.price - ((props.discount.discountPercentage / 100) * props.discount.price))}
                    </span>
                    <img src={props.discount.thumbnail} alt={props.discount.title} />
                </figure>
            </div>
        </div>
    )
}

export default MaxDiscountProducts