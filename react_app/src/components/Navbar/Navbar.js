import React,  {Component}  from 'react';

import './Navbar.css'

class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }


    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="Navbar-logo"><span className="navbar-logo-text">Segwaste</span><i className='fab fa-react'></i></h1>
            </nav>
        )

    }
}

export default Navbar