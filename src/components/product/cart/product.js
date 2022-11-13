import React, { useState, useEffect, useRef } from 'react'
import { products } from '../../../apis/axios/api';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../../../store/cart/cartReducer';
import CardDesignInCart from './carddesignincart';
import ProceedToCheckOut from './proceedToCheckOut'
import ProductCard from '../checkout/productCard';
import { Link } from 'react-router-dom'
import CheckoutCard from '../checkout/checkoutcard';
function Product(props) {
    const [product, setProduct] = useState([]);
    const PRODUCTS = useSelector(state => state.cart);

    useEffect(() => {
        products().then(data => {
            let arr = new Array();
            data.data.products.filter(item => {
                if (PRODUCTS.cart.find(p_item => item.id === p_item.itemId)) {
                    PRODUCTS.cart.map(p_item => {
                        if (item.id === p_item.itemId) arr.push({ i_item: item, q_item: p_item });
                    });
                }
            });
            setProduct([...arr]);
        })
    }, [PRODUCTS]);

    const dispatch = useDispatch();

    const removeFromCartObj = (productObj) => {
        dispatch(removeFromCart(productObj));
    }

    const UpdateCartObj = (productObj) => {
        dispatch(updateCart(productObj));
    }

    return (
        <>
            {
                props.cart ?
                    <div className="cl-cart cl-22 s-pr cl-df cl-fd cl-ac">
                        <div className='cl-crchckot cl-22 s-pr cl-df cl-fd cl-ac'>
                            {
                                product.length > 0 ?
                                    product.map((item, index) =>
                                        <CardDesignInCart totalPrice={PRODUCTS.totalPrice}
                                            key={index}
                                            product={item}
                                            fun_ch={(qunt) => UpdateCartObj({ itemId: item.q_item.itemId, quant: parseInt(qunt) })}
                                            function_r={() => removeFromCartObj({ itemId: item.q_item.itemId })} />)
                                    :
                                    <p className='cl-p'> You Do not Have Any Elements In Cart </p>
                            }
                        </div>
                        <ProceedToCheckOut totalPrice={PRODUCTS.totalPrice} />
                    </div> :
                    <div className="chckdiv cl-df cl-ac cl-jc cl-fd">
                        <CheckoutCard />
                        <div className="chckot cl-df cl-as cl-jc cl-fw">
                            {
                                product.length > 0 ?
                                    product.map((item, index) =>
                                        <ProductCard
                                            key={index}
                                            product={item}
                                            fun_ch={(qunt) => UpdateCartObj({ itemId: item.q_item.itemId, quant: parseInt(qunt) })}
                                            function_r={() => removeFromCartObj({ itemId: item.q_item.itemId })} />)
                                    :
                                    <p className='cl-p'> You Do not Have Any Elements In Cart </p>
                            }
                        </div>
                    </div>
            }
            <Link to='/store' className='cl-bck'> Back To Store </Link>
        </>
    )
}

export default Product