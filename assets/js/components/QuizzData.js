export const quizzdata = [
  {
    id: 0,
    question: ` What is the Capital Of India ?`,
    options: [`New Delhi`, `Mumbai`, `Kolkatta`],
    answer: `New Delhi`,
  },
  {
    id: 1,
    question: `Who is the CEO of Tesla Motors?`,
    options: [`Bill Gates`, `Steve Jobs`, `Elon Musk`],
    answer: `Elon Musk`,
  },
  {
    id: 3,
    question: `Name World's Richest Man?`,
    options: [`Jeff Bezo`, `Bill Gates`, `Mark Zuckerberg`],
    answer: `Jeff Bezo`,
  },
  {
    id: 4,
    question: `World's Longest River?`,
    options: [`River Nile`, `River Amazon`, `River Godavari`],
    answer: `River Nile`,
  },
];


// class Quizz extends React.Component {
//   state = {
//     loading: true,
//     question: null
//   };

//   async componentDidMount() {
//     const url= "https://vps799626.ovh.net:8000/api/quizz/";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ question: data.results[1],loading: false });
//   }
  
//   render() {
//     return (
//       <div className="container center">
//         <div className="row justify-content-md-center">
//           <div className="cadreSombre">
//             <div>{this.state.question.question}</div>
//             <div>{this.state.question.reponse1}</div>
//             <div>{this.state.question.reponse2}</div>
//             <div>{this.state.question.reponse3}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
