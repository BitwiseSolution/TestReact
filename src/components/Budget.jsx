import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../App.css";
import {
  BrowserRouter as Router,
  useHistory,
  useRouteMatch
} from "react-router-dom";
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
import StepperSample from "./StepperSample";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Budget = props => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    projectedImpact: 0,
    estimatedBudget: 0,
    projectedNvp: 0,
    projectsImpact: 0,
    projectSpend: 0,
    slider1: 0,
    slider2: 40,
    slider3: 70,
    age: 0,
    age1: 0,
    age2: 0,
    age3:0,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function handleSliderChange(evt, newValue, name) {
    console.log(name);
    setState({
      ...state,
      [name]: newValue
    });
    // let contact = {
    //   slider1: state.slider1,
    //   slider2: state.slider2,
    //   slider3: state.slider3,

    // };
    // console.log("contactsssss in SliderComponent", contact);
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

  //   function handleChangeSelect(evt, newValue, name) {
  //  // const value = evt.target.value;
  //     console.log(name);
  //     setState({
  //       ...state,
  //       [name]: evt.target.value
  //     });

  // setValue(event.target.value);
  // let contact = {
  //   dropDown1: state.dropdown1,
  // };
  // console.log("contact",contact);

  //  props.editData(contact);

  //};

  // function handleSelectChange(select,value){
  //   setState({[select] : value})
  // }

  const next = event => {
    console.log("statee", state);
    let contact = {
      projectedImpact: state.projectedImpact,
      estimatedBudget: state.estimatedBudget,
      projectedNvp: state.projectedNvp,
      projectsImpact: state.projectsImpact,
      projectSpend: state.projectSpend,
      slider1: state.slider1,
      slider2: state.slider2,
      slider3: state.slider3,
      age: state.age,
      age1: state.age1,
      age2: state.age2,
      age3: state.age3,
    };
    console.log("contactsssss in select", contact);
    props.editData(contact);
    alert("clciked next");
    history.push(`/${finalPath}/preview-step`);
  };

  const backClick = event => {
    alert("clciked back");
    history.push(`/${finalPath}/resources-step`);
  };

  

  let { path, url } = useRouteMatch();
  const cutPath = path.split("/");
  const finalPath = cutPath[1];

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  // console.log("props in budget", props);
  return (
    <div className="grid-container">
      <h1>budgett</h1>
      <StepperSample/>
      <Card>
        <CardContent>
          <h8>Projected Cost</h8>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <form noValidate autoComplete="off">
                <TextField
                  type="number"
                  name="projectedImpact"
                  label="projectedImpact"
                  value={state.projectedImpact}
                  onChange={handleChange}
                />
              </form>
            </Grid>
            <Grid item md={3}>
              <form noValidate autoComplete="off">
                <TextField
                  type="number"
                  name="estimatedBudget"
                  label="estimatedBudget"
                  value={state.estimatedBudget}
                  onChange={handleChange}
                />
              </form>
            </Grid>
            <Grid item md={3}>
              <form noValidate autoComplete="off">
                <TextField
                  type="number"
                  name="projectedNvp"
                  label="projectedNvp"
                  value={state.projectedNvp}
                  onChange={handleChange}
                />
              </form>
            </Grid>
            <Grid item md={3}>
              <label>PROJECTED IRR(%)</label>
              <Slider
                defaultValue={state.slider1}
                onChange={(event, newValue) =>
                  handleSliderChange(event, newValue, "slider1")
                }
                aria-labelledby="input-slider"
                valueLabelDisplay="auto"
              />
            </Grid>
          </Grid>
          <hr></hr>
          <h8>Projected cost</h8>
          <Grid container spacing={3}>
            <Grid item md={3}>
              {/* <SelectDropdow
                dropDownlist={props.data.dropDownlist}
                value="cost"
              />  */}
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
                  value={state.age}
                  onChange={handleChangeSelect("age")}
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
            <Grid item md={3}>
              {/* <SelectDropdow dropDownlist={data2} value="budget" /> */}
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
                  value={state.age1}
                  onChange={handleChangeSelect("age1")}
                  labelWidth={labelWidth}
                >
                  {props.data.dropDownlist4.map(user => {
                    return (
                      <MenuItem value={user.value} key={user.key}>
                        {user.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={3}>
              {/* <SelectDropdow dropDownlist={data2} value="nvp" /> */}
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
                  value={state.age2}
                  onChange={handleChangeSelect("age2")}
                  labelWidth={labelWidth}
                >
                  {props.data.dropDownlist5.map(user => {
                    return (
                      <MenuItem value={user.value} key={user.key}>
                        {user.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={3}>
              <label>PROJECTED IRR(%)</label>

              {/* <SliderComponent value={40} /> */}
              <Slider
                defaultValue={state.slider2}
                onChange={(event, newValue) =>
                  handleSliderChange(event, newValue, "slider2")
                }
                aria-labelledby="input-slider"
                valueLabelDisplay="auto"
              />
            </Grid>
          </Grid>

          <hr></hr>
          <h8>Projected cost</h8>
          <Grid container spacing={3}>
            <Grid item md={3}>
              {/* <SelectDropdow dropDownlist={data3} value="total costs" /> */}
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
                  value={state.age3}
                  onChange={handleChangeSelect("age3")}
                  labelWidth={labelWidth}
                >
                  {props.data.dropDownlist6.map(user => {
                    return (
                      <MenuItem value={user.value} key={user.key}>
                        {user.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={3}>
              <form noValidate autoComplete="off">
                <TextField
                  type="number"
                  name="projectsImpact"
                  label="projectsImpact"
                  value={state.projectsImpact}
                  onChange={handleChange}
                />
              </form>
            </Grid>
            <Grid item md={3}>
              <form noValidate autoComplete="off">
                <TextField
                  type="number"
                  name="projectSpend"
                  label="projectSpend"
                  value={state.projectSpend}
                  onChange={handleChange}
                />
              </form>
            </Grid>
            <Grid item md={3}>
              <label>PROJECTED IRR(%)</label>

              {/* <SliderComponent value={50} /> */}

              <Slider
                defaultValue={state.slider3}
                onChange={(event, newValue) =>
                  handleSliderChange(event, newValue, "slider3")
                }
                aria-labelledby="input-slider"
                valueLabelDisplay="auto"
              />
            </Grid>
          </Grid>

          <div className="action-btns">
            <Button onClick={backClick} variant="contained">
              Back
            </Button>
            <Button onClick={next} variant="contained" color="primary">
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Budget));
