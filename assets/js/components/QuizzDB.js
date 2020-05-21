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
          <div>
                { this.state.data.map(({ id, quizz }) => (
                    <div key={id}>{quizz}</div>
                ))}
          </div>
        )
    }
}


export default QuizzDB;
<div className="userList">
      {this.props.users.map(({ id, name }) => (
        <a href={`/users/${id}`} key={id}>{name}</a>
      ))}
    </div>