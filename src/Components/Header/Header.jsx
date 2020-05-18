import React, { Component } from 'react'
import logo from '../../Assets/Images/logo.png'
class Header extends Component {
    render() {
        return (
            <div>
                <img  className="logo" src={logo} alt="logo" width="35%" height="10%"/>
            </div>
        )
    }
}

export default Header
