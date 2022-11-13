import React from 'react'
import { Link } from 'react-router-dom';
function ProceedToCheckOut(props) {
    return (
        <div className="cl-chkot cl-df cl-fd cl-ac">
            <span className="cl-cttl">Total Price: ${props.totalPrice}</span>
            <Link to='/checkout'>Proceed To Check Out</Link>
        </div>
    )
}

export default ProceedToCheckOut