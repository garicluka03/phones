import React from 'react'
import StyledApp from './App.style'
import {  Routes, Route} from 'react-router-dom'
const Body = ({alllData}) => {
    const forIos =[]
    const forIosFun =()=>{
        for(let i=0;i<alllData.length;i++){
            if(alllData[i].os ==="ios"){
                forIos.push(alllData[i])
            }
        }
    }
    forIosFun()
    const forAndroid =[]
    const forAndroidFun =()=>{
        for(let i=0;i<alllData.length;i++){
            if(alllData[i].os ==="android"){
                forAndroid.push(alllData[i])
            }
        }
    }
    //<StyledApp alllData={forAndroid}/>
    forAndroidFun()
    return (
        <div>
            
                <Routes>
                    <Route path="/phones/" element={<StyledApp alllData={alllData}/>}/> 
                    <Route path="/phones/android" element={<StyledApp alllData={forAndroid}/>}/> 
                    <Route path="/phones/ios" element={<StyledApp alllData={forIos}/>}/> 
                </Routes>
              
        </div>
    )
}

export default Body