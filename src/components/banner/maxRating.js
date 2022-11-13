import React from 'react'
import { Link } from 'react-router-dom'


function MaxRating(props) {
    return (
        <div className='cl-8 cl-df'>
            <div className='cl-10 cl-df cl-sb cl-ac cl-oh'>
                <span className='cr'>{props.rating.category}</span>
                <div className='cl-9 cl-fd cl-df cl-as'>
                    <h1>The Highest Product Rating {props.rating.title} <span> up to</span> <em>{props.rating.rating}</em>-5</h1>
                    <p>{props.rating.description}</p>
                    <p className='pr'>
                        Price: ${Math.floor(props.rating.price - ((props.rating.discountPercentage / 100) * props.rating.price))} instead of
                        <del> ${props.rating.price}</del>
                    </p>
                    <Link to={`/productdetails/${props.rating.id}`} className='cl-t cl-7'>Shop Now</Link>
                </div>
                <figure>
                    <img src={props.rating.thumbnail} alt={props.rating.title} />
                </figure>
            </div>
        </div>
    )
}

export default MaxRating