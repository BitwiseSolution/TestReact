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


import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import StepperSample from "./StepperSample"

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
const InitiateStep = props => {
  const history = useHistory();
  const classes = useStyles();

  const [state, setState] = React.useState({
    firstName: props.contacts[0].firstName,
    lastName: props.contacts[0].lastName,
    name: props.contacts[0].name,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleChangeSelect = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
    console.log(event.target.value);
    console.log(name);
    console.log(state);
  };

  function handleSubmit(e) {
    e.preventDefault();
    let contact = {
      firstName: state.firstName,
      lastName: state.lastName,
      name: state.name,
    };
    console.log("contactsssss in initaite", contact)



    // props.editData(contact);
    alert("clciked next");
    // setActiveStep(prevActiveStep => prevActiveStep + 1);




    // props.updateStep(activeStep);

    history.push(`/${finalPath}/specific-step`);

    // props.history.push({
    //   state: {
    //     firstName: state.firstName,
    //     lastName: state.lastName,
    //     name: state.name
    //   }
    // });




  }



  console.log("object", props);
  let { path, url } = useRouteMatch();
  console.log("path", path);

  const cutPath = path.split("/");
  console.log("cut path", cutPath);
  const finalPath = cutPath[1];
  console.log("finalPath", finalPath);

  // console.log("valueininitiatestep",props.contactSteps)


  // console.log("valueininitiatestep",props.contactSteps['stepperValue'])

  // const [activeStep, setActiveStep] = React.useState(0);
  //const steps = getSteps();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (


    <div className="grid-container">
      {/* <div className={classes.root}>
       <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>   */}
      <StepperSample />
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={3}>
              <Grid item md={6}>
                <TextField
                  type="text"
                  name="firstName"
                  label="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={6}>

                <FormControl
                  variant="outlined"
                  className={classes.formControl + " customform"}
                >
                  <InputLabel
                    ref={inputLabel}
                    id="demo-simple-select-outlined-label"
                  >
                    costs
                </InputLabel>
                  <Select
                    labelid="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={state.name}
                    onChange={handleChangeSelect("name")}
                    labelWidth={labelWidth}
                  >
                    {props.data.dropDownlist.map(user => {
                      return (
                        <MenuItem value={user.value} key={user.key}>
                          {user.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <TextField
                  type="text"
                  name="lastName"
                  label="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>


            <div className="action-btns">
              <Button
                type="submit"
                variant="contained"
                color="primary">
                Next
            </Button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
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

    // updateStep: updatestep =>dispatch(contactAction.updateStep(updatestep)),

    // incrementStepper: dispatch(contactAction.incrementStepper()),
    setStepperValue: dispatch(contactAction.setStepperValue(0)),


  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InitiateStep));
