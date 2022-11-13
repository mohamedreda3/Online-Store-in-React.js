import { RemoveCircleOutline } from '@mui/icons-material';
import React, { useRef, useState } from 'react'
import Toast from '../../toast';

function CardDesignInCart(props) {
    const quantity = useRef();
    return (
        <div className='product cl-df cl-as cl-jc cl-fw cl-brb'>
            <Toast />
            <div className='product cl-df cl-as cl-jc cl-fw'>
                <figure>
                    <img src={props.product.i_item.thumbnail} alt="" />
                </figure>
                <div className="pr-details cl-crt cl-df cl-js cl-fw">
                    <div className='cl-rwpr'>
                        <h2>{props.product.i_item.title}</h2>
                        <p className='pr cl-pr'>Price: <em> ${props.product.i_item.price}</em> Instead Of <del>${((props.product.i_item.price) + (props.product.i_item.price * (props.product.i_item.discountPercentage / 100))).toFixed(2)}</del></p>
                        <p className='ds'>
                            <span>
                                Rating : {props.product.i_item.rating}
                                <span className='cl-r'>
                                    {
                                        Array(Math.floor(props.product.i_item.rating)).fill({ star: 'https://cdn-icons-png.flaticon.com/512/2377/2377846.png' }).map((item, index) => {
                                            return <img key={index} src={item.star} alt='' />
                                        })
                                    }
                                </span>
                            </span>
                            <span className='cl-df cl-ac'>
                                <span>Quantity: </span>
                                <input type="number" id='quantity' min={1} max={props.product.i_item.stock} autoFocus defaultValue={props.product.q_item.itemQuantity} ref={quantity} onChange={(e) => props.fun_ch(e.target.value)} />
                                <span>All Price: ${props.product.i_item.price * props.product.q_item.itemQuantity}</span>
                            </span>
                        </p>
                    </div>
                    <button className='cl-atc cl-bfr cl-3' onClick={() => props.function_r()}><RemoveCircleOutline /></button>
                </div>
            </div>
        </div>
    )
}

export default CardDesignInCart