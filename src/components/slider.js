import React from 'react'
import Carddesigninslider from '../subcomponents/carddesigninslider'
function SliderDesign(props) {
    return (
        <>
            <Carddesigninslider image={props.item.thumbnail} describe={props.item.description} name={props.item.title} brand={props.item.brand} price={props.item.price} id={props.item.id} />
        </>
    )
}

export default SliderDesign
