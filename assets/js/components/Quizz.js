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
			score: 0,
			disabled: true,
			isEnd: false,
			items: [],
			quizzdata: [],
			bonnesReponses: [],
		};

		this.element = React.createRef();
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
				console.log(res.data);
				let data = [
					{
						id: res.data.id,
						nom: res.data.nom,
						question: res.data.question,
						options: [
							res.data.reponse1,
							res.data.reponse2,
							res.data.reponse3,
						],
						answer: res.data.reponse1,
					},
				];
				this.setState({quizzdata: data});
			});
	}

	nextQuestionHandler = () => {
		// console.log('test')
		const { myAnswer, quizzdata, score } = this.state;
		this.state.mesReponses.push(myAnswer);
		if (myAnswer === quizzdata[0].answer) {
			this.setState({
				score: score + 1,
			});
		}

		this.setState({
			currentQuestion: this.state.currentQuestion + 1,
		});
		console.log(this.state.currentQuestion);
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.currentQuestion !== prevState.currentQuestion) {
			this.getQuestion();
		}
	}

	//check answer
	checkAnswer = (answer) => {
		this.setState({myAnswer: answer, disabled: false});
	};

	finishHandler = () => {
		if (this.state.currentQuestion == 19) {
			this.setState({isEnd: true,});
		}
		for(var i =0; i < 20; i++){
			var listeEvent = this.state.listQuestion[i];
			axios.get(`/api/quizz/${listeEvent}`)
				.then((res) => {
					let data = res.data.reponse1;
					this.setState({bonneReponses: this.state.bonnesReponses.push(data)});
				})
		}
	};

	render() {
		const { myAnswer, currentQuestion, isEnd, quizzdata, bonnesReponses } = this.state;

		if (isEnd) {
			return (
				<div className="result cadreSombre">
					<h3>Votre score final est : {this.state.score} points sur 20</h3>
					<p>
						Les réponses correctes aux questions étaient :
						<ul>
							 {bonnesReponses.map((item, index) => (
								<li className="ui floating message options" key={index}>
									{item}
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
							<h2>Sujet de la question : {item.nom}</h2>
							<br/>
							<h3>{item.question}</h3>
							<span>Questions {20 - currentQuestion} sur 20 restantes </span>
							<div>
								{item.options.sort(function() {
									return .5 - Math.random();
								}).map(option => (
									<p
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
					{currentQuestion < 19 && (
						<button
							className="ui inverted button"
							disabled={this.state.disabled}
							onClick={this.nextQuestionHandler}
						>
							Next
						</button>
					)}
					{/* //adding a finish button */}
					{currentQuestion === 19 && (
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
