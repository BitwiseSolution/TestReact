import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../App.css";
import { BrowserRouter as Router, useHistory,useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as contactAction from "../actions/contactAction";
import StepperSample from "./StepperSample";


 const SpecificationStep = props => {
  const history = useHistory();

  const [state, setState] = React.useState({
    summary:  props.contacts[0].summary,
    objectives: props.contacts[0].objectives,
    problem: props.contacts[0].problem,
    vision: props.contacts[0].vision,
    documents:props.contacts[0].documents,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function next(e) {
    e.preventDefault();
    let contact = {
      summary: state.summary,
      objectives: state.objectives,
      problem: state.problem,
      vision:state.vision,
      documents:state.documents
    };

    // props.editData(contact);
    // setActiveStep(prevActiveStep => prevActiveStep + 1);

    history.push(`/${finalPath}/resources-step`);

    props.history.push({
      state: {
        // fisrtName:props.location.state.firstName,
        // lastName:props.location.state.lastName,
        // name:props.location.state.name,
        // summary: state.summary,
        // objectives: state.objectives,
        // problem: state.problem,
        // vision: state.vision,
        // documents: state.documents
      }
    });

  }



  const backClick = event => {
    alert("clciked back");
    history.push(`/${finalPath}/initiate-step`);

  };

  let { path, url } = useRouteMatch();
  const cutPath= path.split("/")
  const finalPath = cutPath[1];


  console.log("propsinspecificscreen", props);


  return (
    <div className="grid-container">
       <StepperSample/> 
      <Card>
        <CardContent>
        {/* <form onSubmit={handleSubmit}> */}
          <Grid container spacing={3}>
            <Grid item md={6}>
              <form noValidate autoComplete="off">
                <TextField
                  type="text"
                  id="standard-basic"
                  name="summary"
                  label="summary"
                  value={state.summary}
                  onChange={handleChange}
                  className="customwidth"
                />
              </form>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <form noValidate autoComplete="off">
                <TextField
                  type="text"
                  name="objectives"
                  label="objectives"
                  value={state.objectives}
                  onChange={handleChange}
                  className="customwidth"
                />
              </form>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                type="text"
                name="problem"
                label="problems to be resolved"
                value={state.problem}
                onChange={handleChange}
                className="customwidth"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                type="text"
                name="vision"
                label="vision "
                value={state.vision}
                onChange={handleChange}
                className="customwidth"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                type="file"
                name="documents"
                label="Documents"
                //value={state.documents}
                onChange={handleChange}
                className="customwidth"             
              />
            </Grid>
          </Grid>
          <div className="action-btns">
            <Button onClick={backClick} variant="contained">
              Back
            </Button>
            <Button 
           // type="submit"
           onClick={next} 
            variant="contained" 
            color="primary">
              Next
            </Button>
          </div>
          {/* </form> */}
        </CardContent>
      </Card>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
     contacts: state.contacts,
     contactSteps: state.contactSteps,


  };
};

const mapDispatchToProps = dispatch => {
  return {
      // editData: edit =>dispatch(contactAction.editData(edit)),
      setStepperValue: dispatch(contactAction.setStepperValue(1)),

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SpecificationStep));
