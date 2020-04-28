// noprotect
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Inscription extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <form className="cadreSombre">
            <h1 className="formTitle text-center">Inscription</h1>
            <FormGroup>
              <h3>Pseudo</h3>
              <Input type="text" name="pseudo" id="pseudo" placeholder="" />
            </FormGroup>
            <FormGroup>
              <h3>Adresse mail</h3>
              <Input type="email" name="email" id="Email" placeholder="" />
            </FormGroup>
            <h3>Age</h3>
            <FormGroup className="radio">
              <Input type="radio" name="radioAge" id="16" />
              <Label>16-18</Label>
            </FormGroup>
            <FormGroup className="radio">
              <Input type="radio" name="radioAge" id="19" />
              <Label>19-21</Label>
            </FormGroup>
            <FormGroup className="radio">
              <Input type="radio" name="radioAge" id="22" />
              <Label>22-25</Label>
            </FormGroup>
            <FormGroup className="radio">
              <Input type="radio" name="radioAge" id="26" />
              <Label>26-29</Label>
            </FormGroup>
            <FormGroup className="radio">
              <Input type="radio" name="radioAge" id="30" />
              <Label>+ 30</Label>
            </FormGroup>
            <FormGroup>
              <h3>Est-ce que vous vous considérez comme «désobéissant» ?</h3>
              <FormGroup className="radio">
                <Input type="radio" name="desobei" id="oui" />
                <Label>oui</Label>
              </FormGroup>
              <FormGroup className="radio">
                <Input type="radio" name="desobei" id="unPeu" />
                <Label>un peu</Label>
              </FormGroup>
              <FormGroup className="radio">
                <Input type="radio" name="desobei" id="non" />
                <Label>non</Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <h6 className="text-center">
                laisser un commentaire (optionnel)
              </h6>
              <textarea id="comDesobei" maxLength="200" />
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
                      <Input type="checkbox" id="petitionRealise" name="petitionRealise" />
                      <label for="petitionRealise"></label>
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
              <Button className="btnLogin">S'inscrire</Button>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default Inscription;
