import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "../actions/contactAction";
import { withRouter } from "react-router";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: ""
    };
  }
 

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.state.name
    };
    this.setState({
      name: ""
    });
    this.props.createContact(contact);
  }

  listView(data, index) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
        </div>
        <div className="col-md-2">
          <button
            onClick={e => this.deleteContact(e, index)}
            className="btn btn-danger"
          >
            Remove
          </button>
          {/* <button
            onClick={e => this.deleteContact(e, index)}
            className="btn btn-danger"
          >
            Edit
          </button> */}
        </div>
      </div>
    );
  }

  deleteContact(e, index) {
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {

    console.log("state maintained",this.props.contacts)
console.log("kwjehql3we",this.props)
    return (
      <div className="container">
        <h1>Clientside Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.name}
            />
            <br />
            <input type="submit" className="btn btn-success" value="ADD" />
          </form>
          <hr />
          {
            <ul className="list-group">
              {this.props.contacts.map((contact, i) =>
                this.listView(contact, i)
              )}
            </ul>
          }
        </div>

        {/* <h1>Listtt</h1>
        <ul>
          {users.map(user => {
            return <li key={user.id}>{user.firstName}</li>;
          })}
        </ul> */}
        {/* <SaveButton /> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
    // addReducer: state.addReducer
    data: state.data,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index)),
    // addReducer: addReducers => dispatch(contactAction.addReducer(addReducers)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));


