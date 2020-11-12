import * as React from 'react';

import '../App.css';

// import { baseUrlWithSuffixHyphen_dev, baseUrlWithSuffixHyphen } from '../common';
import * as api from "../common"
import { connect } from "react-redux";
import { withRouter } from "react-router";



export class BasicTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }




  render() {
    console.log("props login", this.props)

    return (
     <div>jhadbskas</div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data,
    // addReducer: state.addReducer
  };
};

const mapDispatchToProps = () => {
  return {
    // addReducer: addReducers => dispatch(contactAction.addReducer(addReducers)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BasicTemplate));