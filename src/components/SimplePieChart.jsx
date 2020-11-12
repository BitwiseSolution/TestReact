import React from "react";
import {
    ResponsiveContainer,
    Cell
  } from "recharts";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import { withRouter } from "react-router";
import {
    PieChart, Pie, 
  } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class SimplePieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // dataPie: [
      //   { name: "Group A", value: 400 },
      //   { name: "Group B", value: 300 },
      //   { name: "Group C", value: 300 },
      //   { name: "Group D", value: 200 }
      // ]
    };
  }

  render() {
    console.log("dataa...",this.props.data.dataPie)
    return (    
      <ResponsiveContainer
        width={400}
        height={300}
        className="pie-chart-section"
      >
        <PieChart width={400} height={400}>
          <Pie
            data={this.props.data.dataPie}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="amt"
          >
            {this.props.data.dataPie.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data,  };
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
)(withRouter(SimplePieChart));
