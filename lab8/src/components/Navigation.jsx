import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import gameSeekersLogo from '../assets/gameSeekersLogo.png';

class Navigation extends React.Component {

  render(){ return (
    <div className="navigation">
    <div className="container">
      <>
      <Navbar style={{backgroundColor: '#1a1a1a'}} fixed="top">
      <Navbar.Brand className="text-white" href="/">GameSeekers 
          <img className="ml-2"
            src={gameSeekersLogo}
            style={
              { width: '60px' }
            }
            atl="Logo"
          ></img>
        </Navbar.Brand>
        <Nav style={{backgroundColor: '#1a1a1a'}} className="text-white ml-auto">
          <Nav.Link href="/"><i class="fas fa-home text-white"></i><span class="text-white"> Home</span></Nav.Link>
          <Nav.Link href="/shop"><i class="fas fa-shopping-cart text-white"></i> <span class="text-white"> Products</span></Nav.Link>
          <Nav.Link href="/reviews"><i class="fas fa-star text-white"></i> <span class="text-white"> Reviews </span></Nav.Link>
        </Nav>
      </Navbar>
      </>
    </div>
    </div>
  );}
}

export default withRouter(Navigation);
