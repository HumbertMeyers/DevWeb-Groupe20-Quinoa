import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import TextField from "@material-ui/core/TextField";

class Inscription extends Component {
  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <form className="login-form col-lg-7 col-md-10 col-sm-11 col-xs-12">
            <h1 className="formTitle text-center">Inscripti</h1>
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
              <h6 className="text-center">laisser un commentaire</h6>
              <TextField id="comDesobei" inputProps={{ maxLength: 12 }} />
            </FormGroup>
            <FormGroup>
              <table id="tabDesobei">
                <tbody>
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                  </tr>
                </tbody>
              </table>
            </FormGroup>
            <br></br>
            <Button className="btnLogin">S'inscrire</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Inscription;
