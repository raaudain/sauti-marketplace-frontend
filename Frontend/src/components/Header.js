import React from 'react'
import "../css/App.css"

const Header = () => {

    return(
        <div className="header">
            <div className="left">
                <p>Sauti.</p>
            </div>
            <div className="right">
                <a href="">Register</a>
                <a href="">Login</a>
                <a href="">About</a>
            </div>
        </div>
    )
}

export default Header;