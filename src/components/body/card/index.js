import React from 'react'
import StyledApp from './App.style'
import { useState } from 'react'
const Card = ({alllData}) => {

    const [cardState, setCardState]=useState(false)
    return (
        <div>
            <StyledApp alllData = {alllData} cardState={cardState} setCardState={setCardState}/>
        </div>
    )
}

export default Card
