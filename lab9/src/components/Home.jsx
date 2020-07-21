import React from "react";
import { Link } from 'react-router-dom'
import '../style.css';
import { useTranslation, Trans } from "react-i18next";

 
class Home extends React.Component {

render = () => {
   return (
     <div className="container">
     <br/>
      <br/><br/>

      <div class="parallax">
      <br/><br/>
      <br/><br/>

            <h2 className= "headerSectionForParallax"><Trans>Your Video Game Hub!</Trans></h2>
            <h3 class="textIntro"><Trans>Get Access To All Your Favorite Games All From One Website</Trans></h3>
            <Link to="/shop" className="btn btn-success btn-block"><Trans>Start Browsing Some Games!</Trans></Link>

        </div>

    <div class = "container" id="ourLocationContactInfo">
        <h2 class = "headerSection"><Trans>Company Info</Trans></h2>
        <div class="row">
            <div class="col">
                <div class="container-md p-3 my-3 border bg-dark text-success">
                    <h3 class ="textSectionLargeInfo"><Trans>Company Address</Trans></h3>
                    <h3 class ="textSectionSmallInfo">
                    2105 Weston Road
                    </h3>
                </div>
            </div>
            <div class="col">
                <div class="container-md p-3 my-3 border bg-dark text-success">
                    <h3 class ="textSectionLargeInfo"><Trans>Email</Trans></h3>
                    <h3 class ="textSectionSmallInfo">
                    game_seekers@outlook.com
                    </h3>
                </div>
            </div>
            <div class="col">
                <div class="container-md p-3 my-3 border bg-dark text-success">
                    <h3 class ="textSectionLargeInfo"><Trans>Phone Number</Trans></h3>
                    <h3 class ="textSectionSmallInfo">
                    (613) 543-8901
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
