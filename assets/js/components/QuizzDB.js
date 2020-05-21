import React from "react";
import axios from "axios";

class QuizzDB extends React.Component {

    constructor (props) {
        super(props); 
    
        this.state = {
            data: [],
            currentQuestion: 0,

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
        const { options, myAnswer, currentQuestion, isEnd } = this.state;
        return (
            <div className="container center">
                <div className="row justify-content-md-center">
                    <div className="App cadreSombre">
                        <h1>{this.state.data.question} </h1>
                        <span>{`Questions ${currentQuestion}  out of 20 remaining `}</span>

                    </div>
                </div>
            </div>
        )
    }
}


export default QuizzDB;


// { this.state.data.map(({ id, question, reponse1, reponse2, reponse3}) => (
//     <div key={id}>{question} <br/> {reponse1}<br/>{reponse2}<br/>{reponse3}<br/></div>
// ))}