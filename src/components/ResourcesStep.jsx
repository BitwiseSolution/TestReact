import React, { Component, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "../App.css";
import { useHistory,useRouteMatch } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import ChipInput from 'material-ui-chip-input'
import CustomMultiSelect from "./CustomMultiSelect";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as contactAction from "../actions/contactAction";
import StepperSample from "./StepperSample";
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

 const ResourcesStep = props => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(
    props.contacts[0].personName,
  );

  const handleChange = event => {
    setPersonName(event.target.value);

  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  const names = [
    "oil",
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
  ];
 

  var namestoadd=[];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  const next = event => {

    console.log("sadfs",personName)
    let contact = {
      personName:personName
    };
    props.editData(contact);

    alert("clciked next");
    history.push(`/${finalPath}/budget-step`);

    props.history.push({
      state: {
        // fisrtName:props.location.state.firstName,
        // lastName:props.location.state.lastName,
        // name:props.location.state.name,
        // personName: personName,
        
      }
    });


  };
  const backClick = event => {
    alert("clciked back");
    history.push(`/${finalPath}/specific-step`);

  };
  const [textValue, setTextValue] = useState('');



const handleAddChip = (chip) =>{
  console.log(chip)
}


  console.log("props in resources......", props);
  let { path, url } = useRouteMatch();
  const cutPath= path.split("/")
  const finalPath = cutPath[1];

  return (
    <div className="grid-container">
      <StepperSample/>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <FormControl
                className={clsx(classes.formControl, classes.noLabel)}
              >
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={selected => {
                    if (selected.length === 0) {
                      return <em>name</em>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  {names.map(name => (
                    <MenuItem
                      key={name}
                      value={name}
                      //style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
     editData: edit =>dispatch(contactAction.editData(edit)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ResourcesStep));
