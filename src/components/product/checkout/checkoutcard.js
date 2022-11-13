import React from 'react'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux';
import { Definition } from '../../definesection';
function CheckoutCard() {
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const formik = useFormik({});
  return (
    <>
      <form action="#" className="cl-checkForm cl-df cl-fd">
        <div className="person fields_com">
          <h1>person Info</h1>
          <div className='cl-P_fields cl-df cl-fw'>
            <input type="text" name='name' required placeholder='Name' />
            <input type="text" name='email' required placeholder='Email' />
            <input type="text" name="address" required placeholder='Address' />
            <input type="text" name="p_country" required placeholder='Person Country' />
            <input type="text" name="postal" required placeholder='Postal' />
          </div>
        </div>

        <div className="payment fields_com">
          <h1>Payment Info</h1>
          <div className="payments cl-df cl-fw">
            <div className="input_chckbx_field cl-df cl-fw cl-ac">
              <input type="radio" name='paymentMethod' id='mastercard' />
              <label htmlFor="mastercard"><img src=" https://telegra.ph/file/a1e65295e215c81766db5.png " alt="" /></label>
            </div>
            <div className="input_chckbx_field cl-df cl-fw cl-ac">
              <input type="radio" name='paymentMethod' id='visa' />
              <label htmlFor="visa"><img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="" /></label>
            </div>
            <div className="input_chckbx_field cl-df cl-fw cl-ac">
              <input type="radio" name='paymentMethod' id='Paypal' />
              <label htmlFor="Paypal"><img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="" /></label>
            </div>
          </div>
          <div className='cl-P_fields cl-df cl-fw'>
            <input type="text" name='billingname' required placeholder='Billing Name' />
            <input type="text" name="address" required placeholder='Address' />
            <input type="text" name="b_city" required placeholder='Billing City' />
            <input type="text" name="zip" required placeholder='Zip' />
            <input type="text" name="postal" required placeholder='Card Number ( xxxx-xxxx-xxxx-xxxx ) ' maxLength={16} pattern="[0-9]" />
          </div>
        </div>
        <div className="totalprice">TotalPrice: ${totalPrice}</div>
        <button className='cl-pb cl-df cl-ac cl-jc'>Pay & Buy</button>
      </form>
      <Definition Definition={"Your Orders"}/>
    </>
  )
}

export default CheckoutCard