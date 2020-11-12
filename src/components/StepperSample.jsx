import React from 'react'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as contactAction from "../actions/contactAction";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

const StepperSample = props => {

  // export default function StepperSample() {
  const classes = useStyles();

  console.log("steppervalueprops",props.contactSteps['stepperValue'])

  const [activeStep, ] = React.useState(props.contactSteps['stepperValue']);
  // const { step } = createIdeaStore;



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
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
    data: state.data,
    contactSteps: state.contactSteps,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {

     //incrementStepper : dispatch(contactAction.incrementStepper()),
     //decrementStepper: dispatch(contactAction.decrementStepper()),


    // editData: edit =>dispatch(contactAction.editData(edit)),

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StepperSample));
