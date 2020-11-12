import React from 'react';
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Grid } from "@material-ui/core";
import SelectDropdow from "./SelectDropdow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PaginationWithTable from "./PaginationWithTable";
import "../App.css";

const UpperGrid = props => {
  const [age, setAge] = React.useState(20);
  const [text, setText] = React.useState("chart");
  const [add, setAdd] = React.useState(false);

  
  const handleChange = event => {
    // setOpen(false);

    setText(event.target.value);
  };

  const handleChangeDropDown = event => {
    setAge(event.target.value);
  };

  const click = event => {
    alert("clciked");
  };

  const clickAdd = event => {
    alert("clciked add");
    setAdd(true);
  };

  console.log("datainuppergrid", props);

  return (
    <div>
        <div className="white-shadow-box mb-30">
        <Grid container spacing={3}>
          <Grid item md={3}>
            <SelectDropdow
              dropDownlist={props.data.dropDownlist1}
              value={props.data.countries1}
            />
          </Grid>
          <Grid item md={3}>
            <SelectDropdow
              dropDownlist={props.data.dropDownlist2}
              value={props.data.countries2}
            />
          </Grid>
          <Grid item md={3}>
            <SelectDropdow
              dropDownlist={props.data.dropDownlist3}
              value={props.data.countries3}
            />
          </Grid>
          <Grid item md={12}>
            <Button onClick={clickAdd} variant="contained" color="primary">
              Generate Report
            </Button>
          </Grid>
        </Grid>
      </div>

      {(() => {
        if (add == true) {
          return (
            <Grid container spacing={3}>
              <Grid item md={3}>
                <SelectDropdow
                  dropDownlist={props.data.dropDownlist1}
                  value={props.data.countries1}
                />
              </Grid>
              <Grid item md={3}>
                <SelectDropdow
                  dropDownlist={props.data.dropDownlist2}
                  value={props.data.countries2}
                />
              </Grid>
              <Grid item md={3}>
                <form noValidate autoComplete="off">
                  <TextField
                    variant="outlined"
                    id="standard-basic"
                    label="Standard"
                  />
                </form>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                className="mb-30"
              >
                <AddIcon /> Apply filter
              </Button>
            </Grid>
          );
        }
      })()}  


      {/* <PaginationWithTable/> */}

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
)(withRouter(UpperGrid));
