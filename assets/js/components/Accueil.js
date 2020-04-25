import React, { Component } from "react";
import { CardImg } from "reactstrap";
import dezobey from "../../img/dezobey.jpg";

class Accueil extends Component {
  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <div className="cadreSombre">
            <h1 className="accueilTitre">Dezobeyi</h1>
            <img src="{dezobey}" className="imgAccueil" />
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil;
