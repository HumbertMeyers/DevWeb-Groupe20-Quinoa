import React, { Component } from "react";
import { Button, FormGroup } from "reactstrap";

class Resultat extends Component {
  constructor(props) {
    super(props);
    const score = localStorage.getItem("score");
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

  msgResultat() {}

  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <div className="cadreSombre">
            <h1 className="resultTitre">Tu as fini le Quizz Dezobeyi !</h1>
            <div className="resultatContenu">
              <b>
                {score >= 16 ? (
                  <label>
                    Bravo ! Tu es un-e incontestable désobéissant-e 😃...
                    Dezobeyi comporte encore bien d'autres facettes, n'hésite
                    pas à rejouer...
                  </label>
                ) : score <= 15 && this.score >= 10 ? (
                  <label>
                    Tu es un-e désobéissant-e confirmé-e, bien joué ! et si tu
                    rejouais pour devenir un-e véritable expert-e ?
                  </label>
                ) : score <= 9 && this.score >= 0 ? (
                  <label>
                    Tu es une graine de désobéissant-e ! continue de t'informer
                    dans nos pages et rejoue !
                  </label>
                ) : (
                  <label>erreur de score</label>
                )}
                }
              </b>
              <p>
                Tu as eu {localStorage.getItem("score")} bonnes réponses sur 20 questions
                Tu as eu {score !== null ? score : "erreur de score"} de bonnes
                réponses sur 20
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resultat;
