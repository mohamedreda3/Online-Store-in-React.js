import { Delete } from '@mui/icons-material';
import React, { useRef } from 'react'
import Toast from '../../toast'
function ProductCard(props) {
    const quantity = useRef();
    return (
        <div className="productsChck cl-cart cl-df cl-as cl-jc cl-fw">
            <Toast />
            <div className='productcard cl-df cl-as cl-jc cl-fw cl-fd'>
                <figure>
                    <img src={props.product.i_item.thumbnail} alt="" />
                </figure>
                <div className="pr-details cl-crt cl-df cl-sb cl-fw">
                    <div>
                        <h2>{props.product.i_item.title}</h2>
                        <p className='pr cl-pr'>
                            Price:
                            <em> ${props.product.i_item.price}</em>
                        </p>
                    </div>
                    <span>
                        Rating : {props.product.i_item.rating}
                    </span>
                    <div>
                        <span className='cl-qu cl-df cl-ac'>
                            <span>
                                <span>Quantity: </span>
                                <input type="number" id='quantity'
                                    min={1}
                                    max={props.product.i_item.stock}
                                    autoFocus defaultValue={props.product.q_item.itemQuantity}
                                    ref={quantity}
                                    onChange={(e) => props.fun_ch(e.target.value)}
                                />
                            </span>
                            <span> ${props.product.i_item.price * props.product.q_item.itemQuantity}</span>
                        </span>
                    </div>
                    <button className='cl-atc cl-bfr cl-3' onClick={() => props.function_r()}><Delete /></button>
                </div>
            </div>
        </div >
    )
}

export default ProductCard