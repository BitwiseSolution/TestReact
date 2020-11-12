import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../App.css";
import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SelectDropdow from "./SelectDropdow";
import { connect } from "react-redux";
import { withRouter } from "react-router";

export const TopHeader = props => {
  const history = useHistory();

  const [state, setState] = React.useState({
    text1: "",
    lastName: ""
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  // const next = event => {
  //   alert("clciked next");
  //   history.push("/firstScreen/specific-step");
  // };

  const data = [
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
  ];
  const data1 = "name";

  console.log("object", props);

  return (
    <div className="grid-container">
     sderfsdfds
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    // contacts: state.contacts,
    data: state.data
  };
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
)(withRouter(TopHeader));
