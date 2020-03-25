import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import Logo from '../../img/logo.png';
import Inscription from './Inscription';
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {

    render() {
        return (
                <div>
                    <Nav className="navbar">
                        <img className='logo' src={Logo} alt='logo Quinoa'/>
                        <NavItem>
                            <NavLink className="nav-link" href="/posts">Posts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/users">Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/inscription">Inscription</NavLink>
                        </NavItem>
                    </Nav>

                    <Switch>//routage react
                        <Redirect exact from="/" to="/users" />
                        <Route path="/users" component={Users} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/inscription" component={Inscription} />
                    </Switch>
                </div>
        )
    }
}

export default Home;