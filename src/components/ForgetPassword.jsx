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

export class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }
    handlenextClick = (evt) =>{
        alert("login to email to reset password");
        this.props.history.push('/');

    }
    render() {


        return (
            <div className="form">
                <TextField
                    label="enter email id"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                />


                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                  onClick={this.handlenextClick}
                >Next</Button>


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
)(withRouter(ForgetPassword));