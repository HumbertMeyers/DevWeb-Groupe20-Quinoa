import React from "react";
import axios from "axios";

class QuizzDB extends React.Component {

    constructor (props) {
        super(props); 
    
        this.state = {
          quizz: [],
        }
      }
    
      componentDidMount() {
        axios.get(`/api/quizz/`)
          .then(res => {
            const quizz = res.quizz;
            this.setState({ quizz });
          })
      }
    
    render() {
        return (
          <div>
            { this.state.quizz.map(quizz => <div>{quizz.question}</div>)}
          </div>
        )
    }
}


export default QuizzDB;
