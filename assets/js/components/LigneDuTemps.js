import React, { Component } from "react";
import axios from 'axios';
import { ldtdata } from "./LDTData";


class LigneDuTemps extends Component {

    state = {
        
      };
  
    componentDidMount() { 
        axios.get('url api') 
        .then((response) => { 
            this.setState({ response: response}); 
        }); 
    } 
      

  render() {

    const elementsP = this.state.evenements.map(evenement => (
        <td>{evenement.periode}</td>
    ));
    const elementsN = this.state.evenements.map(evenement => (
        <td>{evenement.nom}</td>
    ));

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
                            {elementsP}
                            {elementsN}
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
