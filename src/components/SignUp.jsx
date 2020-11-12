import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import axios from 'axios';
import { Divider } from '@material-ui/core';
import * as api from "../common"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SimpleReactValidator from 'simple-react-validator';

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error:false,
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            checked: false,
        }
        this.validator = new SimpleReactValidator();
    }
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    
      validatePassword = (password) => {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return strongRegex.test(String(password).toLowerCase());
      }
    onValidate = () => {
        console.log("wqqqqqqwwwww", this.validateEmail(this.state.email));
        console.log("password", this.validatePassword(this.state.password));
      
        alert("clicked validate");
        if (this.state.email == null || this.state.password == "" || this.state.checked == false) {
          alert("email and password can't be blank");
          this.setState({
            error: true
          })
        }
        else if (this.state.password.length < 6) {
          alert("Password must be at least 6 characters long.");
          this.setState({
            error: true
          })
        }
        else if( this.validateEmail(this.state.email) === false ) {
          alert("correct regex.");
          this.setState({
            error: true
          })
        }
        else if( this.validatePassword(this.state.password) === false ) {
          alert("correct regex password.");
          this.setState({
            error: true
          })
        }
        else if( this.state.password === this.state.confirmpassword ) {
            alert("correct password...pass mismatch");
            this.setState({
                error: true
              })
          }
        else {
          this.onSubmitClickSignup();
        }
      }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }
    handleChangeChecked = evt => {
        const value = evt.target.checked;
        this.setState({
            checked: value
        });
    };
    onSubmitClickSignup = () => {
        alert("clciked");

        console.log(this.state.username)
        console.log(this.state.password)
        console.log(this.state.email)
        console.log(this.state.confirmpassword)

        console.log(this.state.checked)


    }

    render() {


        return (
            <div >
                <h4>Create Account</h4>
                <div className="form">
                    <TextField
                        label="User Name"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                    />
                        {this.state.error === true ? <div>please write correct email format</div> : null}
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                    />
                        {this.state.error === true ? <div>please write correct email format</div> : null}
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                    />
                        {this.state.error === true ? <div>please write correct email format</div> : null}
                    <TextField
                        label="Confirm Password"
                        type="password"
                        name="confirmpassword"
                        value={this.state.confirmpassword}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                    />
                        {this.state.error === true ? <div>please write correct email format</div> : null}
                    <FormControlLabel
                        control={<Checkbox checked={this.state.checked}
                            onChange={this.handleChangeChecked} value="remember" color="primary" />}
                        label="I agree to the terms and conditions"
                    />


                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={this.onValidate}
                    >SignUp</Button>


                </div>



            </div>
        );
    }
};
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = () => {
    return {
        // addReducer: addReducers => dispatch(contactAction.addReducer(addReducers)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SignUp));