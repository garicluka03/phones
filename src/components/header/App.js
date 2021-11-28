import React from 'react'
import { Link } from 'react-router-dom'
const App = ({className}) => {
    return (
        <div className={className}>
            <div className="logo">
            <h3>Phones </h3>
            <div className ="logoL"></div>
            </div>


            
                
                <Link className="link" to="/">
                    all
                </Link>
                <Link className="link" to="/android">
                    android
                </Link>
                <Link className="link" to="/ios">
                    ios
                </Link>
                
            
        </div>
    )
}

export default App
