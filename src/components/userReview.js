import React, { useEffect, useState } from 'react';
import { reviews, users } from '../apis/axios/api';
import { Definition } from './definesection';
import { ThumbUpAltOutlined } from '@mui/icons-material';
function UserReview() {
    const [Reviews, setReviews] = useState([]);
    const [user, setUser] = useState([]);
    const [userReviews, setUserReviews] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        reviews().then(async data => {
           setReviews([...data.data.posts]);
        }).catch(err => alert(err))
        users().then(async data => {
            setUser([...data.data.users])
        }).catch(err => alert(err))
    }, [page])

    useEffect(() => {
        Reviews.map(async (item, index) => {
            if (index >= (6 * page) && index < (6 * (page + 1)))
                userReviews.push({
                    review: item,
                    user: user.filter(u_item => u_item.id == item.userId)[0]
                })
        })
        setUserReviews([...userReviews]);
    }, [Reviews])

    const reviewsShow = (number) => {
        if (number != page) {
            setUserReviews([]);
            setPage(parseInt(number));
        }
    }

    return (
        <div className='posts cl-df cl-lfc cl-jc cl-brb'>
            <Definition Definition={'Reviews'} />
            <ul className='cl-t reviews'>
                {
                    userReviews?.map((item, index) => {
                        return (
                            <li key={index} className='comment cl-df cl-as cl-fw'>
                                <div className="profile cl-df cl-ac">
                                    <img src={'https://cdn-icons-png.flaticon.com/512/2202/2202112.png'} alt="" />
                                    <div className="prf-cl">
                                        <span className='cl-db'>{item?.user?.firstName + ' ' + item?.user?.lastName}</span>
                                        <span className='cl-db cl-un'>@{item?.user?.username}</span>
                                    </div>
                                </div>
                                <p>
                                    {item?.review?.body}
                                </p>
                                <br />
                                <p className='dr-rct'>

                                    <span className='cl-db'>20-11-2020 11:18:00pm</span>
                                    <span className='cl-df cl-ac'><ThumbUpAltOutlined /> {item?.review?.reactions}</span>
                                </p>
                            </li>
                        );
                    })
                }
            </ul>
            <ul className='pagination'>
                {
                    Array((Reviews.length / 6)).fill().map((num, index) => index++)?.map((item, index) => {
                        return (
                            <li key={index} onClick={() => reviewsShow(item)} className={index == page ? 'cl-df cl-ac cl-jc active' : 'cl-df cl-ac cl-jc'}>
                                <span className='cl-df cl-sb cl-wfp cl-ac'>{item}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default UserReview;
