import React, { Component } from "react";
import { Button, FormGroup } from "reactstrap";
import { useHistory } from "react-router-dom";

class Resultat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbBonneReponse: "",
    };
  }

  handleClick(page) {
    switch (page) {
      case "quizz": {
        this.props.history.push("/quizz");
        break;
      }
      case "ligneTps": {
        this.props.history.push("/lignedutemps");
        break;
      }
      default:
        true;
    }
  }

  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <div className="cadreSombre">
            <h1 className="resultTitre">Tu as fini le Quizz Dezobeyi !</h1>
            <div className="resultatContenu">
              <p>
                Tu es un{" "}
                <b>
                  <u>(3 types de personnes)</u>
                </b>
              </p>
              <p>
                Tu as eu ...{this.state.nbBonneReponse} de bonnes réponses sur
                20
              </p>
              <br></br>
              <FormGroup>
                <Button
                  className="btnLigneTps"
                  onClick={() => this.handleClick("ligneTps")}
                >
                  <label>Tes réponses</label>
                </Button>
                <Button
                  className="btnQuizz"
                  onClick={() => this.handleClick("quizz")}
                >
                  <label>Refaire le quizz</label>
                </Button>
              </FormGroup>
              <br></br>
              <p>
                <a href="http://www.quinoa.be">
                  S'inscire à la newsletter de Quinoa
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resultat;
