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

export class SimpleBarChart extends React.Component {
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
    console.log("props bar chart", this.props);
    return (
      <ResponsiveContainer
        className="reponsive-cont"
        width="96%"
        aspect={4.5 / 1.5}
      >
        <BarChart
          width={600}
          height={300}
          data={this.props.data.data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="amt"
            stackId="a"
            fill="#8884d8"
            onMouseEnter={e => this.customMouseOver(e)}
            onMouseLeave={e => this.customMouseLeave(e)}        
          />
          <Bar
            dataKey="uv"
            stackId="b"
            fill="#82ca9d"
            onMouseEnter={e => this.customMouseOver(e)}
            onMouseLeave={e => this.customMouseLeave(e)}
          /> 
        </BarChart>
      </ResponsiveContainer>
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
)(withRouter(SimpleBarChart));
