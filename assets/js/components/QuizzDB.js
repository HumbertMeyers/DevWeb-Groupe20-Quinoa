import React from "react";
import axios from "axios";

class QuizzDB extends React.Component {

    constructor (props) {
        super(props); 
    
        this.state = {
            data: [],
            currentQuestion: 1,
            myAnswer: null,
            score: 1,
            disabled: true,
            isEnd: false,
            items: [],
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
        const { data, myAnswer, currentQuestion, isEnd } = this.state;
        return (
            <div className="container center">
                <div className="row justify-content-md-center">
                    <div className="App cadreSombre">
                        <h1>{this.state.data.question} </h1>
                        <span>{`Question ${currentQuestion}  sur les 20 restantes `}</span>
                        {data.map((option) => (
                            <p
                            key={option.id}
                            className={`ui floating message options ${myAnswer === option ? "selected" : null}`}
                            onClick={() => this.checkAnswer(option)}
                            >
                            {option}
                            </p>
                        ))}
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