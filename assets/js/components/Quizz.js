import React from "react";
import axios from "axios";

class Quizz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listQuestion: [],
      currentQuestion: 0,
      myAnswer: null,
      mesReponses: [],
      score: 1,
      disabled: true,
      isEnd: false,
      items: [],
      quizzdata: [],
      id:"",
      question: "",
      options: [],
      answer: "",
      reponse1: "",
      reponse2: "",
      reponse3: "",
    };
  }

  componentDidMount() {
    axios.get(`/api/startQuizz/`)
      .then((res) =>{
        this.setState({listQuestion: res.data});
      });
    setTimeout(() => {
      this.getQuestion();
    }, 1500);

  }

  getQuestion = () => {
    let event = this.state.listQuestion[this.state.currentQuestion];
    axios.get(`/api/quizz/${event}`)
      .then((res) => {
        console.log(res);
        let data = [
          {
            id: res.data.id,
            question: res.data.question,
            options: [
              res.data.reponse1,
              res.data.reponse2,
              res.data.reponse3,
            ],
            answer: res.data.reponse1,
          },
        ];
        console.log(data);
        this.setState({quizzdata: data});
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
      this.getQuestion();
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.state.mesReponses.push(answer);
    this.setState({disabled: false});
  };

  finishHandler = () => {
    if (this.state.currentQuestion === this.state.quizzdata.length - 1) {
      this.setState({
        isEnd: true,
      });
    }
  };
  render() {
    const { myAnswer, currentQuestion, isEnd, quizzdata, question, options} = this.state;

    if (isEnd) {
      return (
          <div className="result cadreSombre">
          <h3>Game Over your Final score is {this.state.score} points </h3>
          <p>
            The correct answer's for the questions was
            <ul>
              {quizzdata[0].map((item, index) => (
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
          {quizzdata.map((item, index) => (
            <div key={index}>
              <h2>{item.question}</h2>
              <span>Questions {20 - currentQuestion} sur 20 restantes </span>
              <div>
                {item.options.map((option) => (
                  <p
                    key={item.id}
                    className={`ui floating message options ${
                      myAnswer === option ? "selected" : null
                    }`}
                    onClick={() => this.checkAnswer(option)}
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <br/>
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
