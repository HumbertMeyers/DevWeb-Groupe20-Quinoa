// noprotect
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      mail: "",
      age: "",
      sexe: "",
      desobeissant: "",
      pseudoErreur: "",
      mailErreur: "",
      ageErreur: "",
      sexeErreur: "",
      desobeissantErreur: "",
    };
  }

  createUser() {
    const userObject = {
      pseudo: this.state.pseudo,
      mail: this.state.mail,
      age: this.state.age,
      sexe: this.state.sexe,
      desobeissant: this.state.desobeissant,
    };
    axios
      .post("/api/users/add/", userObject)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(item, champ) {
    let itemValue = item.target.value;
    switch (champ) {
      case "pseudo": {
        this.setState({ pseudo: itemValue });
        break;
      }
      case "mail": {
        this.setState({ mail: itemValue });
        break;
      }
      case "age": {
        this.setState({ age: itemValue });
        break;
      }
      case "sexe": {
        this.setState({ sexe: itemValue });
        break;
      }
      case "desobeissant": {
        this.setState({ desobeissant: itemValue });
        break;
      }
    }
  }

  validate() {
    let pseudoErreur = "";
    let mailErreur = "";
    let ageErreur = "";
    let sexeErreur = "";
    let desobeissantErreur = "";

    if (!this.state.pseudo) {
      pseudoErreur = "le champ doit être rempli";
    }

    if (!this.state.mail.includes("@")) {
      mailErreur = "l'email est invalide";
    }

    if (!this.state.age) {
      ageErreur = "le champ doit être rempli";
    }

    if (!this.state.sexe) {
      sexeErreur = "le champ doit être rempli";
    }

    if (!this.state.desobeissant) {
      desobeissantErreur = "le champ doit être rempli";
    }

    if (
      mailErreur ||
      pseudoErreur ||
      ageErreur ||
      sexeErreur ||
      desobeissantErreur
    ) {
      this.setState({
        mailErreur,
        pseudoErreur,
        ageErreur,
        sexeErreur,
        desobeissantErreur,
      });
      return false;
    }

    return true;
  }

  handleSubmit() {
    const isValid = this.validate();
    let obj = {};
    obj.pseudo = this.state.pseudo;
    obj.mail = this.state.mail;
    obj.age = this.state.age;
    obj.sexe = this.state.sexe;
    obj.desobeissant = this.state.desobeissant;
    obj.commentaire = this.state.commentaire;

    if (isValid) {
      console.warn("données envoyées", obj);
      this.props.history.push("/quizz");
      this.createUser();
    }
  }

  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <Form className="cadreSombre" method="POST">
            <h1 className="formTitle text-center">Inscription</h1>
            <FormGroup>
              <h3>Pseudo</h3>
              <Input
                type="text"
                name="pseudo"
                id="pseudo"
                placeholder=""
                onChange={(item) => this.handleChange(item, "pseudo")}
              />
              <div className="erreur">{this.state.pseudoErreur}</div>
            </FormGroup>

            <FormGroup>
              <h3>Adresse Mail</h3>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder=""
                onChange={(item) => this.handleChange(item, "mail")}
              />
              <div className="erreur">{this.state.mailErreur}</div>
            </FormGroup>
            <FormGroup>
              <h3>Age</h3>
              <FormGroup className="radio">
                <Input
                  type="radio"
                  name="radioAge"
                  id="16"
                  value="16"
                  onChange={(item) => this.handleChange(item, "age")}
                />
                <Label>16-18</Label>
              </FormGroup>
              <FormGroup className="radio">
                <Input
                  type="radio"
                  name="radioAge"
                  id="19"
                  value="19"
                  onChange={(item) => this.handleChange(item, "age")}
                />
                <Label>19-21</Label>
              </FormGroup>
              <FormGroup className="radio">
                <Input
                  type="radio"
                  name="radioAge"
                  id="22"
                  value="22"
                  onChange={(item) => this.handleChange(item, "age")}
                />
                <Label>22-25</Label>
              </FormGroup>
              <FormGroup className="radio">
                <Input
                  type="radio"
                  name="radioAge"
                  id="26"
                  value="26"
                  onChange={(item) => this.handleChange(item, "age")}
                />
                <Label>26-29</Label>
              </FormGroup>
              <FormGroup className="radio">
                <Input
                  type="radio"
                  name="radioAge"
                  id="30"
                  value="30"
                  onChange={(item) => this.handleChange(item, "mail")}
                />
                <Label>+ 30</Label>
              </FormGroup>
              <div className="erreur">{this.state.ageErreur}</div>
            </FormGroup>
            <FormGroup>
              <h3>Sexe</h3>
              <FormGroup className="radio">
                <Label>
                  <Input
                    type="radio"
                    name="sexe"
                    id="homme"
                    value="homme"
                    data-testid="homme"
                    onChange={(item) => this.handleChange(item, "sexe")}
                  />
                  homme
                </Label>
              </FormGroup>
              <FormGroup className="radio">
                <Label>
                  <Input
                    type="radio"
                    name="sexe"
                    id="femme"
                    value="femme"
                    data-testid="femme"
                    onChange={(item) => this.handleChange(item, "sexe")}
                  />
                  femme
                </Label>
              </FormGroup>
              <FormGroup className="radio">
                <Label>
                  <Input
                    type="radio"
                    name="sexe"
                    id="autre"
                    value="autre"
                    data-testid="autre"
                    onChange={(item) => this.handleChange(item, "sexe")}
                  />
                  autre
                </Label>
              </FormGroup>
              <div className="erreur">{this.state.sexeErreur}</div>
            </FormGroup>
            <FormGroup>
              <h3>Est-ce que vous vous considérez comme «désobéissant» ?</h3>
              <FormGroup className="radio">
                <Input
                  type="radio"
                  name="desobei"
                  id="oui"
                  value="oui"
                  onChange={(item) => this.handleChange(item, "desobeissant")}
                />
                <Label>oui</Label>
              </FormGroup>
              <FormGroup className="radio">
                <Input
                  type="radio"
                  name="desobei"
                  id="unPeu"
                  value="un peu"
                  onChange={(item) => this.handleChange(item, "desobeissant")}
                />
                <Label>un peu</Label>
              </FormGroup>
              <FormGroup className="radio">
                <Input
                  type="radio"
                  name="desobei"
                  id="non"
                  value="non"
                  onChange={(item) => this.handleChange(item, "desobeissant")}
                />
                <Label>non</Label>
              </FormGroup>
              <div className="erreur">{this.state.desobeissantErreur}</div>
            </FormGroup>
            <FormGroup>
              <table id="tabDesobei">
                <tbody>
                  <tr>
                    <th className="thead">Action</th>
                    <th className="thead">Déjà réalisé</th>
                    <th className="thead">Efficace</th>
                  </tr>
                  <tr>
                    <td>Signer une pétition</td>
                    <td className="radioTab">
                      <Input type="checkbox" name="petitionRealise" />
                    </td>
                    <td className="radioTab">
                      <Input type="checkbox" name="petitionEfficace" />
                    </td>
                  </tr>
                  <tr>
                    <td>Faire un don</td>
                    <td className="radioTab">
                      <Input type="checkbox" name="donRealise" />
                    </td>
                    <td className="radioTab">
                      <Input type="checkbox" name="donEfficace" />
                    </td>
                  </tr>
                  <tr>
                    <td>Pratiquer le zéro déchet, changer mes habitudes</td>
                    <td className="radioTab">
                      <Input type="checkbox" name="ecologiqueRealise" />
                    </td>
                    <td className="radioTab">
                      <Input type="checkbox" name="ecologiqueEfficace" />
                    </td>
                  </tr>
                  <tr>
                    <td>M’informer à propos de l'actualité</td>
                    <td className="radioTab">
                      <Input type="checkbox" name="informerRealise" />
                    </td>
                    <td className="radioTab">
                      <Input type="checkbox" name="informerEfficace" />
                    </td>
                  </tr>
                  <tr>
                    <td>M’engager en politique</td>
                    <td className="radioTab">
                      <Input type="checkbox" name="politiqueRealise" />
                    </td>
                    <td className="radioTab">
                      <Input type="checkbox" name="politiqueEfficace" />
                    </td>
                  </tr>
                  <tr>
                    <td>Faire la grève</td>
                    <td className="radioTab">
                      <Input type="checkbox" name="greveRealise" />
                    </td>
                    <td className="radioTab">
                      <Input type="checkbox" name="greveEfficace" />
                    </td>
                  </tr>
                  <tr>
                    <td>Manifester</td>
                    <td className="radioTab">
                      <Input type="checkbox" name="manifesterRealise" />
                    </td>
                    <td className="radioTab">
                      <Input type="checkbox" name="manifesterEfficace" />
                    </td>
                  </tr>
                  <tr>
                    <td>Faire de la désobéissance civile</td>
                    <td className="radioTab">
                      <Input type="checkbox" name="desobeissantRealise" />
                    </td>
                    <td className="radioTab">
                      <Input type="checkbox" name="desobeissantEfficace" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </FormGroup>
            <br></br>
            <FormGroup className="wrapper">
              <Button className="btnLogin" onClick={() => this.handleSubmit()}>
                <label>S'inscrire</label>
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Inscription;
