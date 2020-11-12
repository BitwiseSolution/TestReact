import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  LinearProgress
} from "@material-ui/core";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart
} from "recharts";
import { lighten, withStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import * as contactAction from "../actions/contactAction";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Simplebarchartforprojecthealth } from "./Simplebarchartforprojecthealth";

const data3 = [
  {
    name1: " ",
    spend: "0",
    Impact: 0,
    ROI: 0
  },
  {
    name1: "Q1 2019 ",
    spend: "91",
    Impact: 105,
    ROI: 15.38
  },
  {
    name1: "Q2 2019",
    spend: "105",
    Impact: 124,
    ROI: 18.1
  },
  {
    name1: "Q3 2019",
    spend: "88",
    Impact: 131,
    ROI: 48.86
  },
  {
    name1: "Q4 2019",
    spend: "78",
    Impact: 152,
    ROI: 94.87
  },
  {
    name1: "",
    spend: "",
    Impact: 0,
    ROI: 0
  }
];
const data = [
  {
    name: "Q1 2019 ",
    "At-Risk": 2698,
    "On-Track": 4370,
    "Top-Notch": 1232
  },
  {
    name: "Q2 2019",
    "At-Risk": 2755,
    "On-Track": 4386,
    "Top-Notch": 1200
  },
  {
    name: "Q3 2019",
    "At-Risk": 2816,
    "On-Track": 4130,
    "Top-Notch": 1344
  },
  {
    name: "Q4 2019",
    "At-Risk": 2618,
    "On-Track": 4636,
    "Top-Notch": 1090
  }
];

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

export class ProjectHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      graphDisplay1: true,
      graphDisplay2: false
    };
  }

  handleClick = () => {
    this.setState({
      open: true,
      graphDisplay1: true,
      graphDisplay2: false
    });
  };

  handleClick2 = () => {
    this.setState({
      graphDisplay2: true,
      graphDisplay1: false,
      open: false
    });
  };

  render() {
    const CustomTooltip = () => {
      return null;
    };

    const AxisLabel = ({ axisType, x, y, width, height, children }) => {
      const isVert = axisType === "yAxis";
      const rot = isVert ? -90 : 0;
      const cx = isVert ? -height / 2 : x + width / 2;
      const cy = isVert ? y : y + height / 2 + 14;
      return (
        <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle">
          {children}
        </text>
      );
    };

    console.log("propsinchartview", this.props)
    return (
      <div>
        <div className="status-btns">
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button
              onClick={this.handleClick}
              className={this.state.open === true ? "active" : ""}
            >
              In-Progress
            </Button>
            <Button
              onClick={this.handleClick2}
              className={this.state.open === false ? "active" : ""}
            >
              Completed
            </Button>
          </ButtonGroup>
        </div>
        <div className="main-wrapper mt-20">
          <div className="side-navigation">
            <ul>
              <li className="active">
                <a href="#">All Goals</a>
              </li>
              <li>
                <a href="#">Stabilize Revenue</a>
              </li>
              <li>
                <a href="#">Maintain free cash flow</a>
              </li>
              <li>
                <a href="#">Increase Operating Margin</a>
              </li>
              <li>
                <a href="#">Increase EPS</a>
              </li>
              <li>
                <a href="#">Unlinked</a>
              </li>
            </ul>
          </div>
          <div className="right-content">
            <Grid container spacing={3}>
              <Grid item xs={3} md={3} lg={4}>
                <Card className="card_dash">
                  <CardContent>
                    {(() => {
                      if (this.state.graphDisplay1 == true) {
                        return (
                          <div>
                            <p className="paragraph_number">$186M</p>
                            <p className="paragraph approver-dashboard-box">
                              Value Realized
                            </p>
                          </div>
                        );
                      }
                    })()}
                    {(() => {
                      if (this.state.graphDisplay2 == true) {
                        return (
                          <div>
                            <p className="paragraph_number">$512M</p>
                            <p className="paragraph approver-dashboard-box">
                              Total Impact
                            </p>
                          </div>
                        );
                      }
                    })()}
                  </CardContent>
                </Card>
                {(() => {
                  if (this.state.graphDisplay1 == true) {
                    return (
                      <div className="text-center">
                        <div className="custom-progress-section">
                          <BorderLinearProgress
                            className="custom-progress-bar"
                            variant="determinate"
                            value={23}
                          />
                          <span className="progress-per">23%</span>
                        </div>
                        <div>Investment Recovered</div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  if (this.state.graphDisplay2 == true) {
                    return null;
                  }
                })()}
              </Grid>
              <Grid item xs={3} md={3} lg={4}>
                <Card className="card_dash">
                  <CardContent>
                    {(() => {
                      if (this.state.graphDisplay1 == true) {
                        return (
                          <div>
                            <p className="paragraph_number">8344</p>
                            <p className="paragraph approver-dashboard-box">
                              Total Projects In-progress
                            </p>
                          </div>
                        );
                      }
                    })()}
                    {(() => {
                      if (this.state.graphDisplay2 == true) {
                        return (
                          <div>
                            <p className="paragraph_number">3124</p>
                            <p className="paragraph approver-dashboard-box">
                              Total Projects Completed
                            </p>
                          </div>
                        );
                      }
                    })()}
                  </CardContent>
                </Card>

                {(() => {
                  if (this.state.graphDisplay1 == true) {
                    return (
                      <div className="text-center">
                        <div className="custom-progress-section">
                          <BorderLinearProgress
                            className="custom-progress-bar"
                            variant="determinate"
                            value={75}
                          />
                          <span className="progress-per">75%</span>
                        </div>
                        <div>Project Progress</div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  if (this.state.graphDisplay2 == true) {
                    return null;
                  }
                })()}
              </Grid>
              <Grid item xs={3} md={3} lg={4}>
                <Card className="card_dash">
                  <CardContent>
                    {(() => {
                      if (this.state.graphDisplay1 == true) {
                        return (
                          <div>
                            <p className="paragraph_number">$780M</p>
                            <p className="paragraph approver-dashboard-box">
                              Total Spent
                            </p>
                          </div>
                        );
                      }
                    })()}
                    {(() => {
                      if (this.state.graphDisplay2 == true) {
                        return (
                          <div>
                            <p className="paragraph_number">$362M</p>
                            <p className="paragraph approver-dashboard-box">
                              Total Spent
                            </p>
                          </div>
                        );
                      }
                    })()}
                  </CardContent>
                </Card>
                {(() => {
                  if (this.state.graphDisplay1 == true) {
                    return (
                      <div className="text-center">
                        <div className="custom-progress-section">
                          <BorderLinearProgress
                            className="custom-progress-bar"
                            variant="determinate"
                            value={27}
                          />
                          <span className="progress-per">27%</span>
                        </div>
                        <div>Budget Available</div>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  if (this.state.graphDisplay2 == true) {
                    return null;
                  }
                })()}
              </Grid>
            </Grid>
            {(() => {
              if (this.state.graphDisplay1 == true) {
                return (
                  <Grid container className="mt-20">
                    <Grid item xs={12} md={12} lg={12}>
                      <h4>Project Health</h4>
                      {/* <Simplebarchartforprojecthealth/> */}
                       <ResponsiveContainer
                        className="reponsive-cont"
                        width="100%"
                        aspect={4.5 / 1.5}
                      >
                        <BarChart width={500} height={200} data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name"></XAxis>
                          <YAxis
                            label={
                              <AxisLabel
                                axisType="yAxis"
                                x={60}
                                y={12}
                                width={240}
                                height={250}
                              >
                                Number of Projects
                              </AxisLabel>
                            }
                          />
                          <Tooltip />
                          <Legend
                            width={330}
                            wrapperStyle={{
                              top: -50,
                              right: 0,
                              backgroundColor: "#f5f5f5",
                              border: "1px solid #d5d5d5",
                              borderRadius: 3,
                              lineHeight: "40px"
                            }}
                          />

                          <Bar dataKey="At-Risk" fill="#ee4433" />
                          <Bar dataKey="On-Track" fill="#ffbb00" />
                          <Bar dataKey="Top-Notch" fill="#33aa55" />
                        </BarChart>
                      </ResponsiveContainer> 
                    </Grid>
                  </Grid>
                );
              }
            })()}
            {(() => {
              if (this.state.graphDisplay2 == true) {
                return (
                  <Grid container className="mt-20">
                    <Grid item xs={12} md={12} lg={12}>
                      <h4>Project ROI ($)</h4>
                      <ResponsiveContainer
                        className="reponsive-cont"
                        width="100%"
                        aspect={4.5 / 1.5}
                      >
                        <ComposedChart
                          data={data3}
                          margin={{
                            top: 20,
                            right: 0,
                            bottom: 0,
                            left: 0
                          }}
                        >
                          <CartesianGrid stroke="#f5f5f5" />
                          <XAxis dataKey="name1" />
                          <Tooltip />

                          <YAxis
                            yAxisId="left"
                            orientation="left"
                            stroke="#9FA2B4"
                            unit="M"
                          />
                          <YAxis
                            yAxisId="right"
                            orientation="right"
                            stroke="#9FA2B4"
                            domain={[0, 100]}
                            unit="%"
                          />

                          <Tooltip
                            cursor={{ strokeDasharray: "3 3" }}
                            content={<CustomTooltip />}
                          />
                          <Legend
                            width={330}
                            wrapperStyle={{
                              top: -50,
                              right: 0,
                              backgroundColor: "#f5f5f5",
                              border: "1px solid #d5d5d5",
                              borderRadius: 3,
                              lineHeight: "40px"
                            }}
                          />
                          <Bar
                            yAxisId="left"
                            dataKey="spend"
                            stackId="a"
                            fill="#ee4433"
                            barSize={60}
                            isAnimationActive={false}
                            unit="M"
                          />
                          <Bar
                            yAxisId="left"
                            dataKey="Impact"
                            stackId="b"
                            fill="#33aa55"
                            barSize={60}
                            isAnimationActive={false}
                            unit="M"
                          />
                          <Line
                            type="monotone"
                            yAxisId="right"
                            dataKey="ROI"
                            stroke="#9D03FC"
                            unit="%"
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </Grid>
                  </Grid>
                );
              }
            })()}
          </div>
        </div>
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
)(withRouter(ProjectHealth));