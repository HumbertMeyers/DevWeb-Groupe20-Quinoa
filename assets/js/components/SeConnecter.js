// noprotect
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class SeConnecter extends Component {
  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <form className="login-form col-lg-7 col-md-10 col-sm-11 col-xs-12">
            <h1 className="formTitle text-center">Se Connecter</h1>
            <FormGroup>
              <h3>Pseudo</h3>
              <Input type="text" name="pseudo" id="pseudo" placeholder="" />
            </FormGroup>
            <FormGroup>
              <h3>Adresse mail</h3>
              <Input type="email" name="email" id="Email" placeholder="" />
            </FormGroup>
            <FormGroup className="wrapper">
              <Button className="btnLogin">Se Connecter</Button>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default SeConnecter;
