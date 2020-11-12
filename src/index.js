import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { SecondScreen } from "./components/SecondScreen";
import { ThirdScreen } from "./components/ThirdScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { FirstScreen } from "./components/FirstScreen";
import { SignUp } from "./components/SignUp";
import { ForgetPassword } from "./components/ForgetPassword";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={LoginForm} />{" "}
      <Route path="/signUp" component={SignUp} />{" "}
      <Route path="/forgetPassword" component={ForgetPassword} />{" "}
      <Route path="/admin" component={FirstScreen} />{" "}
      <Route path="/submitter" component={SecondScreen} />{" "}
      <Route path="/approver" component={ThirdScreen} />{" "}
    </Router>
  </Provider>,

  document.getElementById("root")
);
