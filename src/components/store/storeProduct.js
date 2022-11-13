import { inArray } from 'jquery';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { products } from '../../apis/axios/api';
import { toTop } from '../../subcomponents/carddesigninslider';

function StoreProduct(props) {
  const [product, setProduct] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(props.filteredCategories);

  useEffect(() => {
    products().then(data => {

      if (props.filteredCategories.length == 0) {
        setProduct([...data.data.products])
      } else {
        let arr = [];
        data.data.products.filter(item => {
          props.filteredCategories.map(p_item => {
            return item.category == p_item ? arr.push(item) : null
          })
        })
        setProduct([...arr])
      }
    })
  }, [props.filteredCategories])

  return (
    <div className="storeProduct cl-dg cl-mZero">
      {
        product.map((item, index) => {
          return <div key={index} className="productStore cl-df cl-fd cl-sb">
            <figure>
              <img src={item.thumbnail} alt="" />
            </figure>
            <div className="pre-details store-detail cl-fd cl-df cl-sa">
              <h2>{item.title}</h2>
              <p className='brand'>{item.brand}</p>
              <p className='describe'>{item.description}</p>
              <span className='price'>${item.price}</span>
              <Link onClick={() => toTop()} to={`/productdetails/${item.id}`} className='cl-t cl-5'> Shop Now </Link>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default StoreProduct