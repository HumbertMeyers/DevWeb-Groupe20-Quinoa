import React from "react";
import axios from "axios";

class QuizzDB extends React.Component {

    constructor (props) {
        super(props); 
    
        this.state = {
          data: [],
        }
      }
    
      componentDidMount() {
        axios.get(`/api/quizz/`)
          .then(res => {
            const data = res.data;
            this.setState({ data });
          })
      }
    
    render() {
        return (
          <div>
            { this.state.data.map(data => <div>{data.id}</div>)}
            { this.state.data.map(data => <div>{data.question}</div>)}
            { this.state.data.map(data => <div>{data.reponse1}</div>)}
            { this.state.data.map(data => <div>{data.reponse2}</div>)}
            { this.state.data.map(data => <div>{data.reponse3}</div>)}
          </div>
        )
    }
}


export default QuizzDB;
