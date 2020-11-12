import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../App.css";
import Samplepagedashboard from './Samplepagedashboard';

 const Dashboardforfirstscreen = props => {
  console.log("datadashboardgrid", props);
  return (
    <div>
      <Samplepagedashboard/>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    // contacts: state.contacts,
    data: state.data
  };
};

const mapDispatchToProps = () => {
  return {
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboardforfirstscreen));
