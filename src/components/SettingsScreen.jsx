
import "../App.css";
import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as contactAction from "../actions/contactAction";

const SettingsScreen = props => {


  console.log("propsinsettingsscreen",props)

  return (
    <div>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className="fixedHeightPaper">
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className="fixedHeightPaper">
          <Deposits />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
           <Orders /> 
        </Paper>
      </Grid>
    </Grid>
    <Box pt={4}></Box>
  </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SettingsScreen));
