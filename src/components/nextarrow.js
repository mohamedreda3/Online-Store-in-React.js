import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

function Nextarrow(props) {
    const { className, style, onClick } = props;
    return (
        <span className={'cl-6 ' + className} style={{ ...style, display: "block", }} onClick={onClick}>
            <EastOutlinedIcon />
        </span>
    )
}

export default Nextarrow
