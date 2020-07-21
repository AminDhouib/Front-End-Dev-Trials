import React from "react";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import YouTube from 'react-youtube';
import { useTranslation, Trans } from "react-i18next";

// Verify information entered is correct
function handleSubmit(event) {
  event.preventDefault();

  // Parse information
  var number =  document.getElementById("number");
  var cvc =  document.getElementById("cvc");
  var name =  document.getElementById("name");
  
  // Check the information
  if (number.value === "" || cvc.value === "" || name.value === ""){
    alert("There are some missing information! Make sure to enter your name and your credit card info in the right format.")
  } else {
    
    var w = window.open('','','width=300,height=100')
    w.document.write('Processing credit card and generating Key Code... Please Wait About 2 Seconds...')
    w.focus();
    setTimeout(function() {w.close();}, 2000)

    var serial = generateGameCode();

    alert("Key Generated! Your game key is: " + serial);
    
    number.value="";
    cvc.value="";
    name.value="";
  }
}

function generateGameCode(){
  var n=0;
  var serial ="";
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
      n = Math.floor(Math.random() * 10);
      serial += n.toString();
    }
    serial += "-";
  }
  serial = serial.substring(0,serial.length-1);
  return serial;
}

// Youtube video options
const videoOptions = {
  height: '270',
  width: '480'
}

// Buy Popup
const PopupExample = () => (
  <Popup trigger={<Button className="btn btn-success"><Trans>Buy Game Code</Trans></Button>} position="right center">
    <div><div class="card-body">
    <form onSubmit={handleSubmit}>
              
              <label className="text-secondary" for="name">Your Name:</label>
              <input class="form-control" data-toggle="tooltip" data-placement="top" title="Please Enter Your Name Here." type="text" id="name"/><br/>
              <label className="text-secondary" for="number">Credit Card Number:</label>
              <input pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" data-toggle="tooltip" data-placement="top" title="Enter Credit Card With This Format: xxxx xxxx xxxx xxxx" class="form-control" type="text" id="number" name="number"/><br/>
              <label className="text-secondary" for="cvc">CVC:</label>
              <input pattern="[0-9]{3}" class="form-control" data-toggle="tooltip" data-placement="top" title="Enter The Security Code of Your Credit Card With This Format: xxx" type="text" id="cvc" name="cvc"/>
              <br/><Button block variant="outline-warning text-secondary" type="submit">Buy The Game!</Button>

              </form>
            </div></div>

  </Popup>
);


function Shop() {

  
  return (

<div className="container">
  <br>
  </br>
  <br>
  </br>
<br/>

         <div className="d-flex justify-content-center">
           <h1 className="float-none text-white"><strong><Trans>Video Game Selection</Trans></strong></h1>
         </div>
    
  <div className="row"> 
  <div class="col">
    <div className="container"><br/>
      <div className="card bg-dark" style={{"width":"480px"}}>
      <YouTube  opts={videoOptions} videoId="wGQHQc_3ycE" />

      <div className="card-body text-white">
        <h5 className="card-title"><strong>Super Mario Odyssey</strong></h5>
        <p className="card-text">
          <Trans i18nKey="odyssey">Super Mario Odyssey is a platform 
          game in which players control Mario 
          as he travels across many different worlds, 
          known as Kingdoms, on the hat-shaped ship Odyssey, 
          to rescue Princess Peach from Bowser, who plans to forcibly marry her.</Trans></p>
          
          <Trans>Release Date</Trans>: 2017
          <br></br>

          <Trans>Price</Trans>: 59.99$<br/><PopupExample/>
      </div>
      </div><br/>
      </div>
      </div>


      <div class="col">
    <div className="container"><br/>
      <div className="card bg-dark" style={{"width":"480px"}}>
      <YouTube  opts={videoOptions} videoId="zw47_q9wbBE" />

      <div className="card-body text-white">
        <h5 className="card-title"><strong>The Legend Of Zelda Breath Of The Wild</strong></h5>
        <p className="card-text">
        <Trans i18nKey="zelda">Breath of the Wild is an action-adventure game set in an open 
        world where players are tasked with exploring the kingdom of Hyrule 
        while controlling Link. Link can procure items from the environment, 
        including weapons, food, and other resources.</Trans></p>
          
        <Trans>Release Date</Trans>: 2017
          <br></br>

          <Trans>Price</Trans>: 59.99$<br/><PopupExample/>
      </div>
      </div><br/>
      </div>
      </div>
      </div>

      <div className="row"> 
  <div class="col">
    <div className="container"><br/>
      <div className="card bg-dark" style={{"width":"480px"}}>
      <YouTube  opts={videoOptions} videoId="hh5HV4iic1Y" />

      <div className="card-body text-white">
        <h5 className="card-title"><strong>Uncharted 4: A Theif's End</strong></h5>
        <p className="card-text">
        <Trans i18nKey="uncharted">Uncharted 4: A Thief's End is an action-adventure 
        game played from a third-person perspective, with platforming 
        elements. Players traverse several environments, moving through 
        locations including towns, buildings and wilderness to advance through the game's story.</Trans></p>
          
          <Trans>Release Date</Trans>: 2016
          <br></br>

          <Trans>Price</Trans>: 19.99$<br/><PopupExample/>
      </div>
      </div><br/>
      </div>
      </div>


      <div class="col">
    <div className="container"><br/>
      <div className="card bg-dark" style={{"width":"480px"}}>
      <YouTube  opts={videoOptions} videoId="FqnKB22pOC0" />

      <div className="card-body text-white">
        <h5 className="card-title"><strong>Overwatch</strong></h5>
        <p className="card-text">
        <Trans i18nKey="overwatch">Overwatch is a team-based multiplayer first-person shooter
         developed and published by Blizzard Entertainment. Players 
         on a team work together to secure and defend control points 
         on a map or escort a payload across the map in a limited amount of time.</Trans></p>
          
         <Trans>Release Date</Trans>: 2014
          <br></br>

          <Trans>Price</Trans>: 29.99$<br/><PopupExample/>
      </div>
      </div><br/>
      </div>
      </div>
      </div>

      <div className="row"> 
  <div class="col">
    <div className="container"><br/>
      <div className="card bg-dark" style={{"width":"480px"}}>
      <YouTube  opts={videoOptions} videoId="vhII1qlcZ4E" />

      <div className="card-body text-white">
        <h5 className="card-title"><strong>The Last Of Us Part II</strong></h5>
        <p className="card-text">
        Set five years after The Last of Us (2013), players control two
         characters in a post-apocalyptic United States: Ellie, 
         who sets out for revenge, and Abby, a soldier who becomes 
         involved in a conflict between a militia and a cult. The 
         game is played from the third-person perspective.</p>
          
         <Trans>Release Date</Trans>: 2020
          <br></br>

          <Trans>Price</Trans>: 59.99$<br/><PopupExample/>
      </div>
      </div><br/>
      </div>
      </div>


      <div class="col">
    <div className="container"><br/>
      <div className="card bg-dark" style={{"width":"480px"}}>
      <YouTube  opts={videoOptions} videoId="s4gBChg6AII" />
      
      <div className="card-body text-white">
        <h5 className="card-title"><strong>World of Warcraft - Shadowlands</strong></h5>
        <p className="card-text">
        World of Warcraft (WoW) is a massively multiplayer online role-playing 
        game (MMORPG) released in 2004 by Blizzard Entertainment. 
        It is the fourth released game set in the Warcraft fantasy universe. When purchasing
        this version of the game, it comes with the new Shadowlands expansion!</p>
          
        <Trans>Release Date</Trans>: 2020
          <br></br>

          <Trans>Price</Trans>: 19.99$ <br/><PopupExample/>
      </div>
      </div><br/>
      </div>
      </div>
      </div>

    </div>


  );

}

export default Shop;
