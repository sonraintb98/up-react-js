import React from "react";
import './LoginPage.scss';
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = (event) => {
        // let history = useHistory();
        event.preventDefault()
        if (!this.state.username || !this.state.password) {
            alert('Missing required params')
            return;
        } else {
            if (this.state.username === 'admin' && this.state.password === '123') {
                // alert("oke")
                this.props.history.push('/admin');
                window.location.reload();
            } else if (this.state.username === 'employee' && this.state.password === '123') {
                this.props.history.push('/employee');
                window.location.reload();
            } else if (this.state.username === 'hr' && this.state.password === '123') {
                this.props.history.push('/hr');
                window.location.reload();
            } else {
                alert("fail")
            }
        }
        this.setState({
            username: '',
            password: ''
        })
    }
    handleForgotPassword = () => {
        alert("This is click Forget Password");
    }
    render() {
        return (
            <div className="allLogin">
                <div className="leftLogin">
                    <div className="">
                        <h1>SonNH</h1>
                        <h3>Sản phẩm thuộc sở hữu của Nguyễn Hoài Sơn</h3>
                    </div>
                </div>
                <div className="rightLogin">
                    <div className="contentLogin">
                        <ul>
                            <li>
                                <input
                                    value={this.state.username}
                                    onChange={(event) => { this.handleChangeUsername(event) }}
                                    type="text" placeholder="Username..." />
                            </li>
                            <li>
                                <input
                                    value={this.state.password}
                                    onChange={(event) => { this.handleChangePassword(event) }}
                                    type="text" placeholder="Password..." />
                            </li>
                            <li>
                                <button onClick={(event) => this.handleLogin(event)}>
                                    Login
                                </button>
                            </li>
                            <li>
                                <p onClick={() => this.handleForgotPassword()}>
                                    Forgot Password?
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);