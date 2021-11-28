import React from 'react'
import StyledApp from '../App.style'
const BigCard = ({className,cardState ,setCardState, alllData}) => {
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
        
        <div   className = {className}>
            {
            cardState?(
                <>
                <button id={witchColor} className="but2"autoFocus onBlur={()=>setCardState(false)}>
                <div className="f">
                <img src={alllData.img} alt="img" />
                <h2>{alllData.phoneName}</h2>
                <h3>{alllData.brand}</h3>
                </div>
                <div className="s">
                    <div>
                <p>OS:</p>
                <p>{alllData.os}</p>
                </div>
                <div>
                <p>Screen Size:</p>
                <p>{alllData.screenSize}</p>
                </div>
                <div>
                <p>Processor:</p>
                <p>{alllData.processor}</p>
                </div>
                <div>
                <p>Price:</p>
                <p>{alllData.price}</p>
                </div>
                </div>
            </button>
            <div className="outside">asdafds</div>
            
            </>
                )
            :
            <StyledApp cardState={cardState} setCardState={setCardState} />
            
            }
        </div>
    )
}

export default BigCard
