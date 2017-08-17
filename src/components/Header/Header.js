import React from 'react'
import PropTypes from 'prop-types'

//------- STYLING
import logo from '../../img/logo_alt.svg'
import './Header.css'

const Header = ({ msg }) => {
    return (
        <div className="header">
            <img src={logo} className="logo-header" alt="logo" />
            <h2>
                {msg}
            </h2>
        </div>
    )
}

Header.PropTypes = {
    msg: PropTypes.string.isRequired
}
export default Header