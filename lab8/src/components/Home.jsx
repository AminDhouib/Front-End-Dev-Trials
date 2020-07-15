import React from "react";
import { Link } from 'react-router-dom'
import '../style.css';
 
class Home extends React.Component {

render = () => {
   return (
     <div className="container">
     <br/>
      <br/><br/>

      <div class="parallax">
            <h2 class = "headerSectionForParallax">Your Video Game Hub!</h2>
            <h3 class = "textIntro">Get Access To All Your Favorite Games All From One Website</h3>
            <Link to="/shop" className="btn btn-success btn-block">Start Browsing Some Games!</Link>

        </div>

    <div class = "container" id="ourExperts">
        <h2 class = "headerSection">Our Reviews </h2>
        <div class="row">
            <div class="col-sm-6">
                <div class="container-md p-3 my-3 border bg-dark text-success">
                    <h3 class ="textSectionLarge">Jeremy Falcon</h3>
                    <img class="card-img-top" src={require("./img/colin.png")} style={{"width":"50%"}}></img>
                    <h3 class ="textSectionSmall">
                        I have been using GameSeekers for about 2 years now. I must say, it is very easy to navigate and
                        most importantly very easy to get the games you want to play. I give Gameseekers an easy 5/5!
                    </h3>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="container-md p-3 my-3 border bg-dark text-success">
                    <h3 class ="textSectionLarge">Colin Sprouse</h3>
                    <img class="card-img-top" src={require("./img/jeremy.jpg")} style={{"width":"50%"}}></img>
                    <h3 class ="textSectionSmall">
                        If you are a gamer or you love any kind of games, make THIS your new place to get your video games. 
                        Forget getting the games from Amazon or any other retailers. This is the best way! 5/5 for me!
                    </h3>
                </div>
            </div>
        </div>

    </div>
    <br></br>
    <br></br>

      </div>
   )
 }
}

export default Home;
