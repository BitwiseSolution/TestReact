import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, createStyles } from '@material-ui/core/styles';
import {
    TableContainer,
    TablePagination,
    Button
} from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';




const StyledTableCell = withStyles(() =>
    createStyles({
        head: {
            backgroundColor: 'transparent',
            color: '#000',
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);






class EditPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            incidents: [],
            open: false,
            setValue: 'Controlled'
        }
    }
    // const [value, setValue] = React.useState('Controlled');


    componentDidMount() {
        this._refreshIncidents();
    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    _refreshIncidents() {
        axios.get('https://6sabdbwui0.execute-api.us-east-1.amazonaws.com/test/scan').then((response) => {
            console.log("ukyhas", JSON.stringify(response.data.details.Items))
            this.setState({
                incidents: response.data.details.Items
            })
        });
    }


    // handleChange = event => {
    //     //setValue(event.target.value);
    //     this.setState({
    //         setValue: event.target.value
    //     })
    // };

    render() {
        console.log("incidents data", this.state.incidents)
        const { incidents } = this.state




        return (
            <div className="App Container">

                <Button className="my-3"
                    variant="contained" color="primary" onClick={this.handleOpen}
                //onClick={this.toggleNewIncidentModal.bind(this)}
                >Add Incident</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    style={
                        {
                            border: "2px solid black",
                            top: "117px",
                            left: "330px",
                            width: "50%",
                            height: "50%",
                            backgroundColor: "#fff"
                        }
                    }
                >
                    <div>
                        <form noValidate >
                            <label>Assigned</label>
                            {/* <TextField
                                label="Assigned"
                                type="assigned"
                                id="assigned"
                                value={values.assigned}
                                onChange={handleChange('assigned')}
                            /> */}
                            {/* <TextField id="outlined-basic" label="Assigned" variant="outlined" />
                           <br></br>
                            <label>Description</label>
                            <TextField id="outlined-basic" label="Description" variant="outlined" />
                            <br></br>

                            <label>Location</label>
                            <TextField id="outlined-basic" label="Location" variant="outlined" />
                            <br></br>

                            <label>Status Mode</label>
                            <TextField id="outlined-basic" label="Status Mode" variant="outlined" />
                            <br></br>

                            <label>Actions</label>
                            <TextField id="outlined-basic" label="Actions" variant="outlined" /> */}
                        </form>

                        <Button className="my-3"
                            variant="contained" color="primary"
                        //onClick={this.addIncident.bind(this)}
                        >Add Incident</Button>
                        <Button className="my-3"
                            variant="contained" color="primary" onClick={this.handleClose}
                        >Cancel</Button>

                    </div>
                </Modal>


                <div className="table-outer">

                    <Paper >
                        <TableContainer component={Paper}>
                            <Table
                                aria-label="customized table">
                                <TableHead>
                                    <TableRow >
                                        <StyledTableCell>Incident Id</StyledTableCell>
                                        <StyledTableCell >Assigned</StyledTableCell>
                                        <StyledTableCell>Description</StyledTableCell>
                                        <StyledTableCell >Location</StyledTableCell>
                                        <StyledTableCell>Status Mode</StyledTableCell>
                                        <StyledTableCell>Actions</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.incidents.map((incident) => {
                                            console.log(incident)
                                            return (
                                                <TableRow key={incident.incid}>
                                                    <TableCell >
                                                        {incident.incid}
                                                    </TableCell>

                                                    <TableCell>
                                                        {incident.assigned}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {incident.description}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {incident.location}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {incident.statusMode}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {/* <Button color="success" size="sm" className="mr-2" onClick={(value)=>{
                                                         this.editIncident(incident)}}>Edit</Button>
                                                       <Button color="danger" size="sm" onClick={this.deleteIncident.bind(this, incident.incid)}>Delete</Button> */}
                                                    </TableCell>

                                                </TableRow>

                                            )
                                        })
                                    }






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




                </div >


            </div >

        );
    }
}
export default EditPage;