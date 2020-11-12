import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import "../App.css";
import SelectDropdow from "./SelectDropdow";
import Radio from "@material-ui/core/Radio";
import { green } from "@material-ui/core/colors";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import SimpleLineChart from "./SimpleLineChart";
import SimplePieChart from "./SimplePieChart";
import SimpleBarChart from "./SimpleBarChart";
import Summarychart from "./Summarychart";
import * as contactAction from "../actions/contactAction";
import { SliderComponent } from "./SliderComponent";

export class FormVaidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "a",

      firstName: "",
      lastName: "",
      data: [
        {
          value: "sam",
          key: 0
        },
        {
          value: "shanshank",
          key: 1
        },
        {
          value: "omkar",
          key: 2
        },
        {
          value: "south",
          key: 3
        }
      ],
      data1: "name"
    };
  }
  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  handleChangeRadio = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  render() {
    console.log("propsss", this.props);
    return (
      <div className="grid-container">
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <TextField
                  type="text"
                  name="firstName"
                  label="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <SelectDropdow
                  dropDownlist={this.state.data}
                  value={this.state.data1}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <label>Progress bar</label>

                <SliderComponent value={30} />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <TextField
                  type="text"
                  name="lastName"
                  label="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={6}>
                <Radio
                  checked={this.selectedValue === "a"}
                  onChange={this.handleChangeRadio}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "A" }}
                />
                <Radio
                  checked={this.selectedValue === "b"}
                  onChange={this.handleChangeRadio}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "B" }}
                />
                {/* <GreenRadio
        checked={this.selectedValue === 'c'}
        onChange={this.handleChangeRadio}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      /> */}
                <Radio
                  checked={this.selectedValue === "d"}
                  onChange={this.handleChangeRadio}
                  value="d"
                  color="default"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "D" }}
                />
                <Radio
                  checked={this.selectedValue === "e"}
                  onChange={this.handleChangeRadio}
                  value="e"
                  color="default"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "E" }}
                  size="small"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     updateData: index => dispatch(contactAction.updateData(index)),
//     updateDataOnmouseLeave: index => dispatch(contactAction.updateDataOnmouseLeave(index))
//   };
// };

export default connect(mapStateToProps)(FormVaidation);
