import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePwd = this.onChangePwd.bind(this);
        
        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUserName(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangePwd(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:5823/users/login/user/", user)
            .then(response => {
                console.log(response.data)
            })
            .catch((error) => {
                if (error.response){
                    console.log(error.response);
                }
                else if(error.request){
                    console.log(error.request);
                }
                else if(error.message){
                    console.log(error.message);
                }
            });    
    }

    render() {
        return (
            <div id="sign-in-container">
                <div id="sign-in-form">
                    <div><b>Hello!</b></div>
                    <div>Sign into Your account</div><br/>
                    <form onSubmit={this.onSubmit}>
                        <label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                            Username:</label>
                        <input className="form-input" type="text" name="username" autoComplete="off" required onChange={this.onChangeUserName}/><br/>
                        <label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                            Password:</label>
                        <input className="form-input" type="password" name="pwd" minLength="4" required onChange={this.onChangePwd}/><br/>
                        <input type="submit" value="Sign In"/>
                    </form>
                    <div id="route-to-register">
                        <Link to="/" id="back-button1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Link>
                        Dont have an account? <Link to="/register">Sign Up!</Link>
                    </div>
                </div>
                <div id="welcome-panel">
                    <br/>
                    <p><b>Welcome!</b><br/><br/>If you signed in and have an account, join our creative world!</p>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Link>
                </div>
            </div>
        );
    }
}