import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../apis/axios/api';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { ExpandMoreOutlined } from '@mui/icons-material';
function Links() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        categories().then(data => {
            setCategory([...data.data]);
        })
    }, [])
    return (
        <div className='links cl-df cl-ac cl-lfc cl-jc'>
            <span className='cl-df cl-ac cl-wfp cl-jc cl-cclfwp'>categories <ExpandMoreOutlined /></span>
            <ul className='cl-ctg cl-t'>  {
                category.map((item, index) => {
                    return (

                        <li key={index}>
                            <Link key={index} className='cl-l1 cl-db cl-sb cl-wfp' to={'/' + item}>
                                <span className='cl-df cl-sb cl-wfp cl-ac'>{item} <ArrowForwardIosOutlined /></span>
                            </Link>
                        </li>

                    );
                })
            }
            </ul>
        </div>
    );
}

export default Links;
