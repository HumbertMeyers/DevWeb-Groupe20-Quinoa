import React from "react";

class Quizz extends React.Component {
  state = {
    loading: true,
    question: null
  };

  async componentDidMount() {
    const url= "https://vps799626.ovh.net:8000/api/quizz/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ question: data.results[1],loading: false });
  }
  
  render() {
    return (
      <div className="container center">
        <div className="row justify-content-md-center">
          <div className="cadreSombre">
            <div>{this.state.question.question}</div>
            <div>{this.state.question.reponse1}</div>
            <div>{this.state.question.reponse2}</div>
            <div>{this.state.question.reponse3}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quizz;
