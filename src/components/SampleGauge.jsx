import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../App.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as contactAction from "../actions/contactAction";
import GaugeChart from 'react-gauge-chart'

const SampleGauge = props => {
    const history = useHistory();

    return (
        <div className="grid-container">
            <GaugeChart id="gauge-chart2"
                nrOfLevels={20}
                percent={0.86}
            />
        </div>
    );
};



const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts,
        data: state.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SampleGauge));
