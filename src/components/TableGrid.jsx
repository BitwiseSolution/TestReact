import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PaginationWithTable from "./PaginationWithTable";
import "../App.css";
import UpperGrid from './UpperGrid';

const TableGrid = props => {
  console.log("data in table grid", props);
  return (
    <div>
      <UpperGrid/>
      <PaginationWithTable/>
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
)(withRouter(TableGrid));
