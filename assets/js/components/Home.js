// noprotect
import React, { Component } from "react";
import { Route, Switch, Redirect, Link, withRouter } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import Logo from "../../img/logo.png";
import Inscription from "./Inscription";
import SeConnecter from "./SeConnecter";
import { Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <Nav className="navbar col-md-12">
            <img className="logo" src={Logo} alt="logo Quinoa" />
            <NavItem>
              {/* <NavLink className="nav-link" href="/posts"></NavLink> */}
              <NavLink className="nav-link" href="/seconnecter">
                Se connecter
              </NavLink>
              <NavLink className="nav-link" href="/inscription">
                Inscription
              </NavLink>
            </NavItem>
          </Nav>

          <Switch>
            <Redirect exact from="/" to="/users" />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/seconnecter" component={SeConnecter} />
            <Route path="/inscription" component={Inscription} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
