import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import UserService from '../services/UserService';

class Header extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        //this.logout.bind(this);
    }

    logout(e)
    {
        //e.preventDefault();
        
        UserService.logout().then(res =>{
            
        })

        return "/login";
    }
    
    render() {
        return (
            <div style={{marginBottom:"50px"}}>
                <header>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container"> 
            <Link className="navbar-brand" to={"/login"}>PHARMACEUTICAL ACCOUNTING</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" exact="true" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
                <li className="nav-item" style={{marginLeft:"600px"}}>
                    <Link className="nav-link" to={() =>this.logout}>Logout</Link>
                </li>
                </ul>
            </div>
        </div>
       </nav>
                </header>
            </div>
        )
    }
}

export default withRouter(Header)
