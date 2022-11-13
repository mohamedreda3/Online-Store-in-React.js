import React from 'react'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
function Prevarrow(props) {
    const { className, style, onClick } = props;
    return (
        <span className={'cl-6 ' + className} style={{ ...style, display: "block", }} onClick={onClick}>
            <KeyboardBackspaceOutlinedIcon />
        </span>
    )
}

export default Prevarrow
