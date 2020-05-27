// noprotect
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class Administration extends Component{
	constructor(props) {
		super(props);
		this.state = {
			selectEvent : true,
		}

		this.handleChange = this.handleChange.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({[name]: value});
		if(this.state.nom !== undefined) {
			let nom = this.state.nom;
			axios
				.get(`/api/evenements/${nom}`)
				.then((res) => {
					console.log(res);
					this.setState({
							periode: res.data.periode,
							lieu: res.data.lieu,
							lutte: res.data.lutte,
							strategie: res.data.strategie,
							action: res.data.action,
							victoire: res.data.victoire,
							anecdote: res.data.anecdote,
							citation: res.data.citation,
							question: res.data.question,
							reponse1: res.data.reponse1,
							reponse2: res.data.reponse2,
							reponse3: res.data.reponse3,
							video: res.data.video,
							article: res.data.article
						}
					);
					//console.log(res.data);
				});
		}
	}

	handleSubmit() {
		let nom = this.state.nom;
		const eventObject = {
			nom: this.state.nom,
			periode: this.state.periode,
			lieu: this.state.lieu,
			lutte: this.state.lutte,
			strategie: this.state.strategie,
			action: this.state.action,
			victoire: this.state.victoire,
			anecdote: this.state.anecdote,
			citation: this.state.citation,
			question: this.state.question,
			reponse1: this.state.reponse1,
			reponse2: this.state.reponse2,
			reponse3: this.state.reponse3,
			video: this.state.video,
			article: this.state.article,
		};
		switch (method) {
			case "post":
				axios
					.post("/api/evenements/add/", eventObject)
					.then((response) => {
						//console.log(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
				break;
			case "put":
				axios
					.put(`/api/evenements/update/${nom}`, eventObject)
					.then((response) => {
						//console.log(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
				break;
			case "delete":
				axios
					.delete(`/api/evenements/delete/${nom}`, eventObject)
					.then((response) => {
						//console.log(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
				break;
			default:
				axios
					.get(`/api/evenements/${nom}`, eventObject)
					.then((res) => {
						console.log(res);
						this.setState({
							periode: res.data.periode,
							lieu: res.data.lieu,
							lutte: res.data.lutte,
							strategie: res.data.strategie,
							action: res.data.action,
							victoire: res.data.victoire,
							anecdote: res.data.anecdote,
							citation: res.data.citation,
							question: res.data.question,
							reponse1: res.data.reponse1,
							reponse2: res.data.reponse2,
							reponse3: res.data.reponse3,
							video: res.data.video,
							article: res.data.article}
						);
						//console.log(res.data);
					});
		}
	}

	render() {
		if(this.state.selectEvent){
			return(
				<div className="container center">
					<div className="cadreSombre">
						<h1>Page d'ajout ou de modification d'un évenement</h1>

						<form onSubmit={this.handleSubmit}>
							<label>
								Que voulez vous faire ? <span>   </span>
								<select value={this.state.method} onChange={this.handleChange}>
									<option value="get">Verifier</option>
									<option value="post">Ajouter</option>
									<option value="put">Modifier</option>
									<option value="delete">Supprimer</option>
								</select>
							</label>
							<br/>
							<label>
								Nom :<span>  </span>
								<input
								name="nom"
								type="text"
								placeholder="nom"
								value={this.state.nom}
								onChange={this.handleChange}/>
							</label><span>  </span>
							<label>
								Année :<span>  </span>
								<input
								name="periode"
								type="number"
								size="5"
								placeholder="Année"
								value={this.state.periode}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Lieu :<br/>
								<textarea
								name="lieu"
								rows="1"
								cols="90"
								placeholder="lieu"
								value={this.state.lieu}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Lutte :<br/>
								<textarea
								name="lutte"
								rows="1"
								cols="90"
								value={this.state.lutte}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Strategie :<br/>
								<textarea
								name="strategie"
								rows="1"
								cols="90"
								value={this.state.strategie}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Action :<br/>
								<textarea
								name="action"
								rows="1"
								cols="90"
								value={this.state.action}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Victoire :<br/>
								<textarea
								name="victoire"
								rows="1"
								cols="90"
								value={this.state.victoire}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Anecdote :<br/>
								<textarea
								name="anecdote"
								rows="1"
								cols="90"
								value={this.state.anecdote}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Citation :<br/>
								<textarea
								name="citation"
								rows="1"
								cols="90"
								value={this.state.citation}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Question :<br/>
								<textarea
								name="question"
								rows="1"
								cols="90"
								value={this.state.question}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Première réponse (la réponse correcte) :<br/>
								<textarea
								name="reponse1"
								rows="1"
								cols="90"
								value={this.state.reponse1}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Deuxième réponse :<br/>
								<textarea
								name="reponse2"
								rows="1"
								cols="90"
								value={this.state.reponse2}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Troisième réponse :<br/>
								<textarea
								name="reponse3"
								rows="1"
								cols="90"
								value={this.state.reponse3}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Video :<br/>
								<textarea
								name="video"
								rows="1"
								cols="90"
								value={this.state.video}
								onChange={this.handleChange}/>
							</label><br/>
							<label>
								Article :<br/>
								<textarea
								name="article"
								rows="1"
								cols="90"
								value={this.state.article}
								onChange={this.handleChange}/>
							</label><br/>
							<input type="submit" className="btnLogin" value="Enregistrer" />
						</form>
					</div>
				</div>
			)
		} else {
		}
	}
}

export default Administration;
