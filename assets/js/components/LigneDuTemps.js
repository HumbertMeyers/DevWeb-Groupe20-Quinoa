import React, { Component } from "react";
import axios from 'axios';

class LigneDuTemps extends Component {

    constructor(props) { 
        super(props); 
  
        this.state = { 
            evenements: [  
            { periode: " " }, 
            { nom: " " },
            ]}; 
    } 
  
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
                    <tbody>{ 
                        this.state.response.map((y) => { 
                            return ( 
                                <tr>
                                    {elementsP}
                                    {elementsN}
                                </tr>
                            ); 
                        }) 
                    }</tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
}

export default LigneDuTemps;
