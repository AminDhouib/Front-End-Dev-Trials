import React from "react";
import Todos from '../Todos';
import AddTodo from '../addTodo';
import uuid from 'uuid';
import { Trans } from "react-i18next";
import 'react-alice-carousel/lib/alice-carousel.css'


class Reviews extends React.Component {
  state = {
    todos: [
      {id: 1, title:"Amin Dhouib", comment: "Easy to purchase a game. No hassle!"},
      {id: 2, title:"Yesmine Zribi", comment: "Loaded with lots of good information about each game."},
      {id: 3, title:"Rayane Wassim", comment: "If this site was a school project, it should get a 100%!"}
    ]
  }

  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      console.log('State has changed.')
    }
  }


    // Add Todo
    addTodo = (title,comment) => {
      const newTodo = {
        title: title,
            comment: comment,
            id: uuid.v4(),
      }
          this.setState({ todos: [...this.state.todos, newTodo] });
  
    };

  render(){
  return (

      <div className="container">
        <br/>
        
      <br></br>
      <br></br>

         <div className="d-flex justify-content-center">
           <h1 className="blueText float-none text-white"><strong><Trans>Customer Reviews</Trans></strong></h1>
         </div><br/>

         <div className="container">
              <div className="card bg-dark whiteText">
                <div className="card-body text-white">
                  <h4 className="card-title"><strong><Trans>Reviews</Trans></strong></h4>
                  <p className="card-text" id="myp">
                  <Todos
                    todos={this.state.todos}
                  />
                  </p>
                  </div>
                </div><br/><br/>
              </div>
              
         <div className="container">
           <div className="card bg-dark whiteText">
           <div className="card-body text-white">
             <h4 className="card-title"><strong><Trans>Write A Review About GameSeekers</Trans></strong></h4>
             <AddTodo addTodo={this.addTodo} />
           <p className="card-text"></p>
           </div>
           </div><br/><br/>
           </div>

            </div>
  )};
}

export default Reviews;
