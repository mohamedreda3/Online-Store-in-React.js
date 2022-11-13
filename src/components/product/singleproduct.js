import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../apis/axios/api';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cart/cartReducer';
import ReactImageMagnify from 'react-image-magnify';
import Toast from '../toast';
function Singleproduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [src, setSrc] = useState('');
  const quantity = useRef();
  useEffect(() => {
    products().then(async data => {
      setProduct(data.data.products.filter(item => item.id == id));
      setSrc(data.data.products.filter(item => item.id == id)[0].thumbnail);
    })
  }, [id]);

  const dispatch = useDispatch();

  const addToCartObj = (productObj) => {
    dispatch(addToCart(productObj));
  }

  const removeFromCartObj = (productObj) => {
    dispatch(removeFromCart(productObj));
  }

  const getSrc = (src) => {
    setSrc(src);
  }

  return (
    <div className="s-pr">
      <Toast />
      <div className='product cl-df cl-as cl-jc cl-fw cl-brb'>
        {
          product.map((item, index) => {
            return <div key={index} className='product cl-df cl-as cl-jc cl-fw'>
              <figure>
                <img src={src} alt="" />
                <div className="images cl-df cl-fw">
                  {
                    item.images.map((s_item, index) => <img className='cl-t cl-brb ' key={index} src={s_item} alt='' onClick={() => getSrc(s_item)} />)
                  }
                </div>
              </figure>

              <div className="pr-details cl-crt cl-df cl-fd cl-as">
                <h2>{item.title}</h2>
                <p className='pr cl-pr'>Price: <em> ${item.price}</em> Instead Of <del>${((item.price) + (item.price * (item.discountPercentage / 100))).toFixed(2)}</del></p>
                <p className='ds'>
                  <span>
                    Rating : {item.rating}
                    <span className='cl-r'>
                      {
                        Array(Math.floor(item.rating)).fill({ star: 'https://cdn-icons-png.flaticon.com/512/2377/2377846.png' }).map((item, index) => {
                          return <img key={index} src={item.star} alt='' />
                        })
                      }
                    </span>
                  </span>
                  <span className='cl-df cl-ac'>
                    <span>Quantity: </span>
                    <input type="number" id='quantity' min={1} max={item.stock} autoFocus defaultValue={1} ref={quantity} />
                  </span>
                </p>
                <button className='cl-atc cl-bfr cl-3' onClick={() => addToCartObj({ itemId: item.id, itemQuantity: parseInt(quantity.current.value) , itemPrice: parseInt(item.price) })}>Add To Cart</button>
                <ul className='ds'>
                  <span>description:</span>
                  <li>{item.description}</li>
                </ul>
                <ul className='ds'>
                  <span>Category:</span>
                  <li>{item.category}</li>
                </ul>
                <ul className='ds'>
                  <span>Brand:</span>
                  <li>{item.brand}</li>
                </ul>
              </div>
            </div>
          })}
      </div>
    </div>
  )
}

export default Singleproduct