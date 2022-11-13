import React, { useEffect, useState } from 'react'
import { categories } from '../apis/axios/api'
import LogoC from '../components/nav/logoC'
import { routes } from '../data/arrs/routes'
function FooterB() {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        categories().then(
            data => {
                data.data.map((item, index) => {
                    if (index < Math.min(...[routes.service.length, routes.contact.length])) {
                        departments.push(data.data[Math.floor(Math.random() * data.data.length)]);
                    }
                })
                setDepartments([...departments]);
            }
        );
    }, []);
    return (
        <footer>
            <div className="logo cl-t head cl-df cl-ac">
                <a href="/" className="cl-t cl-5">Commert</a>
                {
                    routes.contact.map((item, index) => {
                        if (index < Math.min(...[routes.service.length, routes.contact.length])) {
                            return <a key={index} href={`/store`} className="cl-t"><img src={item.icon} alt={item.link} /></a>
                        }
                    })
                }
            </div>
            <div className="cl-df cl-as cl-fw cl-js foot">
                <ul>
                    <li><LogoC name={'Contact Us'} /></li>
                    {
                        routes.contact.map((item, index) => {
                            return <li key={index} className="cl-t"><a href={`${item.href}`} className="cl-t">{item.link}</a></li>
                        })
                    }
                </ul>

                <ul>
                    <li><LogoC name={'Our-Services'} /></li>
                    {
                        routes.service.map((item, index) => {
                            if (index < Math.min(...[routes.service.length, routes.contact.length])) {
                                return <li key={index} className="cl-t"><a href={`${item.href}`} className="cl-t">{item.link}</a></li>
                            }
                        })
                    }
                </ul>
                <ul>
                    <li>
                        <LogoC name={'Categories'} />
                    </li>
                    {
                        departments.map((item, index) => {
                            if (index < Math.min(...[routes.service.length, routes.contact.length])) {
                                return <li key={index} className="cl-t"><a href={`/store`} className="cl-t">{item}</a></li>
                            }
                        })
                    }
                </ul>
            </div>
            <p>Made With Love by <a href="#">Mohammed Reda</a> </p>
        </footer>
    )
}

export default FooterB
