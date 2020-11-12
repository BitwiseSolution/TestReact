import React from "react";

import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import { withRouter } from "react-router";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Summarychart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {

  }



  render() {
    console.log("dataa summaryt. ..",this.props.data.dataToSummary)
    return (
      <div >
      <Paper className="root">
        <Table className="table-css">
          <TableHead>
            <TableRow>
              <TableCell>name </TableCell>
              <TableCell>amt</TableCell>
              <TableCell>uv</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
            
          
              {
                this.props.data.dataToSummary.map((item)=>{
                return    <TableRow key={item.name}>
                 <TableCell>{item.name}</TableCell>
                <TableCell>{item.amt}</TableCell>
                <TableCell>{item.uv}</TableCell>
                </TableRow>
                })
              }
           
          </TableBody>  
        </Table>
      </Paper>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
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
)(withRouter(Summarychart));
