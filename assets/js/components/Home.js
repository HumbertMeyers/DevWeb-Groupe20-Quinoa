import React, { Component } from "react";
import { Route, Switch, Redirect, Link, withRouter } from "react-router-dom";
import Accueil from "./Accueil";
import Users from "./Users";
import Posts from "./Posts";
import Inscription from "./Inscription";
import LigneDuTemps from "./LigneDuTemps";
import SeConnecter from "./SeConnecter";
import Quizz from "./Quizz";
import dezobey from "../../img/dezobey.png";
import { Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <Nav className="navbar">
            <img className="logo" src={dezobey} alt="logo Quinoa" />
            <NavItem>
              <NavLink className="nav-link" href="/accueil">
                Accueil
              </NavLink>
              <NavLink className="nav-link" href="/quizz">
                Quizz
              </NavLink>
              <NavLink className="nav-link" href="/LigneDuTemps">
                LigneDuTemps
              </NavLink>
              <NavLink className="nav-link" href="/resultat">
                Resultat
              </NavLink>
              <NavLink className="nav-link" href="/seconnecter">
                Se connecter
              </NavLink>
              <NavLink className="nav-link" href="/inscription">
                Inscription
              </NavLink>
            </NavItem>
          </Nav>

          <Switch>
            <Redirect exact from="/" to="/accueil" />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/seconnecter" component={SeConnecter} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/quizz" component={Quizz} />
            <Route path="/accueil" component={Accueil} />
            <Route path="/lignedutemps" component={LigneDuTemps} />
            <Route path="/resultat" component={Resultat} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
