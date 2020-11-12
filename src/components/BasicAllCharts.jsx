import React from "react";
import {
  Grid} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SimpleLineChart from "./SimpleLineChart";
import SimplePieChart from "./SimplePieChart";
import SimpleBarChart from "./SimpleBarChart";
import Summarychart from "./Summarychart";
import * as contactAction from "../actions/contactAction";




export class BasicAllCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
 
    };
  }
  render() {
    console.log("propsbasicallcharts",this.props)

    // console.log("data",state.addReducer)
    return (
      <div>
        <Grid container className="mt-20">
          <Grid item xs={6} md={6} lg={6}>
            <h4>Bar chart</h4>
           <SimpleBarChart/>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <h4>Pie chart</h4>
           <SimplePieChart/>
          </Grid>
        </Grid>
        <Grid container className="mt-20">
          <Grid item xs={6} md={6} lg={6}>
            <h4>Line chart</h4>
           <SimpleLineChart/>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <h4>Summary chart</h4>
           <Summarychart/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateData: index => dispatch(contactAction.updateData(index)),
    updateDataOnmouseLeave: index => dispatch(contactAction.updateDataOnmouseLeave(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BasicAllCharts));
