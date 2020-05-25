import React, { Component } from "react";
import axios from "axios";
import { ldtdata } from "./LDTData";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Simplert from 'react-simplert'

class LigneDuTemps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      typeAlert: 'success',
      titleAlert: 'This is Title',
      messageAlert: 'I am message alert',
      fiche: [
        { nom: "" },
        { periode: "" },
        { lieu: "" },
        { lutte: "" },
        { strategie: "" },
        { action: "" },
        { victoire: "" },
        { annecdote: "" },
        { citation: "" },
        { question: "" },
        { reponse1: "" },
        { reponse2: "" },
        { reponse3: "" },
        { video: "" },
        { article: "" },
        { reponseJoueur: "" },
      ],
      modal: false,
      activeModal: null,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    axios.get('/api/evenements/')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  reponse(reponse) {
    if (reponse === 1) {
      return <FontAwesomeIcon className="checkIcon" icon={faCheck} />;
    }
    return <FontAwesomeIcon className="falseIcon" icon={faTimes} />;
  }

  // changeVariable(periodes, noms, reponseJoueurs) {
  //   this.setState({
  //     periode: periodes.value,
  //     nom: noms.value,
  //     reponseJoueur: reponseJoueurs.value,
  //   });
  // }

  ligneDuTemps() {
    const { fiche } = this.state;
    return fiche.map(({ nom, id, periode,reponseJoueur }) => (
      <tr key={id}>
        <td>{nom}</td>
        <td>{periode}</td>
        <td className="reponseJoueur">{this.reponse(reponseJoueur)}</td>
        <td>
          <Button color="secondary" onClick={this.toggle}>
            Plus d'information
          </Button>
        </td>
      </tr>
    ));
  }

  render() {
    const { fiche } = this.state;
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <div className="cadreSombre">
          <Simplert 
            showSimplert={ this.state.showAlert }
            type={ this.state.typeAlert }
             title={ this.state.titleAlert }
             message={ this.state.messageAlert }
          />
            <h2 className="ldtTitre">
              Vos résultats aux questions des désobéissants
            </h2>
            <table id="tabDesobei">
              <thead>
                <tr>
                  <th className="thead">Nom</th>
                  <th className="thead">Date</th>
                  <th className="thead">Résultat</th>
                  <th className="thead">Infos</th>
                </tr>
              </thead>
              <tbody>{this.ligneDuTemps()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default LigneDuTemps;
