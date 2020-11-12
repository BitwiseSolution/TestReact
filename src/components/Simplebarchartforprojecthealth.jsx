import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import { withRouter } from "react-router";

export class Simplebarchartforprojecthealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    // const data = [
    //   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    //   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    //   { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    //   { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    //   { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    //   { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    //   { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
    // ];
    // this.setState({
    //   data: this.props.data
    // });
  }

  customMouseOver(e) {
    console.log("event of bar chart", e.payload.name);
    console.log("event of bar chart", e.payload.amt);
    var arr = [];
    arr.push({
      "name":e.payload.name,
      "amt":e.payload.amt,
      "uv":e.payload.uv
    })
    console.log("arr",arr)
    this.props.updateData(arr);
  }

  customMouseLeave(e) {
      this.props.updateDataOnmouseLeave(this.props.data.data);
  }

  render() {
    console.log("propsbarchartsadasd", this.props);
    return (
    <div>jhdbsA</div>
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
)(withRouter(Simplebarchartforprojecthealth));
