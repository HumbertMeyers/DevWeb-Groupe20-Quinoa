import React, { Component, useState, useEffect } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import { Alert } from "reactstrap";

const SeConnecter = () => {
  const [erreur, setErreur] = useState(true); //si true disparait

  const login = (event) => {
    //change l'état de erreur
    setErreur(event.target.erreur);
  };

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
            <Button className="btnLogin" onClick={login}>
              Se Connect
            </Button>
          </FormGroup>
        </form>
        <Alert color="warning" style={erreur ? { display: "none" } : {}}>
          Nous ne connaissons pas ce mail !
        </Alert>
      </div>
    </div>
  );
};

export default SeConnecter;
