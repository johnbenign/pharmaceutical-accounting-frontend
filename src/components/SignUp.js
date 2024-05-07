import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserService from '../services/UserService';
import Header from "./Header";
import Footer from "./Footer";
import * as ReactBootStrap from 'react-bootstrap';
import { AiOutlineDeleteRow } from 'react-icons/ai';

export class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            userId:'',
            password:'', 
            phoneNumber:'',
            age:0,
            address:''
        }
    }

    createUser = (e) =>
    {
        e.preventDefault();

        console.log("history : " + this.props.history);

        //const browserHistory = this.props.history;

        //const {email, password} = this.state;

        let user ={
            email: this.state.email, 
            password: this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            age:this.state.age,
            address:this.state.address,
            phoneNumber:this.state.phoneNumber,
            userId:this.state.userId
        }

        UserService.createUser(user).then(res => {
            if(res.data.result)
            {
             console.log("user have been created");
                alert("User created successfully!!")

                //this.setState({});
                //browserHistory.push("/home", this.state);

                // ()=>
                // {
                //     res.render("index", {url: "http://localhost:3000/home"})
                // }
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

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">

                    <Header />

                    <form onSubmit={this.createUser} >
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" value={this.state.firstName} name='firstName' className="form-control" placeholder="Enter first name" onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" value={this.state.lastName} name='lastName' className="form-control" placeholder="Enter last name" onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" value={this.state.email} name='email' className="form-control" placeholder="Enter email" onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label>User Id</label>
                            <input type="text" value={this.state.userId} name='userId' className="form-control" placeholder="Enter User Id" onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={this.state.password} name='password' className="form-control" placeholder="Enter password" onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" value={this.state.phoneNumber} name='phoneNumber' className="form-control" placeholder="Enter Phone Number" onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <input type="number" value={this.state.age} name='age' className="form-control" placeholder="Enter age" onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" value={this.state.address} name='address' className="form-control" placeholder="Enter Address" onChange={this.onChangeHandler} />
                        </div>

                        {/* <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div> */}
                        <br />

                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                        <p className="forgot-password text-right">
                            Already have an account? <Link to="/login">click here to login</Link>
                        </p>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default SignUp;
