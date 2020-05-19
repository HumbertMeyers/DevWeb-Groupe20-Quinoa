import React, { Component } from "react";
import axios from "axios";
import { ldtdata } from "./LDTData";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LigneDuTemps extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  componentDidMount() {
    axios.get("url api").then((response) => {
      this.setState({ response: response });
    });
  }

  reponse() {
    ldtdata.map((reponseJoueur) => {
      if (this.state.reponseJoueur === "1") {
        return <FontAwesomeIcon icon={faCheck} />;
      }
      return <FontAwesomeIcon icon={faTimes} />;
    });
  }

  render() {
    const ldtList = ldtdata.map(({ periode, nom }) => (
      <tr key={nom}>
        <td>{nom}</td>
        <td>{periode}</td>
        <td className="reponseJoueur">{this.reponse()}</td>
        <td>
          <Button color="secondary" onClick={this.toggle}>
            Plus d'information
          </Button>
        </td>
        <Modal
          modalClassName="modal-dialog"
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </tr>
    ));

    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <div className="cadreSombre">
            <table id="tabDesobei">
              <thead>
                <tr>
                  <th className="thead">Nom</th>
                  <th className="thead">Date</th>
                  <th className="thead">votre réponse</th>
                  <th className="thead">infos</th>
                </tr>
              </thead>
              <tbody>{ldtList}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default LigneDuTemps;
