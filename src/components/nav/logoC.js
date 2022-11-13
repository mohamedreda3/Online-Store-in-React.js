import React from 'react'
import { Link } from 'react-router-dom'

function LogoC(props) {
    return (
        <Link to="/" className='cl-t cl-5'>{props.name}</Link>
    )
}

export default LogoC