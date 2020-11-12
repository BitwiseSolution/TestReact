import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../App.css";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectDropdow(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    // setValue(event.target.value);
    // event.preventDefault();
    // let contact = {
    //   dropDown: value.dropDown,
    // };
    // setValue({
    //   dropDown: event.target.value,
    // });
    // props.(contact);
    // alert("clciked next");
    // history.push(`/${finalPath}/specific-step`);

    // props.history.push({
    //   state: {
    //     firstName: state.firstName,
    //     lastName: state.lastName,
    //   }
    // });

  
    setValue(event.target.value);
    let contact = {
      dropDown: event.target.value,
    };

    console.log("contactsssss in select",contact)

    // setValue({
    //   dropDown: event.target.value,
    // });
    props.editData(contact);
    
    props.history.push({
      state: {
        dropDown: event.target.value,
      }
    });
  };



  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  console.log("value..",value)


    console.log("props are in select", props);

  return (
    <FormControl variant="outlined" className={classes.formControl + " customform"}>
       <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">{props.value}</InputLabel> 
      <Select
        labelid="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        labelWidth={labelWidth}
        //variant="outlined"
      >
        {props.dropDownlist.map(user => {
          return (
            <MenuItem value={user.value} key={user.key}>
              {user.value}
            </MenuItem>
          );
        })} 
      </Select>
    </FormControl>







  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index)),
    editData: edit =>dispatch(contactAction.editData(edit)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SelectDropdow));


