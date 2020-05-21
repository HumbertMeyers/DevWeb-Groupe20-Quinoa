import React from "react";
import axios from "axios";

class QuizzDB extends React.Component {

    constructor (props) {
        super(props); 
    
        this.state = {
          evenement: [],
        }
      }
    
      componentDidMount() {
        axios.get(`/api/quizz/`)
          .then(res => {
            const evenement = res.data;
            this.setState({ evenement });
          })
      }
    
    render() {
        return (
          <div>
            { this.state.evenement.map(evenement => <div>{evenement.question}</div>)}
          </div>
        )
    }
}


export default QuizzDB;
