import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import axios from 'axios';
import { Link } from '@material-ui/core';
// import { baseUrlWithSuffixHyphen_dev, baseUrlWithSuffixHyphen } from '../common';
import * as api from "../common"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import * as contactAction from "../actions/contactAction";


import SimpleReactValidator from 'simple-react-validator';


// here you can add multiple validations per field

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      checked: false,
    }
    this.validator = new SimpleReactValidator();
  }

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }



  onSubmitClickSignup = () => {
    alert("clciked");
    this.props.history.push('/signUp');
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
    this.validateEmail(this.state.email)
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
    // else if( this.validatePassword(this.state.password) === false ) {
    //   alert("correct regex password.");
    //   this.setState({
    //     error: true
    //   })
    // }
    else {
      this.onSubmitClick();
    }
  }

  onClickForgetPassword = () => {
    alert("clicked forget")
    this.props.history.push('/forgetPassword');
  }

  onSubmitClick = () => {

    alert("clicked")

    // let contact = {
    //   name: this.state.email
    // };
    // this.setState({
    //   name: ""
    // });
    // this.props.createContact(contact);

    console.log(this.state.email)
    console.log(this.state.password)
    this.props.history.push('/admin');
    // axios.post(`${api.baseUrlWithSuffixHyphen}signin`, {
    //   "email": this.state.email,
    //   "password": this.state.password,
    // }).then(res => {
    //   console.log("response", res);
    //   console.log(res.data);
    //   if (this.state.email == "site_admin") {
    //     this.props.history.push('/admin');
    //     localStorage.setItem('myValueInLocalStorage', 'dashboard');

    //   }
    //   else if (this.state.email == "plan_submitter") {
    //     this.props.history.push('/submitter');
    //     localStorage.setItem('myValueInLocalStorage', 'dashboard');
    //   }
    //   else if (this.state.email == "plan_approver") {
    //     this.props.history.push('/approver');
    //     localStorage.setItem('myValueInLocalStorage', 'dashboard');
    //   }
    // }).catch(error => {
    //   return error;
    // });

  }
  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    console.log("propslogin", this.props)
    console.log("this.state.checked", this.state.checked);

    return (
      <div >
        <h4>Login In</h4>
        <Avatar className="imageCenter">
          <LockOutlinedIcon />
        </Avatar>
        <div className="form">
          <TextField
            label="Email"
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
             {this.state.error === true ? <div>please write correct password</div> : null}

          <FormControlLabel
            control={<Checkbox value="remember"
              onChange={this.handleCheck}
              color="primary" />}
            label="Remember me"
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            onClick={this.onValidate}
          >LogIn</Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" onClick={this.onClickForgetPassword}
                variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" onClick={this.onSubmitClickSignup} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>

          <Footer />

        </div>

        {
          this.state.error === true ?
            <div className="login-error">
              <Alert severity="error">Invalid email or password</Alert>
            </div>
            : null}

      </div >
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data,
    contacts: state.contacts,
    // addReducer: state.addReducer
  };
};

const mapDispatchToProps = dispatch => {
    return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    // addReducer: addReducers => dispatch(contactAction.addReducer(addReducers)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));