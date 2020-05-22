import React from "react";
import axios from "axios";

class Quizz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listQuestion: [],
      currentQuestion: 0,
      myAnswer: null,
      options: [],
      score: 1,
      disabled: true,
      isEnd: false,
      items: [],
      quizzdata: [],
      id: "",
      question: "",
      reponse1: "",
      reponse2: "",
      reponse3: "",
    };
  }

  loadquizzdata = () => {
    const event = this.state.listQuestion[this.state.currentQuestion];
    const quizzdata = [
      {
        id: event.id,
        question: event.question,
        options: [
          event.reponse1,
          event.reponse2,
          event.reponse3,
        ],
        answer: event.reponse1,
      },
    ];
    this.setState(() => {
      return {
        questions: quizzdata[this.state.currentQuestion].question,
        answer: quizzdata[this.state.currentQuestion].answer,
        options: quizzdata[this.state.currentQuestion].options,
      };
    });
  };

  componentDidMount() {
    axios.get(`/api/startQuizz/`)
      .then((res) =>{
        this.setState({listQuestion: res.data});
      });
    this.getQuestion();
  }

  getQuestion = () => {
    const event = this.state.listQuestion[this.state.currentQuestion];
    axios.get(`/api/quizz/${event}`)
      .then((res) => {
        this.loadquizzdata(res);
      });
  }

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
    this.getQuestion();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizzdata[this.state.currentQuestion].question,
          options: quizzdata[this.state.currentQuestion].options,
          answer: quizzdata[this.state.currentQuestion].answer,
        };
      });
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };

  finishHandler = () => {
    if (this.state.currentQuestion === quizzdata.length - 1) {
      this.setState({
        isEnd: true,
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd, quizzdata } = this.state;

    if (isEnd) {
      return (
        <div className="result cadreSombre">
          <h3>Game Over your Final score is {this.state.score} points </h3>
          <p>
            The correct answer's for the questions was
            <ul>
              {quizzdata.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </p>
        </div>
      );
    } else {
      return (
        <div className="App cadreSombre">
          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion}  out of 20 remaining `}</span>
          {options.map((option) => (
            <p
              key={option.id}
              className={`ui floating message options ${
                myAnswer === option ? "selected" : null
              }`}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
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
          {/* //adding a finish button */}
          {currentQuestion === 20 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default Quizz;
