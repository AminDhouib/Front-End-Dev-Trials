import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ReactDOM from 'react-dom';

const Gallery = () => {

  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <div className="container">
      
    </div>
  )
}


class Reviews extends React.Component {
  state = {
    comments: [
      {id: 1, name:"Amin Dhouib", content: "Easy to purchase a game. No hassle!"},
      {id: 2, name:"Yesmine Zribi", content: "Loaded with lots of good information about each game."},
      {id: 3, name:"Rayane Wassim", content: "If this site was a school project, it should get a 100%!"}
    ]
  }

  commentsview = this.state.comments.map(comment => {
    return (
      <div className="container bg-dark" key={comment.id}>
      <span onClick={() => {
        console.log(comment.id);
        var comments = this.state.comments.filter(commentt => {
          return comment.id !== commentt.id
        });
        this.setState({
          comments
        })
      }}>
        <div className="container bg-dark">
          <h6>{comment.name}:</h6>
          <p className="card-text bg-secondary text-white">{comment.content}</p>
          <br/>
        </div>
      </span>
      </div>
    )
  })

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      console.log('State has changed.')
    }
  }

  render(){
  return (

      <div className="container">
        <br></br>
        <br></br>
        <br/>
       


         
        <div className="container">
        <div className="card bg-dark" style={{border: '10px solid black'}}>

          <div className="d-flex justify-content-center">
            <h1 className="text-white float-none"><strong>See what people think of GameSeekers!</strong></h1>
          </div><br/>
          </div>
          <div className="card bg-dark" style={{border: '2px solid black'}}>
          <div className="card-body text-white">
            <h4 className="card-title"><strong>Comments</strong></h4>
            <p className="card-text" id="myp">{this.commentsview}</p>
          </div>
          </div><br/><br/>
          </div>

          <div className="card bg-dark">

          
          <div className="container" style={{border: '10px solid black'}}>
          <div className="d-flex justify-content-center">
            <h1 className="text-white float-none"><strong>Write Your Own Review!</strong></h1>
          </div><br/>
          </div>
           <div className="card bg-dark">
            <div className="card-body text-white" style={{border: '2px solid black'}}>
             <h4 className="card-title"><strong>What do you think of GameSeekers?</strong></h4>
             <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Your name" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              
              <Button variant="secondary text-white" type="submit">Submit</Button>
            </Form>


              <p className="card-text"></p>
            </div>
            </div><br/><br/>
           </div>



    </div>
  )};
}

export default Reviews;
