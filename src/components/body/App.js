import React from 'react'
import Card from './card'
const App = ({className, alllData}) => {
    return (
        <div className={className}>
            {
                alllData.map(element=><Card key={element.phoneName} alllData={element}/>)
            }
        </div>
    )
}

export default App
