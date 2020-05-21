import React from "react";
import axios from "axios";

class QuizzDB extends React.Component {

    constructor (props) {
        super(props); 
    
        this.state = {
            data: [],
            currentQuestion: 1,
            myAnswer: null,
            score: 0,
            disabled: true,
            isEnd: false,
            options: [],
        }
    }
    
    componentDidMount() {
        axios.get(`/api/quizz/`)
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
        }

    componentDidUpdate(prevState) {
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    questions: this.state.currentQuestion.question,
                    options: this.state.currentQuestion.reponse1,
                    options: this.state.currentQuestion.reponse2,
                    options: this.state.currentQuestion.reponse3,
                    answer: this.state.currentQuestion.answer,
                };
            });
        }
        }

    checkAnswer = (answer) => {
        this.setState({ myAnswer: answer, disabled: false });
    };

    nextQuestionHandler = () => {
        // console.log('test')
        const { myAnswer, answer, score } = this.state;
    
    
        if (myAnswer === answer) {
          this.setState({
            score: score + 1,
          });
        }
    
        this.setState({
          currentQuestion: this.state.currentQuestion + 1,
        });
        console.log(this.state.currentQuestion);
      };

      finishHandler = () => {
        if (this.state.currentQuestion === 20 ) {
          this.setState({
            isEnd: true,
          });
        }
      };
    
    render() {

        const { options, myAnswer, currentQuestion, isEnd } = this.state;

        if (isEnd) {
            return (
                <div className="result cadreSombre">
                    <h3>Votre score final est de  {this.state.score} points </h3>
                    <p>
                        Les réponses correct étaient :
                        <ul>
                            {data.map((item, index) => (
                            <li className="ui floating message options" key={index}>
                                {item.answer}
                            </li>
                            ))}
                        </ul>
                    </p>
                </div>
            );
        } 
        else {
            return (
                <div className="container center">
                    <div className="row justify-content-md-center">
                        <div className="App cadreSombre">
                            <h1>{this.state.data.question} </h1>
                            <span>{`Question ${currentQuestion}  sur les 20 restantes `}</span>
                            {options.map(({id, reponse1, reponse2, reponse3}) => (
                                <div
                                    key={id}
                                    className={`ui floating message options ${myAnswer === reponse1 ? "selected" : null}`}
                                    onClick={() => this.checkAnswer()}
                                    >
                                    <p>{reponse1}</p>
                                    <p>{reponse2}</p>
                                    <p>{reponse3}</p>
                                </div>
                            ))}
                            {currentQuestion < 20 && (
                                <button
                                    className="ui inverted button"
                                    disabled={this.state.disabled}
                                    onClick={this.nextQuestionHandler}
                                >
                                    Next
                            </button>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
    }
}


export default QuizzDB;


// { this.state.data.map(({ id, question, reponse1, reponse2, reponse3}) => (
//     <div key={id}>{question} <br/> {reponse1}<br/>{reponse2}<br/>{reponse3}<br/></div>
// ))}