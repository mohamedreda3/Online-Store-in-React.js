import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FooterB from './footer-b';
function Footer() {
    return (
        <div className="ft">
            <div className="nwSlt">
                <h1>SIGN UP FOR OUR NEWSLETTER</h1>
                <p>A chance to win a $200 gift card monthly and get 10% off your first order, exclusive and early access
                    to sales and limited edition releases.</p>
                <form className='cl-df cl-sb cl-ac'>
                    <input type="text" name="newsletter" id="newsletter" autoFocus placeholder='EMAIL' />
                    <button className='cl-t'>
                        <ArrowForwardIcon />
                    </button>
                </form>
            </div>
            <FooterB />
        </div>
    );
}

export default Footer;
