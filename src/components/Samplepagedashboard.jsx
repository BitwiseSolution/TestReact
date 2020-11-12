import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../App.css";
import { Button } from "@material-ui/core";
import DashboardTable from "./DashboardTable";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import * as contactAction from "../actions/contactAction";

import TextField from "@material-ui/core/TextField";

import DashboardFormModal from "./DashboardFormModal";

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

const Samplepagedashboard = props => {
  const classes = useStyles();

  console.log("datakandlaksdmasldaaa", props);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="my-3"
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Add Incident
      </Button>

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
          <DashboardFormModal />
        </div>
      </Modal>
      <DashboardTable />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // contacts: state.contacts,
    data: state.data
  };
};

const mapDispatchToProps = () => {
  return {
    // createContact: contact => dispatch(contactAction.createContact(contact)),
    // deleteContact: index => dispatch(contactAction.deleteContact(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Samplepagedashboard));
