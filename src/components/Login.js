import React, { Component } from "react";
import UserService from '../services/UserService';
import Header from "./Header";
import Footer from "./Footer";
// import { BrowserRouter as Router, Redirect } from "react-router-dom";
// import Home from './Home';
// import ReactDOM from "react-dom";

class Login extends Component
{

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }

        this.callLogin = this.callLogin.bind(this);
    }

    componentDidMount()
    {
        console.log(" --- component did mounted --- ");

        this.setState({});
    }

    callLogin = (e) =>
    {
        e.preventDefault();

        console.log("history : " + this.props.history);

        //const browserHistory = this.props.history;

        //const {email, password} = this.state;

        let credential ={email: this.state.email, password: this.state.password}

        UserService.login(credential).then(res => {
            try
            {
                if(res.data.result)
            {
                console.log("Successful login with email: " + credential.email + " and password : " + credential.password + " result is : " + JSON.stringify(res.data.result))   

                this.props.history.push("/inventory", this.state);
            
            }
            else
            {
                throw new Error(res.data.errorMsg);
            }
            }
            catch(error)
            {
                alert("error: " + res.data.errorMsg);
            }



        }).catch(error => {
            console.log("error: " + error)
        })
    }



    onChangeHandler = event =>
    {
        console.log(" --- event : " + [event.target.name] + ": " + event.target.value);

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // onPasswordChange = (event) =>
    // {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    render() {
        return (//
            <div className="auth-wrapper">
                <div className="auth-inner">

                <Header/>

                <form onSubmit={this.callLogin} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={this.state.email} name='email' className="form-control" placeholder="Enter email" onChange={this.onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password} name='password' className="form-control" placeholder="Enter password" onChange={this.onChangeHandler}/>
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
                <br/>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>

            
            </div>
            {/* <Footer/> */}
            </div>
        );
    }
}


export default Login