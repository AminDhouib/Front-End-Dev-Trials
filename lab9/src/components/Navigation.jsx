import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import gameSeekersLogo from '../assets/gameSeekersLogo.png';
import { useTranslation, Trans } from "react-i18next";
import Button from "react-bootstrap/Button";

function handleSubmit(event) {
  event.preventDefault();
}

function Navigation() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {i18n.changeLanguage(lng)}; 
  
  return (
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
          <Nav.Link href="/"><i class="fas fa-home text-white"></i><span class="text-white"><Trans> Home</Trans></span></Nav.Link>
          <Nav.Link href="/shop"><i class="fas fa-shopping-cart text-white"></i> <span class="text-white"><Trans>Store</Trans></span></Nav.Link>
          <Nav.Link href="/reviews"><i class="fas fa-star text-white"></i> <span class="text-white"><Trans>Reviews</Trans></span></Nav.Link>
        </Nav>
      <Button className="btn btn-success" onClick={() => {changeLanguage("en");window.location.reload(false)}}>English</Button>
      <Button className="btn btn-success" onClick={() => {changeLanguage("fr");window.location.reload(false)}}>Francais</Button>
      </Navbar>
      </>
    </div>
    </div>
  );
}

export default withRouter(Navigation);
