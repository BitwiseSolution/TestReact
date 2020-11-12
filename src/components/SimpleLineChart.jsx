import React from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart
} from "recharts";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import { withRouter } from "react-router";

class SimpleLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
      ]
    };
  }

  customMouseOver(e) {
    console.log("this.props line chart", e);
  }

  customMouseLeave(e) {}

  render() {
    return (
      <ResponsiveContainer
        className="reponsive-cont"
        width="96%"
        aspect={4.5 / 1.5}
      >
        <LineChart
          width={600}
          height={300}
          data={this.state.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{
              onMouseOver: this.customMouseOver,
              onMouseLeave: this.customMouseLeave
            }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SimpleLineChart));
