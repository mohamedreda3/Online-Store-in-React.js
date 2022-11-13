import React from 'react'

function InputBx(props) {
    return (
        <div className='bxInpt cl-df cl-ac'>
            <input type="checkbox" name="category" id={props.value} value={props.value}  onChange={(e) => props.handleFiltered(e.currentTarget.value, e.currentTarget.checked)}/>
            <label htmlFor={props.value}>{props.value}</label>
        </div>
    )
}

export default InputBx