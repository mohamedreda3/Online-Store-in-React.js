import React, { useState, useEffect, useMemo } from 'react'
import StoreProduct from './storeProduct'
import { categories } from '../../apis/axios/api'
import InputBx from './inputbx'
import { CloseOutlined, FilterAltOutlined } from '@mui/icons-material';
function Filter() {
  const [category, setCategory] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  useEffect(() => {
    categories().then(data => {
      setCategory([...data.data]);
    });
  }, [])


  const handleFiltered = (value, checked) => {
    if (checked) {
      filteredCategories.push(value);
      setFilteredCategories([...filteredCategories]);
    } else {
      removeFilter(value);
    }
  }

  const removeFilter = (value) => {
    setFilteredCategories(filteredCategories.filter(item => item != value));
  }

  return (
    <>
      <div className="filter-box cl-df cl-fd cl-js cl-as">
        <h2 className='cl-df cl-ac cl-jc cl-ft'> <FilterAltOutlined /> Filter </h2>
        <div className="categoreFilter cl-df cl-fd">
          <h2 className='cl-df cl-ac cl-jc cl-ctf'> Categories </h2>
          {
            category.map((item, index) => {
              return <InputBx key={index} value={item} handleFiltered={handleFiltered} />
            })
          }
        </div>
      </div>
      <div className="filters cl-df cl-fd">
        <div className='cl-dg filteration cl-ac'>
          <p> Filters </p>
          <div className="filtersCon cl-df cl-ac">
            {
              filteredCategories.map((item, index) => {
                return <span key={index} className="cl-df cl-ac">
                  <span>{item}</span>
                  <span onClick={() => removeFilter(item)}> <CloseOutlined className="cl-df cl-ac" /> </span>
                </span>
              })
            }
          </div>
        </div>
        <StoreProduct filteredCategories={filteredCategories} />
      </div>
    </>
  )
}

export default Filter