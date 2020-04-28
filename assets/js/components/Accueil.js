import React, { Component } from "react";
import { CardImg } from "reactstrap";
import dezobey from "../../img/dezobey.jpg";

class Accueil extends Component {
  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <div className="cadreSombre">
            <h1 className="accueilTitre">Le Jeu Dezobeyi</h1>
            <div className="accueilContenu">
              <span>
                <p>
                  Quinoa propose un nouvel outil pédagogique autour de l’action
                  directe non-violente et de la désobéissance civile.
                </p>
                <p>
                  Le jeu permet de découvrir des actrices et acteurs des luttes
                  d’hier et d’aujourd’hui. Si ces personnages ont joué un rôle
                  important dans l’Histoire.
                </p>
              </span>
              <img src={dezobey} className="imgAccueil" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil;
