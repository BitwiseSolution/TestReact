import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../App.css";
import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";
import SelectDropdow from "./SelectDropdow";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as contactAction from "../actions/contactAction";
import Slider from "@material-ui/core/Slider";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CustomizeStepper from "./CustomizeStepper";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InitiateStep from "./InitiateStep";
import SpecificationStep from "./SpecificationStep";
import ResourcesStep from "./ResourcesStep";
import Budget from "./Budget";
import Preview from "./Preview";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function getSteps() {
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad"
  ];
}
const Add = props => {
  const history = useHistory();
  const classes = useStyles();

  let { path, url } = useRouteMatch();
  console.log("path", path);

  const cutPath = path.split("/");
  console.log("cut path", cutPath);
  const finalPath = cutPath[1];

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Route strict path={`${path}/initiate-step`} component={InitiateStep} />
      <Route
        strict
        path={`${path}/specific-step`}
        component={SpecificationStep}
      />
      <Route strict path={`${path}/resources-step`} component={ResourcesStep} />
      <Route strict path={`${path}/budget-step`} component={Budget} />
      <Route strict path={`${path}/preview-step`} component={Preview} />
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editData: edit => dispatch(contactAction.editData(edit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Add));
