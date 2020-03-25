import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input} from "reactstrap";


class Inscription extends Component {
    render() {
        return (
            <Form className="login-form">
                <h1 className="text-center mb-8">Quelques questions</h1>
                <FormGroup>
                    <p>Age</p>
                    <Label className="radioAge">
                        <Input type="radio" name="16"/>
                        <Label>16-18</Label>
                    </Label>
                    <Label className="radioAge">
                        <Input type="radio" name="16"/>
                        <Label>18-21</Label>
                    </Label>
                    <br></br>
                </FormGroup>
                <FormGroup>
                    <label className="pswd">Mot de Passe</label>
                    <Input type="password" name="password" id="examplePassword" placeholder="mot de passe" />
                </FormGroup>
                <Button className="">S'inscrire</Button>
            </Form>
    )
    }
}

export default Inscription;