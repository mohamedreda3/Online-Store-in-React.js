import React from 'react'
import { Link } from 'react-router-dom'

export const toTop = () => {
    window.scrollTo({ top: 0 });
}


function Carddesigninslider(props) {
  
    return (
        <div className="card">
            <img src={props.image} alt="" />
            <h2 className='name'>{props.name}</h2>
            <p className='brand'>{props.brand}</p>
            <p className='describe'>{props.describe}</p>
            <span className='price'>${props.price}</span>
            <Link onClick={() => toTop()} to={`/productdetails/${props.id}`} className='cl-t cl-5'> Shop Now </Link>
        </div>
    )
}

export default Carddesigninslider
