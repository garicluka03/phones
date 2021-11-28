import React from 'react'
import SBigCard from './bigcard.style'
const App = ({className, cardState, setCardState, alllData}) => {
    let witchColor=""
    if(alllData.brand==="SAMSUNG"){
        witchColor="blueC"
    }
    else if(alllData.brand==="APPLE"){
        witchColor="redC"
    }
    else if(alllData.brand==="GOOGLE"){
        witchColor="yellowC"
    }
    else if(alllData.brand==="ONEPLUS"){
        witchColor="greenC"
    }
    else if(alllData.brand==="HUAWEI"){
        witchColor="pinkC"
    }
    else if(alllData.brand==="XIOMI"){
        witchColor="grayC"
    }
    else if(alllData.brand==="REALME"){
        witchColor="blue2C"
    }
    else if(alllData.brand==="MOTOROLA"){
        witchColor="orangeC"
    }
    else if(alllData.brand==="POCO"){
        witchColor="red2C"
    }
    else if(alllData.brand==="HONOR"){
        witchColor="purpleC"
    }
    return (
        <div className={className}>
            <button id={witchColor} onFocus={()=>setCardState(true)} className="but1">
            <img src={alllData.img} alt="img"/>
            
            <h2>{alllData.phoneName}</h2>
            <h3>{alllData.brand}</h3>
            </button>
            {cardState?
            <SBigCard alllData={alllData} cardState={cardState} setCardState={setCardState}/>
            :false
         }
        </div>
    )
}

export default App
