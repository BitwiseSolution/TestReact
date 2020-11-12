import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../App.css";
import * as contactAction from "../actions/contactAction";
import { Button } from "@material-ui/core";
import DashboardTable from "./DashboardTable";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import TextField from "@material-ui/core/TextField";

export class DashboardFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      birthYear: "",
      birthCity: "",
      popUp: true
    };
  }

  handleChange = evt => {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  };

  addRecords = evt => {
    alert("clicked to add record");

    this.props.addRecords({
      name: this.state.name,
      surname: this.state.surname,
      birthYear: this.state.birthYear,
      birthCity: this.state.birthCity
    });

    this.setState({
      popUp: false
    });
  };

  render() {
    console.log("propsss", this.props);
    return this.state.popUp === true ? (
      <div className="form">
        <TextField
          label="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />

        <TextField
          label="surname"
          type="surname"
          name="surname"
          value={this.state.surname}
          onChange={this.handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />

        <TextField
          label="birthYear"
          type="birthYear"
          name="birthYear"
          value={this.state.birthYear}
          onChange={this.handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />

        <TextField
          label="birthCity"
          type="birthCity"
          name="birthCity"
          value={this.state.birthCity}
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
          onClick={this.addRecords}
        >
          Add records
        </Button>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    // contacts: state.contacts,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRecords: index => dispatch(contactAction.addRecords(index))
    // createContact: contact => dispatch(contactAction.createContact(contact)),
    // deleteContact: index => dispatch(contactAction.deleteContact(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DashboardFormModal));
