import React, { Component } from "react";
import { Button, FormGroup, Input } from "reactstrap";

class SeConnecter extends Component {
  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <form className="cadreSombre">
            <h1 className="formTitle text-center">Se Connecter</h1>
            <FormGroup>
              <h3>Adresse Mail</h3>
              <Input type="email" name="email" id="email" placeholder="" />
            </FormGroup>
            {/* <FormGroup>
              <h3>Adresse mail</h3>
              <Input type="email" name="email" id="Email" placeholder="" />
            </FormGroup> */}
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
