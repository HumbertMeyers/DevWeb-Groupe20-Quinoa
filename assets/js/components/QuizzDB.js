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
            <div className="container center">
                <div className="row justify-content-md-center">
                    <div className="App cadreSombre">
                        <h1>{this.state.question} </h1>
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