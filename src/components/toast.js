import { CheckOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { disableLoader } from '../store/cart/cartReducer';
function Toast(props) {
  const PRODUCTS = useSelector(state => state.cart);
  const [Load, setLoad] = useState(PRODUCTS.loader.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoad(PRODUCTS.loader.isLoading);
    const loaderTimeOut = setTimeout(() => {
      dispatch(disableLoader());
    }, 5000);
  }, [PRODUCTS])
  return (
    <>
      <div className={Load ? 'cl-tost active' : 'cl-tost '} >
        <CheckOutlined />
        {PRODUCTS.loader.text}
      </div>
    </>
  )
}

export default Toast
