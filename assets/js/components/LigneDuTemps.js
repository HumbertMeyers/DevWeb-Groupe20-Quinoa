import React, { Component } from "react";
import { Button, FormGroup, Input } from "reactstrap";

class LigneDuTemps extends Component {
  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
            <div className="cadreSombre">
                <table id="tabDesobei">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Noms</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Date</td>
                            <td>Noms lier à cette date...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
}

export default LigneDuTemps;
