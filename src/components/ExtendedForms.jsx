import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Grid } from "@material-ui/core";
import SelectDropdow from "./SelectDropdow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PaginationWithTable from "./PaginationWithTable";
import "../App.css";
import DatePicker from "./DatePicker";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const ExtendedForms = props => {
  console.log("data in table grid", props);

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <DatePicker />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    // contacts: state.contacts,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // createContact: contact => dispatch(contactAction.createContact(contact)),
    // deleteContact: index => dispatch(contactAction.deleteContact(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExtendedForms));
