import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as contactAction from "../actions/contactAction";
import { TableContainer, TablePagination, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import DashboardFormModalEdit from "./DashboardFormModalEdit";
import TextField from "@material-ui/core/TextField";

const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: "transparent",
      color: "#000"
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const DashboardTable = props => {
  const classes = useStyles();
  console.log(props);
  console.log("intable", props.data.dataTable);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    name: "",
    surname: "",
    birthYear: "",
    birthCity: ""
  });
  // const handleOpen = () => {
  //     //alert(name)
  //     setOpen(true);
  // };
  const handleDeleteClick = element => {
    alert("clicked delete");
    console.log("element deleteeees", element);

    this.props.deleteRecords(element);
  };

  const handleEditclick = element => {
    alert("clicked edit");
    console.log("element", element);
    setOpen(true);
    setState({
      ...state,
      name: element.name,
      surname: element.surname,
      birthYear: element.birthYear,
      birthCity: element.birthCity
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = evt => {
    const value = evt.target.value;
    console.log([evt.target.name], " : ", value);
    setState({
      ...state,
      [evt.target.name]: value
    });
  };
  const editRecords = evt => {
    alert("asd");
    let edtobj = {
      name: state.name,
      surname: state.surname,
      birthYear: state.birthYear,
      birthCity: state.birthCity
    };
    console.log("edtobj", edtobj);
    console.log("this.props====>", props);
    props.editData(edtobj);
  };

  return (
    <div className="table-outer">
      <Paper>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Incident Id</StyledTableCell>
                <StyledTableCell>Assigned</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.dataTable.map(item => {
                return (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.surname}</TableCell>
                    <TableCell>{item.birthYear}</TableCell>
                    <TableCell>{item.birthCity}</TableCell>
                    <TableCell>
                      <Button
                        className="my-3"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          handleEditclick(item);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        className="my-3"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          handleDeleteClick(item);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
                rowsPerPageOptions={[15, 30, 100]}
                component="div"
                count={tableObjectDataJson.length}
                rowsPerPage={state.rowsPerPage}
                page={state.page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}
      </Paper>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div>
          {/* <DashboardFormModalEdit/> */}

          <TextField
            label="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />

          <TextField
            label="surname"
            type="surname"
            name="surname"
            value={state.surname}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />

          <TextField
            label="birthYear"
            type="birthYear"
            name="birthYear"
            value={state.birthYear}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />

          <TextField
            label="birthCity"
            type="birthCity"
            name="birthCity"
            value={state.birthCity}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            onClick={editRecords}
          >
            Edit records
          </Button>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    // contacts: state.contacts,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editData: editData => dispatch(contactAction.editData(editData)),
    deleteRecords: index => dispatch(contactAction.deleteRecords(index))

    // deleteContact: index => dispatch(contactAction.deleteContact(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DashboardTable));
