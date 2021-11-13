import React from 'react'
import PropTypes from 'prop-types'

// import { Link } from 'react-router-dom'


export default function Navbar(props) {

  


    return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  {/* <Link className="navbar-brand" to="/">Text Utils</Link> */}
  <a className="navbar-brand" href="#home">Text Utils</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li> */}
      {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li> */}
      
      
      
      

    </ul>
    {/* <div className={`custom-control custom-switch text-${props.mode==="light"?'dark':'light'}`}>
        <input onClick = {props.handleMode} type="checkbox" className="custom-control-input" id="customSwitches"/>
        <label className="custom-control-label" htmlFor="customSwitches">Enable Dark Mode</label>
      </div> */}

      <div type = 'button' onClick = {props.handleRedMode} className="dot-switch-red"></div>
      <div  type = 'button' onClick = {props.handleDarkMode} className="dot-switch-dark"></div>
      <div  type = 'button' onClick = {props.handleLightMode} className="dot-switch-light"></div>

    
  </div>
</nav>
    )
}

Navbar.propTypes= {
    title:  PropTypes.string.isRequired,
    aboutText:  PropTypes.string
}
// Navbar.propTypes= {
//     title:  PropTypes.string.isRequired
//   }
Navbar.defaultProps = {
  title:"Title here",
  aboutText:"About here"
}